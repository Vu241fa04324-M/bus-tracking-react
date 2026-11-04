
const db = require("./config/db");

async function testDB() {
    try {
        const connection = await db.getConnection();

        console.log("MySQL Connected Successfully!");

        const [tables] = await connection.query("SHOW TABLES");

        console.table(tables);

        connection.release();
        await db.end();

    } catch (error) {
        console.error("MySQL Connection Failed:", error.message);
    }
}

testDB();
