require("dotenv").config();

module.exports = {
  development: {
    // database: "yqqudwlp",
    // use_env_variables: "DB_TEST_URL",
    // dialect: "postgres",
    storage: "./database.sqlite", // or ':memory:'
    dialect: "sqlite",
  },
  test: {
    database: "todo-test",
    use_env_variables: "DB_TEST_URL",
    dialect: "postgres",
  },
  production: {
    database: "todo-prod",
    use_env_variables: "DB_PROD_URL",
    dialect: "postgres",
  },
};
