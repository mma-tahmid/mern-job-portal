const mongoose = require("mongoose")

const companySchema = new mongoose.Schema(
    {
        // trim remove white space in letter
        companyName: { type: String, required: true, unique: true },
        description: { type: String },
        companyWebsite: { type: String },
        companyLocation: { type: String },
        logo: { type: String }, // URL to company logo

        users: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true
        }

    },

    { timestamps: true, versionKey: false }
);

// model
const companyModels = mongoose.model("company", companySchema);
module.exports = companyModels;