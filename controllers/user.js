const Users = require("../models/user");

async function handleGetAllUsers(req,res){
    const allDbUsers = await Users.find({});
    return res.json(allDbUsers);
};

async function handlegetUserById(req,res) {
    const user = await Users.findById(req.params.id);
    if(!user) return res.status(404).json({error: "User not found!"});
    return res.json(user);
};

async function handleDeleteUserById(req,res) {
    const user = await Users.findByIdAndDelete(req.params.id);
    if(!user) return res.status(404).json({error: "User not found!"});
    return res.json({statusbar: "Succesfully deleted"});
};

async function handleUpdateUserById(req,res) {
    const user = await Users.findByIdAndUpdate(req.params.id, {lasttName: "changed"});
    if(!user) return res.status(404).json({error: "User not found!"});
    return res.json({statusbar: "Succesfully deleted"});
};

async function handleCreateNewUser(req,res){
    const body = req.body;
    // console.log("Body", body);
    if(
        !body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title
    ){
        return res.status(400).json({msg: "All fields are mandatory"});
    }

    const result = await Users.create({
        firstName: body.first_name,
        lasttName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    });
    console.log("Result", result);
    return res.status(201).json( {msg : "Success", id: result._id} );
}


module.exports ={
    handleGetAllUsers,
    handlegetUserById,
    handleDeleteUserById,
    handleUpdateUserById,
    handleCreateNewUser
};