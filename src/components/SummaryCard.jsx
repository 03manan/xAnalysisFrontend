import React from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ProjectCard = ({ title, projectNumber}) => (
  <Box sx={{ mb: 0.5, Width: '100%' }}>
    <Card sx={{ 
      backgroundColor: '#fff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      borderRadius: '12px'
    }}>
      <CardContent sx={{ 
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
        '&:last-child': { paddingBottom: '10px' }
      }}>
        
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            sx={{
              color: '#1a237e',
              fontSize: '18px',
              fontWeight: 600,
              mb: 0.5
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: '#9fa8da',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            Summary #{projectNumber} •{' '}
            <Typography
              component="a"
              href="#"
              sx={{
                color: '#5c6bc0',
                textDecoration: 'underline',
                '&:hover': {
                  color: '#3949ab'
                }
              }}
            >
              Read More
            </Typography>
          </Typography>
        </Box>
        <IconButton
          sx={{
            color: '#9fa8da',
            '&:hover': {
              backgroundColor: 'rgba(63, 81, 181, 0.04)'
            }
          }}
        >
          <EditIcon />
        </IconButton>
      </CardContent>
    </Card>
  </Box>
);

const Summary = () => {
  const projects = [
    {
      title: 'Zomato IPO',
      projectNumber: '1'
    },
    {
      title: 'Greatest way to a good Economy',
      projectNumber: '2'
    },
    {
      title: 'Most essential tips for Burnout',
      projectNumber: '3',
      image: '/burnout-image.jpg'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: 'auto',
      backgroundColor: '#f8fafc',
      p: 3
    }}>
      <Box sx={{ 
        maxWidth: '900px', 
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
        p: 4
      }}>
        <Typography
          variant="h4"
          sx={{
            color: '#1a237e',
            fontWeight: 600,
            mb: 1
          }}
        >
          Summary
        </Typography>
        <Typography
          sx={{
            color: '#9fa8da',
            mb: 1
          }}
        >
          Here you can find more details about the Zomato. It will Keep 
          you engaged by providing meaningful information.
        </Typography>
        
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            projectNumber={project.projectNumber}
            image={project.image}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Summary;