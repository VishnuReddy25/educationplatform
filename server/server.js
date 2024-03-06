const express=require("express")
const app=express("express")
const cors=require("cors")
const {MongoClient}=require("mongodb")
const uri=require("./uri.js")
app.use(cors())
app.use(express.json())
const cluster=new MongoClient(uri)
cluster.connect().then(console.log("database successfully conncted")).catch(err=>{console.log(err)})
app.post("/api/auth/login", async(req,res)=>{
    try{
    const data=req.body
    console.log(req)
    console.log(req.body)
    if (data.authType=="google"){
        const accounts=await cluster.db("edulink").collection("accounts")
        const recv_data=await accounts.findOne({email:data.email})
        if (recv_data==null){
            res.send({acknowledged:false,des:"account not found"})
        }else{
            res.send({acknowledged:true,loginDetails:recv_data})
        }

    }else if(data.authType=="general"){
        const accounts=await cluster.db("edulink").collection("accounts")
        const recv_data=await accounts.findOne({email:data.email,password:data.password})
        if (recv_data==null){
            res.send({acknowledged:false,des:"account not found"})
        }else{
            res.send({acknowledged:true,loginDetails:recv_data})
        }
    }
    }catch(err){
        console.log(err);
        res.send({acknowledged:false,des:"error occurred in the backend"});
    }


    })

// app.post("/api/auth/signup",async(req,res)=>{
//     try{
//         const data =req.body
//         const accounts =await cluster.db("edulink").collection("accounts")
//         const recv_data=await accounts.findOne({email:data.email})
//         if (recv_data==null){
//            account
//         }else{
//             res.send({acknowledged:false,des:"account aldready exists please sign in to continue"})
//         }

//     }
// })
app.listen(3001,()=>{console.log("backend running on the port 3001")})