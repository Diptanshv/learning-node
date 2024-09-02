const express = require("express");
const {handleGetAllUsers,handlegetUserById,handleDeleteUserById,handleUpdateUserById,handleCreateNewUser} = require("../controllers/user");
const router = express.Router();

// router.get("/users",async (req,res)=>{
//     const allDbUsers = await Users.find({});
//     const html = `
//     <ul>
//         ${allDbUsers.map((user)=>`<li> ${user.firstName}-${user.email}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html);
// });

router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser);

router.route("/:id")
.get(handlegetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);


module.exports = router;