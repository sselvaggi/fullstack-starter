import express from "express";
import pool from "./db/connect.js";
import sql from "./helpers/SimpleTemplate.js";

const ENV = process.env.ENV ?? "prod";
const NODE_PORT = process.env.NODE_PORT ?? 8080;

pool.query(sql`SELECT NOW()`, (err, res) => {
  console.log(err, res);
  pool.end();
});

if (ENV === "dev") {
  const { default: bundler } = await import("./bin/parcel.js");
  await bundler.watch();
}

const app = express();

app.use(express.static("dist"));

app.get("/api", (req, res) => {
  res.json(ENV);
});

app.listen(NODE_PORT, () =>
  console.log(`listening at http://localhost:${NODE_PORT}`)
);
