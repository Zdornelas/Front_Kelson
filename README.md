**Site Uniesp**
Arquitetura :

site_uniesp_kelson/
├── backend/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js (Back end)
├── site/
    ├── site_uniesp_2024_2/
        ├── data/
        ├── node_modules/
        ├── public/ (Imagens)
        ├── src/
            ├── assets/
            ├── components/
            │   ├── BannerAd.jsx (Banner do site)
            │   └── Navbar.jsx (Barra de navegação)
            ├── pages/
            │   ├── admin/
            │   │   ├── AdminNoticias.jsx (pagina de administrar noticiais)
            │   │   ├── CadastroNoticias.jsx (pagina de cadastrar noticiais)
            │   │   └── EditarNoticias.jsx (pagina de editar noticiais)
            │   │
            │   ├── DpoLgpd.jsx (pagina do LGPD)
            │   ├── Faculdade.jsx (pagina da faculdade)
            │   ├── Inicial.jsx (pagina inicial)
            │   ├── Noticias.jsx (visualizar todas as noticias)
            │   └── VisualizaNoticia.jsx (pagina de visualizar uma a noticia)
            ├── App.jsx (Cria os routes das paginas)
            ├── App.css
            ├── index.css
            ├── main.jsx
**Bibliotecas**
1. Express
2. Cors
3. Axios
4. react-router-dom
5. @mui/material