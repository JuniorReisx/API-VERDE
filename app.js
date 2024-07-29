import express from "express";
import { frasesRouter } from "./src/routes/frase.router.js";
const app = express()
const port = 3200
app.use(express.json());

app.use(frasesRouter)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})