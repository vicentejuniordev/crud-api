import pool from "../../database/config.js"

const update = async (id, body) => {
    if (Object.keys(body).length === 0) {
        return { error: 'update data invalid' };
    }

    try {
        const result = await pool.query(
            'UPDATE users SET name = $1, email = $2, idade = $3 WHERE id = $4',
            [body.nome, body.email, body.idade, id]
        );

        if (result.affectedRows === 0) {
            return { message: 'user not found' };
        }

        return { message: 'user updated' };
    } catch (error) {
        console.error('Error updating user:', error);
        return { error: 'database error' };
    }
};
export default update