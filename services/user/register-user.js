import pool from "../../database/config"

const register = async (user) =>{
    if(Object.keys(user).length === 0){
        console.log('Data invalid for register')
    }else{
        pool.query(`INSERT INTO users (name, email, idade) VALUES (${user.name}, ${user.email}, ${user.idade})`)
        return "User creates"
    } 
}

export default register