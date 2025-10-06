import { Router } from "express";
import registerUser from "../controllers/users/register.js";
import updateUser from "../controllers/users/update.js";
import deleteUserById from "../controllers/users/delete.js";
import listUser from "../controllers/users/listUsers.js";


const routes = Router();
routes.get('/', (req,res)=>{
    res.send("hello world");
})
routes.get('/user/list', listUser )
routes.post('/user/register', registerUser);
routes.put('/user/update', updateUser);
routes.delete('/user/delete', deleteUserById);

export default routes;