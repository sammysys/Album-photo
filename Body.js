import React from 'react'
import { Typography, Button, Container, Grid, Card, CardActions, CardMedia, CardContent  } from '@material-ui/core';

import useStyles from '../styles';

import details from '../details';
const Body = () => {
    const classes = useStyles();
  return (
    <>
    <div className={classes.container}>
        <Container maxWidth='sm'>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
            Photo Album
          </Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Typography>
          <div className={classes.button}>
            <Grid container spacing={2} justifyContent='center'>
              <Grid item >
                <Button variant='contained' color='primary'>
                 Upload Photo
                </Button>
              </Grid>
              <Grid item >
                <Button variant='outlined' color='primary'>
                 Edit Photo
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>

        </div>
        <Container className={classes.cardGrid} maxwidth='md'>
          <Grid container spacing={4}>
          {details.map((detailItem) => (
            <Grid item xs={12} md={6} lg={3}>
             <Card className={classes.card}>
                <CardMedia className={classes.cardMedia}
                  image={detailItem.image}
                  title={detailItem.title}
                  content={detailItem.content}

                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5'>
                  {detailItem.title}
                  </Typography>
                  <Typography>
                  {detailItem.content}
                  </Typography>

                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>view</Button>
                  <Button size='small' color='primary'>edit</Button>
                </CardActions>
             </Card>

            </Grid>

          ))}
            
          </Grid>
        </Container>
        </>
  )
}

export default Body