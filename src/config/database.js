const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://eswarjs999:u13EB7kTblSfuSgy@nodepracticenamaste.9b12kgl.mongodb.net/devTinder"
    );
};

module.exports = connectDB;