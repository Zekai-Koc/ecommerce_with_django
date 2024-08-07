const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const sequelize = require("sequelize");

const app = require("./app");

console.log(app.get("env"));
// console.log(process.env);
console.log(process.env.DB_USER);

const config = {
   username: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   dialect: "postgres",
};

const db = (module.exports = new sequelize({
   ...config,
   logging: false,
   define: {
      underscored: true,
      freezeTableName: true,
      timestamps: true,
      charset: "utf-8",
      dialectOptions: { collate: "utf-8_general_ci" },
   },
}));

const testConnection = async () => {
   try {
      await db.authenticate();
      console.log("Connection has been established successfully.");
   } catch (error) {
      console.error("Unable to connect to the database:", error);
   }
};

testConnection();

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
   console.log(`App running on port ${port}`);
});
