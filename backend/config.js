const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://madhumitha:Vishwadowlathu123@complaint-registration.vuq1f.mongodb.net/?retryWrites=true&w=majority&appName=complaint-registration")
.then(()=>{
   console.log("connected to mongodb")
})