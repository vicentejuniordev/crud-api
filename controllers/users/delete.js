import deleteUser from "../../services/user/delete-user.js";

const deleteUserById = async (req, res) =>{
    const id = req.query.id;
    console.log(id);
    await deleteUser(id)
    res.send('Not implemented')
}

export default deleteUserById