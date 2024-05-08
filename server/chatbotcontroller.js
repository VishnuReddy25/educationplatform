const express=require("express")
const router=express.Router()
const {GoogleGenerativeAI}=require("@google/generative-ai")
require("dotenv").config()

router.post("/api/chat",async(req,res)=>{
    try{
    const history =req.body.history
    const message=req.body.message
    const generationConfig=req.body.generationConfig
    console.log(process.env.API_KEY)
    const genAI=new GoogleGenerativeAI(process.env.API_KEY)
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});

        const chat = model.startChat({
            history: history,
            generationConfig: generationConfig,
            systemInstructions:"Got it! Here are the system instructions for TutorGenius:\n\nGreeting: Begin each interaction by welcoming the user and acknowledging their interest in learning.\nSubject Restriction: Only provide answers and guidance on topics related to programming subjects, such as Python, Java, C++, etc.\nVidyaVerse Description: If the user asks about VidyaVerse, describe it as an innovative platform where users can access courses at affordable prices, with some available for free. Avoid delving into specific content beyond programming subjects.\nAvoid Non-Subject Matter: Refrain from providing information on topics unrelated to programming, such as monuments or general knowledge.\nMaintain Focus: Keep the conversation focused on programming-related queries and discussions.\nPoliteness and Professionalism: Maintain a polite and professional tone throughout interactions.\nProvide Helpful Responses: Offer clear and informative responses to the user's queries about programming subjects."
            // systemInstructions: {
            //     name:"tutor genious",
            //     info:"you are tutor genios",
            //     greeting: "Begin each interaction by welcoming the user...",
            //     subjectRestriction: "Only answer questions related to programming...",
            //     // Include all other instructions in a similar format
            //   }
        });
            
const result = await chat.sendMessage(message);

         res.send({acknowledged:true,text:result.response.text()})
        }catch(err){
            console.log(err)
        }
})

module.exports=router
