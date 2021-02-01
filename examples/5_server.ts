import { opine } from "https://deno.land/x/opine@1.1.0/mod.ts";

const app = opine();
const port = 3000

app.get("/", function(_req, res) {
  res.send("Well, Hello there! 👋");
});

app.listen(port);
console.log(`Server running at http://localhost:${port}`);