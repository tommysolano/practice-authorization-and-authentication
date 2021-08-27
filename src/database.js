import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/companydb", {
    //useCreateIndex: true,
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log("db is connected"))
    .catch(err => console.error(err));