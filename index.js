const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("Success!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Created Schema using mongoose.
const userSchema = mongoose.Schema({
  name: String,
  email : String,
  age : Number
})

//Created Model (Collection) in mongoose.
const User = mongoose.model("User",userSchema);

// Created a document (Object) of User class.
const user1 = new User({
  name : "Sam",
  email : "SamJoshua2007@yahoo.com",
  age : 18
})

// Saving it into the DB using save().
user1.save().then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
})
