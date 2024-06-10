const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "Title":String,
        "Author":String,
        "Description":String,
        "Price":String
    }
)

let librarymodel = mongoose.model("libraries",schema)
module.exports = {librarymodel}