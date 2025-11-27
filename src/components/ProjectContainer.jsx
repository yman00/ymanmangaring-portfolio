import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Chip, IconButton, Typography } from '@mui/material'

export const ProjectContainer = ({image, title, description, techStack}) => {
  return (
    <Card data-aos="zoom-in-up" className='max-w-100 p-1 bg-white'>
      <CardMedia component="img" height="194" image={image} alt={title} sx={{maxHeight: 300}}/>

      <CardContent>
        {techStack.map((tech, index) => (
          <Chip key={index} label={tech} variant="outlined" size="small" sx={{mr: .2}}/>
        ))}

        <h4 className='my-1 font-medium'>{title}</h4>

        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'justify' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
