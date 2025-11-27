"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import {personalData} from '../../data/PersonalData'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { CloudDownload } from "@mui/icons-material";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 500 }); // Initialize AOS here
  }, []);

return (
    <Box
    id='about'
    sx={{display: 'flex', 
        // width: '100%', 
        // height: {xs:'150vh', sm:'100vh'}, 
        backgroundColor: 'bg.primary', 
        justifyContent: 'space-evenly', 
        color: 'gray',
        flexDirection: {xs: 'column', sm: 'row'}
        }}>
    {/* <section id="projects" className="mt-20 mx-3 bg-white-400 flex flex-col justify-center">
    </section> */}
      <Box sx={{display: 'flex', flexDirection: 'column', width: {xs: '100vw', sm: '40vw'},pt: {xs:'none', sm:'none'}, justifyContent: 'center', alignItems: 'center'}}>
        <Stack data-aos="zoom-in-right" sx={{width: '100%', gap: 1, px: '2rem'}}>
          <Typography variant='h5'>Hi there!</Typography>
          <Typography variant='h3' sx={{fontFamily: 'Tektur', color: '#121212'}}>{personalData.name}</Typography>
          <Typography variant='body2' sx={{ textAlign: 'justify'}}>
            {personalData.about}
          </Typography>
          <Box sx={{display: 'flex', width: '100%', gap: 1}}>
            <Button
              size="small"
              variant="contained"
              sx={{
                bgcolor: '#374151',
                color: '#f3f3f3',
                '&:hover': { bgcolor: '#e5e5e5' }, 
                textTransform: 'none',
              }}
              endIcon={<CloudDownload />}
            >
              Download CV
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box sx={{display: 'flex', width: {xs:'100vw', sm:'32vw'}, height: '90vh', justifyContent: 'center', alignItems: 'center'}}>
          <img src="/img/pic1.JPG" alt="Yman Purdy" data-aos="zoom-in-left" style={{ width: '90%', height: '90%', objectFit: 'cover',borderRadius: '2rem'}} />
      </Box>
    </Box>
  )
}
