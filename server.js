
// let express = require("express");

// let app = express();

// let PORT = 3000;


// app.use(express.json());

// // app.get("/user/id/:id",(req,res)=>{
// //     console.log(req.params)
// //     res.send("get user data");
// // })

// // app.get("/user/name/:name",(req,res)=>{
// //     console.log(req.params)
// //     res.send("get user data");
// // })
// // app.get("/user/eamil/:email",(req,res)=>{
// //     console.log(req.params)
// //     res.send("get user data");
// // })
// // app.get("/user/salary/:salary",(req,res)=>{
// //     console.log(req.params)
// //     res.send("get user data");
// // })

// // app.get("/user",(req,res)=>{
// //     console.log(req.query);
// //     res.send(" get user details ")
// // })


// // app.get("/user",(req,res)=>{
// //     console.log(req.body);
// //     res.send("Get user details");
// // })

// function sample(req,res,next){
//     console.log("sample middle ware")
//     next();
   
// }

// function login (req,res,next){
//     console.log(req.query);
//     if(req.query.username === "Venukumar" && req.query.password==="12345"){
//         next();

//     }else{
//         return res.status(404).send({
//             message : "Acess denied"
//         })
//     }
//     next();

// }



// app.get("/login",login ,(req,res)=>{
//     // console.log(req.query)
//     res.send({message :"User has logged in"})
//     // console.log(req.query)
// })

// app.listen(PORT,()=>{
//     console.log("Server is run on PORT 3000");
// })




let express = require("express");

let app = express();

let PORT = 3000;



function login(req,res,next){
    console.log(req.query)

    if(req.query.email=== "venu@gmail.com" && req.query.password==="12345"){
        next()
    }else{
        return res.status(404).send({
            message : "Access denied"
        })
    }
    next();

}


app.get("/login",login,(req,res)=>{
    console.log(req.query)
    res.send("The user has logge in")
})


app.listen(PORT,()=>{
    console.log("Server is runnig on PORT 3000");
})