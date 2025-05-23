import postgres from "postgres";

const sql = postgres({
  host: "localhost",
  port: 5432,
  database: "devirr",
  username: "devirr",
  password: "devirr123",
});

export default sql; 