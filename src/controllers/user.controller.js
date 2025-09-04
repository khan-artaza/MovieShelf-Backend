async function getUserProfileController(req, res){
    const user = req.user

    return res.status(200).json({
        message : "user profile fetched sucessfully",
        user
    })
}

module.exports = getUserProfileController