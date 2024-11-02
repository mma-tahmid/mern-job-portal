const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        // trim remove white space in letter
        fullName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        phone: { type: Number, required: true },
        role: { type: String, enum: ['student', 'recruiter'], required: true },
        profile: {
            bio: { type: String },
            skills: [{ type: String }],
            resume: { type: String }, //URL to resume file
            resumeOriginalName: { type: String },
            companys: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "company"
            },
            profilePhoto: { type: String, default: "" }
        },


    },

    { timestamps: true, versionKey: false }
);

// model
const userModels = mongoose.model("user", userSchema);
module.exports = userModels;