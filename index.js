const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require("path");
const Chat=require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("views engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ encoded:true }));

main()
      .then((res)=>{
        console.log("connection successful");
      })
      .catch((err)=>{
        console.log(err);
      });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}      

//Index Route
app.get("/chats", async (req,res)=>{
  let chats= await Chat.find();
  //console.log(chats);
  res.render("index.ejs",{chats});
});

//New Route
app.get("/chats/new",(req,res)=>{
  res.render("new.ejs");
});

//Create route
app.post("/chats",(req,res)=>{
  let {from,msg,to}=req.body;
  let newChat=new Chat({
    from:from,
    msg: msg,
    to: to,
    created_at: new Date(),
  });
  newChat.save()
  .then((res)=>console.log(res))
  .catch((err)=>console.log(err));
  res.redirect("/chats");
});

//Edit Route
app.get("/chats/:id/edit", async (req,res)=>{
  let {id}=req.params;
  let chat= await Chat.findById(id);
  res.render("edit.ejs",{chat});
});

//put Request
app.put("/chats/:id",(req,res)=>{
   let {id}=req.params;
   let {msg: newMsg}=req.body;
   
})

app.get('/',(req,res)=>{
    res.send("root is working");
});

app.listen(8080,()=>{
  console.log("server is running !");
});
      