import pool from "../../database/config.js";

const deleteUser = async (id) => {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
    return { message: "User deleted successfully" };
};

export default deleteUser;