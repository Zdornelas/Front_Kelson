import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box, Typography, Grid, Card, CardMedia, CardContent} from '@mui/material'

const Noticias = () => {

    const [noticias, setNoticias] = useState([])
    const url = "http://localhost:3000/noticias"

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response= await axios.get(url)
                setNoticias(response.data)

            } catch (error) {
                console.error("Erro ao buscar notícias ", error)
            }
            
        }
        fetchNoticias()
    }, [])

    return (
        <Box sx={{ p: 4 }}>
                <Typography variant="h3" gutterBottom>Notícias</Typography>
                <Grid container spacing={4}>
                    {noticias.map(noticia => (
                        <Grid item xs={12} sm={6} md={4} key={noticia.id}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={noticia.img}
                                    alt="Imagem da Notícia"
                                />
                                <CardContent>
                                    <Link to={`/visualiza-noticia/${noticia.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {noticia.titulo}
                                        </Typography>
                                    </Link>
                                    
                                    <Link to={`/visualiza-noticia/${noticia.id}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                                        <Typography variant="body2" color="text.secondary">
                                            Ler mais
                                        </Typography>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
      )
    
}

export default Noticias