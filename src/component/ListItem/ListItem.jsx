import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from "@mui/material/Grid";


const ListItem = (props) => {
  return (<div>
    <Grid container
      spacing={2}
      m={"md"}
      justifyContent="space-around"

    >
      {props.listItem.map((item) => {
        return (
          <Grid key={item.id} item xs={4} ml={2} >
            <Card sx={{ maxWidth: 345 }} key={item.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={`${item.images[0]}`}
                  alt={`${item.title}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )

      })}
    </Grid>

  </div>)
}

export default ListItem;