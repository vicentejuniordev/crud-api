import deleteUser from "../../services/user/delete-user.js";

const deleteUserById = async (req, res) =>{
    const id = req.query.id;
    const response = await deleteUser(id);
    res.send(response);
}

export default deleteUserById