import { app } from "./app";

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server working on http://localhost:" + PORT);
});