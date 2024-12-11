const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema(
    {
        // trim remove white space in letter
        jobTitle: { type: String, required: true },
        description: { type: String, required: true },
        requirements: [{ type: String }],
        salary: { type: Number, required: true },
        experienceLevel: { type: Number, required: true },
        joblocation: { type: String, required: true }, 
        jobType: { type: String, required: true }, 
        Vacancies: { type: Number, required: true }, 
        companys: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "company",
            required: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        applications: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "application",

            }
        ]

    },

    { timestamps: true, versionKey: false }
);

// model
const jobmodels = mongoose.model("job", jobSchema);
module.exports = jobmodels;