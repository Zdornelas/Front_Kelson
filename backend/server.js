
const express = require('express');
const cors = require ('cors');
const app = express();
const port = 3000;


app.use(express.json());
app.use(cors())


let noticias = [
  {
    id: 1,
    titulo: "Novo curso de Medicina",
    texto: "Chegou o curso de Medicina na instituição! Agora, os alunos terão a oportunidade de se formar em uma das áreas mais requisitadas do mercado de trabalho.",
    img: "medicina.jfif",
  },
  {
    id: 2,
    titulo: "Parceria Internacional",
    texto: "A instituição firmou uma nova parceria com universidades europeias, oferecendo intercâmbios e programas de duplo diploma para seus alunos.",
    img: "internacional.jpg",
  },
  {
    id: 3,
    titulo: "Ampliação da Biblioteca",
    texto: "A biblioteca da instituição passou por uma grande reforma e agora conta com mais espaço, novos livros e ambientes de estudo modernos para os alunos.",
    img: "biblioteca.jpg",
  },
];


app.get('/noticias', (req, res) => {
  res.json(noticias);
});


app.get('/noticias/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const noticia = noticias.find(n => n.id === id);
  if (noticia) {
    res.json(noticia);
  } else {
    res.status(404).json({ message: 'Notícia não encontrada' });
  }
});


app.post('/noticias', (req, res) => {
  const { titulo, texto, img } = req.body;
  const novaNoticia = {
    id: noticias.length ? noticias[noticias.length - 1].id + 1 : 1,
    titulo,
    texto,
    img,
  };
  noticias.push(novaNoticia);
  res.status(201).json(novaNoticia);
});


app.put('/noticias/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, texto, img } = req.body;
  const index = noticias.findIndex(n => n.id === id);

  if (index !== -1) {
    noticias[index] = { id, titulo, texto, img };
    res.json(noticias[index]);
  } else {
    res.status(404).json({ message: 'Notícia não encontrada' });
  }
});


app.delete('/noticias/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = noticias.findIndex(n => n.id === id);

  if (index !== -1) {
    const noticiaRemovida = noticias.splice(index, 1);
    res.json(noticiaRemovida);
  } else {
    res.status(404).json({ message: 'Notícia não encontrada' });
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});