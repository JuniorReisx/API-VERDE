import { frases } from "../data/frase.database.js";
import { Frase } from "../models/frase.model.js";

export const getFrases = (req, res) =>{

    res.status(200).send(frases)
}

export const getOneFrase = (req, res) =>{

  const id = req.params.id
  let oneFrase =  frases.find(frase => frase.id == id)
  res.status(200).send(oneFrase)
}


export const postOneFrase = (req, res) => {
  const { frase } = req.body;

  if (!frase) {
    return res.status(400).send({ mensagem: 'A frase é obrigatória' });
  }

  frases.push(frase);

  res.status(200).send({ mensagem: 'Frase adicionada com sucesso' });
};

  
export const updateFrase = (req, res) => {
  const idParameter = req.params.id
  const { frase } = req.body

  const fraseEncontrei = frases.find((frase) => frase.id == idParameter)

  if (fraseEncontrei) {
    fraseEncontrei.frase = frase


      res.status(200).send("funcionou")
  } else {
      res.status(404).send('erro')
  }
}

export const deleteFrase = (req, res) => {
  const idParameter = req.params.id

  const fraseEncontrei = frases.findIndex((frase) => frase.id == idParameter)

  if (fraseEncontrei != -1) {
    frases.splice(fraseEncontrei, 1)
      res.status(200).send("funcionou")
  } else {
      res.status(404).send("erro")
  }
}

