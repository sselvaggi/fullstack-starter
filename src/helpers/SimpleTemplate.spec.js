import sql from "./SimpleTemplate.js";
const id = 1;
const name = "U.name";
console.log(sql`SELECT ${name} FROM Users U WHERE id=${id};`);
