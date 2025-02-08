
const jobmodel = require("../models/jobModel")


exports.CreateJob = async (req, res) => {

    try {
        const { jobTitle, description, requirements, salary, experienceLevel, joblocation, jobType, Vacancies, companys } = req.body

        if (!jobTitle || !description || !requirements || !salary || !experienceLevel || !joblocation || !jobType || !Vacancies || !companys) {
            return res.send({ message: "All fields are required" })
        }


        userIds = req.userInformation.individualUserTokenId // logged in user id 

        let requirementsArray = requirements.split(",");



        const createNewJob = await new jobmodel({
            jobTitle,
            description,
            requirements: requirementsArray,
            salary,
            experienceLevel,
            joblocation,
            jobType,
            Vacancies,
            companys,  // passed companyId in the postman 
            createdBy: userIds

        }).save()

        res.status(200).send({
            success: true,
            message: "New Job Created Successfully",
            output: createNewJob
        })

    }

    catch (error) {
        console.log(error)

        res.status(500).send({
            success: false,
            message: "Error in creating New Job",
            error
        })
    }

}

//Get All jobs

exports.GetAllJobs = async (req, res) => {

    try {



        const keywords = req.query.keyword || "";
        //It extracts the search keyword from the request's query parameters (req.query).
        //Defaults to an empty string if no keyword is provided

        const query = {
            $or: [
                { jobTitle: { $regex: keywords, $options: "i" } },
                { description: { $regex: keywords, $options: "i" } }
            ]
        }

        // Constructs a MongoDB query using the $or operator.This ensures that either jobTitle or description matches the provided keyword.
        //     $regex: A MongoDB operator to match strings using regular expressions.
        //     $options: "i": Case-insensitive matching.

        const alljobs = await jobmodel.find(query).populate({
            path: "companys" // this companys comes from jobModel
        }).sort({ createdAt: -1 })

        if (!alljobs) {
            return res.status(404).send({
                success: false,
                message: "Jobs not found",
            })
        }

        res.status(201).send({
            success: true,
            countTotalJobs: alljobs.length,
            message: "All Jobs",
            output: alljobs,
        })

    }

    catch (error) {
        //console.log(error)

        res.status(500).send({
            success: false,
            error,
            message: "Error in Getting all Jobs",
            error: error.message

        })
    }

}


// get job by id
// For Student

exports.GetJobById = async (req, res) => {

    try {

        const job = await jobmodel.findById(req.params.pid).populate({
            path: "applications"
        });

        if (!job) {
            return res.status(404).send({
                success: false,
                message: "Job not found",
            })
        }

        res.status(201).send({
            success: true,
            message: "Get Single job",
            output: job,
        })

    }

    catch (error) {

        res.status(500).send({
            success: false,
            error,
            message: "Error in Getting Single Jobs",
        })

    }
}


// ADMIN, How much job create 

exports.getAdminJobs = async (req, res) => {

    try {

        const adminUserId = req.userInformation.individualUserTokenId;

        const jobs = await jobmodel.find({ createdBy: adminUserId })

        if (!jobs) {
            return res.status(404).send({
                success: false,
                message: "Job not found",
            })
        }

        res.status(200).send({
            success: true,
            output: jobs,
        })

    }

    catch (error) {

        res.status(500).send({
            success: false,
            error,
            message: "Error in Getting admin Jobs",
            error: error.message
        })
    }
}



