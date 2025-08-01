const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    firstName : {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50,
    },
    secondName : {
        type: String
    },
    emailId : {
        type: String,
        required: true,
        lowercase:true,
        trim: true,
        unique: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address"+ value);
            }
        }
    },
    password : {
        type: String,
        required: true,
        validate(value) {
            if(!validator.isStrongPassword(value)){
                throw new Error(" Enter a Strong Password:"+ value);
            }
        }
    },
    age : {
        type: Number
    },
    gender : {
        type: String,
        validate(value){
            if(!["male", "female","others"].includes(value)){
                throw new Error("Gender data is not valid");
            }
        },
    },
    photoUrl: {
        type: String,
        default:"https://geography ",
         validate(value) {
            if(!validator.isURL(value)){
                throw new Error("Invalid URL"+ value);
            }
        }
    },
    about: {
        type : String,
        default: 'This is a default about of the user'
    },
    skills:{
        type: [String],
    }, 
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("user", userSchema);