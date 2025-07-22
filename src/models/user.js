const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName : {
        type: String
    },
    secondName : {
        type: String
    },
    emailId : {
        type: String
    },
    password : {
        type: String
    },
    age : {
        type: Number
    },
    gender : {
        type: String
    }
})

const userModal = mongoose.model("user", userSchema);
module.exports = userModal;