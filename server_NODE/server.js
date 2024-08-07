const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

console.log(app.get("env"));
// console.log(process.env);
console.log(process.env.DB_USER);

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
   console.log(`App running on port ${port}`);
});
