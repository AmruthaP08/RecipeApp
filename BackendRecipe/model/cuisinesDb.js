const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://amruthap8:d5TuXrvZdSv69fEj@cluster0.thrg5ui.mongodb.net/Cuisines?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
})

.catch(err=>console.log(err))


let Schema= mongoose.Schema;

const cuisineSchema = new Schema({
    cname:String,
    duration:Number,
    nos:Number,
    cimg:String
});

var cuisineModel = mongoose.model("cuisine",cuisineSchema);

module.exports = cuisineModel;
