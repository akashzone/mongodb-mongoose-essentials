const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Success!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/BookMyTicket");
}

// // Created Schema using mongoose.
// const userSchema = mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number,
// });

//Insert 
// User.insertMany([{
//   name : "Jones",
//   email : "jones@gmail.com",
//   age : 19,
// }, {
//   name : "Govind",
//   email : "govind@gmail.com",
//   age : 21
// }, {
//   name : "Praviin",
//   email : "pravinn@gmail.com",
//   age: 21
// }]).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })


// Find 
// User.find({age : {$gte : 20}}).then((res)=>{
//   console.log(res[0].name);
// }).catch((err)=>{
//   console.log(err);
// });

// User.find({_id : "69393722da82c11c8b659192"}).then((res)=>{
//    console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })


// Update
//User.updateOne({age : {$gt : 10}},{age : 199},{new : true}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

//User.updateMany({name : "Akash"},{age : 199},{new : true}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

// User.findByIdAndUpdate("69393722da82c11c8b659192",{age : 199},{new : true}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });


//Schema validation

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type : Number
  },
});
const Book = mongoose.model("Book", bookSchema);


const book1 = new Book({
  title : "AkashxBook",
  author : "AkashxOp",
  price : 299
})

book1.save().then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
})