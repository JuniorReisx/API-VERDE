import { deleteFrase, getFrases, postOneFrase, updateFrase } from "../controllers/frase.controllers.js";
import { getOneFrase } from "../controllers/frase.controllers.js";
import { Router } from "express";
 const frasesRouter = Router()

frasesRouter.get('/getfrase', getFrases)
frasesRouter.get('/onefrase/:id', getOneFrase)
frasesRouter.post('/frase', postOneFrase)
frasesRouter.put('/updateFrase/:id', updateFrase)
frasesRouter.delete('/delete/:id', deleteFrase)

export { frasesRouter }