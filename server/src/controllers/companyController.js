const companyModel = require("../models/companyModel")

exports.RegisterCompany = async (req, res) => {

    try {
        const { companyName } = req.body

        if (!companyName) {
            return res.send({ message: "Company name is required" })
        }

        let existingCompany = await companyModel.findOne({ companyName })

        if (existingCompany) {
            return res.status(400).send({
                success: false,
                message: "You can't register same company",
            })
        }

        const createNewCompany = await new companyModel({
            companyName,
            users: req.userInformation.individualUserTokenId // this users comes from company model as a ref
        }).save()


        res.status(200).send({
            success: true,
            message: "Company Register Successfully",
            output: createNewCompany
        })


    }

    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Register New Company",
            error
        })
    }


}


//Get all Company according to user Id

exports.GetAllCompany = async (req, res) => {

    try {
        userIds = req.userInformation.individualUserTokenId // logged in user id
        const getAllCompanies = await companyModel.find({ users: userIds }); // this users comes from company model & find with user

        if (!getAllCompanies) {
            return res.status(404).send({
                success: false,
                message: "Companies not found",
            })
        }


        res.status(201).send({
            success: true,
            countTotalCompany: getAllCompanies.length,
            message: "All Company",
            output: getAllCompanies,

        })

    }

    catch (error) {
        res.status(500).send({
            success: false,
            error,
            message: "Error in Getting all Products",
            error: error.message

        })
    }
}

// Get Company By id

exports.GetCompanyById = async (req, res) => {

    try {


        const getSingleCompany = await companyModel.findById(req.params.pid)
        if (!getSingleCompany) {
            return res.status(404).send({
                success: false,
                message: "Company not found",
            })
        }

        res.status(201).send({
            success: true,
            message: "Get Single Company",
            output: getSingleCompany,

        })

    }

    catch (error) {
        console.log(error)

        res.status(500).send({
            success: false,
            error,
            message: "Error in Getting Single Company",
            error: error.message

        })
    }

}


// Update Company
exports.UpdateCompany = async (req, res) => {

    try {

        const { companyName, description, companyWebsite, companyLocation } = req.body
        const file = req.file

        // cloudinary
        const updateCompany = await companyModel.findByIdAndUpdate(req.params.pid, {
            $set: {
                companyName,
                description,
                companyWebsite,
                companyLocation

            }
        }, { new: true })

        //const { password, ...rest } = updateUser.toObject();

        res.status(200).send({
            success: true,
            message: "company updated Successfully",
            output: updateCompany
        })


    }

    catch (error) {
        console.log(error)

        res.status(500).send({
            success: false,
            message: "Error in Update Company",
            error
        })

    }

}


