import pool from "../../database/config.js";

const register = async (user) => {
  if (Object.keys(user).length === 0) {
    console.log("Data invalid for register");
    return;
  }

  try {
    await pool.query(
      "INSERT INTO users (name, email, idade) VALUES ($1, $2, $3)",
      [user.name, user.email, user.idade]
    );
    return "User created";
  } catch (err) {
    console.error("Error inserting user:", err.message);
    throw err;
  }
};

export default register;
