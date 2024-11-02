const mongoose = require("mongoose")

const applicationSchema = new mongoose.Schema(
    
    {
        // trim remove white space in letter
        jobs: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'job',
            required: true
        },
        applicant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true
        },
        status: {
            type: String,
            enum: ['pending', 'accepted', 'rejected'],
            default: 'pending'
        }

    },

    { timestamps: true, versionKey: false }
);

// model
const applicationModels = mongoose.model("application", applicationSchema);
module.exports = applicationModels;