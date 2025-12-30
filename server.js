
let express = require("express");

let app = express();

let PORT = 3000;


app.use(express.json());

// app.get("/user/id/:id",(req,res)=>{
//     console.log(req.params)
//     res.send("get user data");
// })

// app.get("/user/name/:name",(req,res)=>{
//     console.log(req.params)
//     res.send("get user data");
// })
// app.get("/user/eamil/:email",(req,res)=>{
//     console.log(req.params)
//     res.send("get user data");
// })
// app.get("/user/salary/:salary",(req,res)=>{
//     console.log(req.params)
//     res.send("get user data");
// })

// app.get("/user",(req,res)=>{
//     console.log(req.query);
//     res.send(" get user details ")
// })


// app.get("/user",(req,res)=>{
//     console.log(req.body);
//     res.send("Get user details");
// })



app.get("/user/name/:name",(req,res)=>{
    console.log(req.params)
    console.log(req.body)
    res.send("get user details")
    // console.log(req.query)
})

app.listen(PORT,()=>{
    console.log("Server is run on PORT 3000");
})


