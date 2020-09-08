const mongoose = require('mongoose');
//JS interacting with database
mongoose.connect('mongodb://localhost:27017/cat_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));

//data structure..defining pattern for data
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});
//"Cat" is a singular version of cat schema. name of model needs to be capitalised
var Cat = mongoose.model("Cat", catSchema);

// //adding a new cat to the DB
// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// //save george..it takes time to save
// george.save(function (err, cat) {
//     if (err) {
//         console.log("opps. something went wrong")
//     } else {
//         console.log("We just save a cat to the DB")
//         console.log(cat);
//     }
// });

//create and save new
Cat.create({
    name: "snow white",
    age: 15,
    temperament: "Blend"
}, function (err, cat) {
    if (err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});

//retrive all cats from database

Cat.find({}, function (err, cats) {
    if (err) {
        console.log("Oh no... ERROR!");
        console.log(err);
    } else {
        console.log("All the cats....");
        console.log(cats);
    }
})
