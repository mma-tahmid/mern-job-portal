const applicationModels = require("../models/applicationModel")

const jobmodels = require("../models/jobModel")

exports.ApplyJob = async (req, res) => {

    try {

        const userIds = req.userInformation.individualUserTokenId // logged in user id 
        const jobIds = req.params.pid // job model _id

        if (!jobIds) {
            return res.send({ message: "Job Id is required" })
        }


        //  check if the user has already applied for the job

        const existingApplication = await applicationModels.findOne({
            jobs: jobIds,
            applicant: userIds
        }) // needed both ar matching


        if (existingApplication) {
            return res.status(400).send({
                success: false,
                message: "You have applied for this jobs",
            })
        }

        // Check if the job exits

        const existingjob = await jobmodels.findById(jobIds)

        if (!existingjob) {
            return res.status(404).send({
                success: false,
                message: "Job not found",
            })
        }

        // then create a new application

        const newApplication = await new applicationModels({
            jobs: jobIds,
            applicant: userIds
        }).save()


        existingjob.applications.push(newApplication._id);
        await existingjob.save()


        res.status(200).send({
            success: true,
            message: "Job applied successfully",
            output: newApplication
        })

    }

    catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in Applied Job",
            error
        })
    }

}


exports.GetAllAppliedJobs = async (req, res) => {

    try {
        const userIds = req.userInformation.individualUserTokenId // logged in user id 

        const allAppliedJob = await applicationModels.find({ applicant: userIds, }).sort({ createdAt: -1 }).populate({
            path: "jobs",
            options: { sort: { createdAt: -1 } },
            populate: {
                path: "companys",
                options: { sort: { createdAt: -1 } },
            }
        })

        if (!allAppliedJob) {
            return res.status(404).send({
                success: false,
                message: "No Applications Found",
            })
        }

        res.status(200).send({
            success: true,
            output: allAppliedJob
        })

    }

    catch (error) {
        console.log(error)

        res.status(500).send({
            success: false,
            error,
            message: "Error in Getting all applied job",
            error: error.message

        })
    }
}

// admin dekhbe koi jon user  akta job a apply korese

exports.GetApplicants = async (req, res) => {

    try {

        const jobIds = req.params.pid;

        const allApplicants = await jobmodels.findById(jobIds).populate({
            path: "applications",   // from jod model 
            options: { sort: { createdAt: -1 } },
            populate: {
                path: "applicant"
            }
        })

        if (!allApplicants) {
            return res.status(404).send({
                success: false,
                message: "No user found for this job application",
            })
        }

        res.status(200).send({
            success: true,
            output: allApplicants
        })

    }


    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message: "Error in Getting all applicant for one job",
            error: error.message
        })
    }

}


// for Update Status

exports.UpdateStatus = async (req, res) => {

    try {
        const { status } = req.body
        const applicationIds = req.params.pid;

        if (!status) {
            return res.send({ message: "Status is required" })
        }

        // find the application by application id
        const updateApplicationStatus = await applicationModels.findByIdAndUpdate(applicationIds, {
            $set: {
                status
            }
        }, { new: true })


        res.status(200).send({
            success: true,
            message: "Status updated successfully",
            output: updateApplicationStatus
        })


    }


    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Updating Status",
            error
        })
    }
}



