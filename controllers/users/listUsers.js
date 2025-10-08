import list from "../../services/user/list-users.js";

const listUser = async (req, res) =>{
    const users = await list();   
    res.json(users);
};

export default listUser