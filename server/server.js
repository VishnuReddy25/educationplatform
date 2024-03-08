const express=require("express")
const app=express("express")
const cors=require("cors")
const {MongoClient}=require("mongodb")
const uri=require("./uri.js")
const nodemailer=require("nodemailer")
const htmlOtpTemplate =require("./mailTemplates/htmlOtpTemplate.js")
const math=require("math")
app.use(cors())
app.use(express.json())
const cluster=new MongoClient(uri)
cluster.connect().then(console.log("database successfully conncted")).catch(err=>{console.log(err)})
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'edulink.mailservices@gmail.com',
      pass: 'hcob coir phyo alpo'
    }
  });
  let mailOptions = (receiver,subject,htmlTemplate)=>{return{
    from: "edulink.mailservices@gmail.com", // sender address
    to: receiver, 
    subject: subject, // Subject line
    text: 'Hello world?', // plain text body
    html: htmlTemplate // html body
  }};
app.post("/api/auth/login", async(req,res)=>{
    try{
    const data=req.body
    console.log(req)
    console.log(req.body)
     if(data.authType=="general"){
        const accounts=await cluster.db("edulink").collection("accounts")
        const recv_data=await accounts.findOne({email:data.email,password:data.password})
        if (recv_data==null){
            res.status(200).send({acknowledged:false,des:"account not found"})
        }else{
            res.status(200).send({acknowledged:true,loginDetails:recv_data})
        }
    }
    }catch(err){
        console.log(err);
        res.status(404).send({acknowledged:false,des:"error occurred at our server"});
    }


    })

app.post("/api/auth/signup",async(req,res)=>{
    try{
        const data =req.body
         if(data.authType=="general"){
            const accounts =await cluster.db("edulink").collection("accounts")
            const recv_data=await accounts.findOne({email:data.email})
            if (recv_data==null){
                const create_account=await accounts.insertOne(data)
                res.status(200).send({acknowledged:create_account.acknowledged,des:"account successfully created"})
        }else{
            res.status(200).send({acknowledged:false,des:"account aldready exists please sign in to continue"})
        }
        }

    }catch(err){
        console.log(err)
        res.status(404).send({acknowledged:false,des:"error occurred at our server"})
    }
})
app.post("/api/auth/google",async(req,res)=>{
    try{
    const data=req.body
    const accounts =await cluster.db("edulink").collection("accounts")
        const recv_data=await accounts.findOne({email:data.email})
        if (recv_data==null){
            const create_account=await accounts.insertOne(data)
            const account_data=await accounts.findOne({email:data.email})

            res.status(200).send({acknowledged:create_account.acknowledged,des:"account successfully created",...account_data})
        }else{
            res.status(200).send({acknowledged:true,des:"account fetched successfully",...recv_data})
        }
    }catch(err){
        console.log(err)
        res.status(404).send({acknowledged:false,des:"error occured at our server"})
    }

})

app.post("/api/send-otp",async(req,res)=>{
    try{
        console.log("request received")
    const data=req.body
    const min = 1000;
    const max = 9999;
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    const otpdb=await cluster.db("edulink").collection("otp")
    const otp_res=await otpdb.findOneAndUpdate({_id:data.email},{$set:{otp:otp}},{upsert:true})
    if(otp_res!=null){
        transporter.sendMail(mailOptions(data.email,"mail verification",htmlOtpTemplate(otp)),(err,info)=>{
            if(err){
                console.log(err)
                res.send({acknowledged:false,des:"error occurred at our server"})
            }
            res.send({acknowledged:true,des:"otp sent"})
        })
        
    }else{
        console.log(otp_res)
    }
    }catch(err){
        console.log(err)
        res.send({acknowledged:false,des:"error occured at our server"})
    }

})

app.post("/api/verify-otp",async(req,res)=>{
    try{
        const data=req.body
        const otpdb=await cluster.db("edulink").collection("otp")
        const res_otp=await otpdb.findOne({email:data.email})
        if(res_otp!==null && res_otp.otp==data.otp){
            res.send({acknowledged:true,des:"account created and verified"})

        }else{
            res.send({acknowledged:false,des:"otp verification failed"})
        }
    }catch(err){
        console.log(err)
        res.send({acknowledged:false,des:"error occured at our server"})
    }
})
app.listen(3001,()=>{console.log("backend running on the port 3001")})