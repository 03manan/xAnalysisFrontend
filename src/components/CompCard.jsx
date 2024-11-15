import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { BarChart3 } from 'lucide-react';

const CompCard = ({heading, value}) => {
  return (
    <Box  display="flex" 
    flexDirection="column" 
    gap={2} 
    alignItems="center" 
    sx={{ backgroundColor: '#f4f4f4', padding: '20px' }}>
      <Card 
        sx={{ 
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '20px',
          boxShadow: 'none'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
          <Box 
            sx={{ 
              backgroundColor: '#F4F7FE',
              borderRadius: '50%',
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BarChart3 size={24} color="#4318FF " />
          </Box>
          
          <Box>
            <Typography 
              sx={{ 
                color: '#A3AED0',
                fontSize: '14px',
                fontWeight: 500,
                marginBottom: '5px'
              }}
            >
              {heading}
            </Typography>
            <Typography 
              sx={{ 
                color: '#2B3674',
                fontSize: '24px',
                fontWeight: 700,
              }}
            >
              {value}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default CompCard;