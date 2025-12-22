const mongoose=require('mongoose');
const Chat=require("./models/chat.js");

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

let allchats=[
    {
        from:"Sandhya",
        to:"neha",
        msg:"whats up?",
        created_at: new Date(),
    },
    {
        from:"priya",
        to:"yogii",
        msg:"may i help you ?",
        created_at: new Date(),
    },
    {
        from:"sadhana",
        to:"rosy",
        msg:"All the best",
        created_at: new Date(),
    },
    {
        from:"neeta",
        to:"Paru",
        msg:"how are you?",
        created_at: new Date(),
    }
]

Chat.insertMany(allchats);

// allChats.save().then((res)=>console.log(res))
//             .catch((err)=>console.log(err));
