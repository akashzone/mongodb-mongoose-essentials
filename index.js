const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Success!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// Created Schema using mongoose.
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//Created Model (Collection) in mongoose.
const User = mongoose.model("User", userSchema);

User.insertMany([{
  name : "Jones",
  email : "jones@gmail.com",
  age : 19,
}, {
  name : "Govind",
  email : "govind@gmail.com",
  age : 21
}, {
  name : "Praviin",
  email : "pravinn@gmail.com",
  age: 21
}]).then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
})


