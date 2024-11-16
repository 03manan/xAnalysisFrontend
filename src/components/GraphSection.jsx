import React from 'react';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const graphData = [
  { name: 'Jan', positive: 400, negative: 300 },
  { name: 'Feb', positive: 500, negative: 250 },
  { name: 'Mar', positive: 600, negative: 200 },
  { name: 'Apr', positive: 450, negative: 350 },
  { name: 'May', positive: 550, negative: 150 },
  { name: 'Jun', positive: 650, negative: 250 },
];

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          backgroundColor: 'white',
          p: 1.5,
          border: 'none',
          borderRadius: 2,
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        }}
      >
        <Typography sx={{ color: '#2d3748', fontWeight: 600, mb: 1 }}>
          {label}
        </Typography>
        {payload.map((entry, index) => (
          <Typography
            key={index}
            sx={{
              color: entry.color,
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <span style={{ 
              width: 8, 
              height: 8, 
              borderRadius: '50%', 
              backgroundColor: entry.color,
              display: 'inline-block'
            }}></span>
            {`${entry.name}: ${entry.value}`}
          </Typography>
        ))}
      </Box>
    );
  }
  return null;
};

// Stacked Bar Chart Component
const StackedBarChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      barSize={50} // Increased bar width
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
      <XAxis 
        dataKey="name" 
        stroke="#718096"
        tick={{ fill: '#718096' }}
        axisLine={{ stroke: '#e2e8f0' }}
      />
      <YAxis 
        stroke="#718096"
        tick={{ fill: '#718096' }}
        axisLine={{ stroke: '#e2e8f0' }}
      />
      <Tooltip content={<CustomTooltip />} />
      <Legend 
        wrapperStyle={{
          paddingTop: '20px'
        }}
      />
      <Bar 
        dataKey="positive" 
        stackId="a" 
        fill="#10B981"
        radius={[4, 4, 0, 0]}
        name="Positive"
      />
      <Bar 
        dataKey="negative" 
        stackId="a" 
        fill="#EF4444"
        radius={[4, 4, 0, 0]}
        name="Negative"
      />
    </BarChart>
  </ResponsiveContainer>
);

// Horizontal Bar Chart Component
const HorizontalBarChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      layout="vertical"
      data={data}
      margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
      barSize={30} // Increased bar height
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
      <XAxis 
        type="number"
        stroke="#718096"
        tick={{ fill: '#718096' }}
        axisLine={{ stroke: '#e2e8f0' }}
      />
      <YAxis 
        type="category"
        dataKey="name"
        stroke="#718096"
        tick={{ fill: '#718096' }}
        axisLine={{ stroke: '#e2e8f0' }}
      />
      <Tooltip content={<CustomTooltip />} />
      <Legend
        wrapperStyle={{
          paddingTop: '20px'
        }}
      />
      <Bar 
        dataKey="positive" 
        fill="#10B981"
        radius={[0, 4, 4, 0]}
        name="Positive"
      />
    </BarChart>
  </ResponsiveContainer>
);

const GraphSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 4,
        flexWrap: 'wrap',
        width: '100%',
        p: 3,
      }}
    >
      {/* Stacked Bar Chart */}
      <Box
        flex="1 1 auto"
        sx={{
          minWidth: 300,
          maxWidth: 700,
          width: '100%',
        }}
      >
        <Card
          sx={{
            backgroundColor: '#fff',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          <CardHeader
            title="Sentiment Distribution"
            subheader="Monthly breakdown of positive and negative sentiments"
            sx={{
              p: 3,
              '& .MuiCardHeader-title': {
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#2d3748',
              },
              '& .MuiCardHeader-subheader': {
                fontSize: '0.875rem',
                color: '#718096',
              },
            }}
          />
          <CardContent sx={{ p: 3 }}>
            <StackedBarChart data={graphData} />
          </CardContent>
        </Card>
      </Box>

      {/* Horizontal Bar Chart */}
      <Box
        flex="1 1 auto"
        sx={{
          minWidth: 300,
          maxWidth: 700,
          width: '100%',
        }}
      >
        <Card
          sx={{
            backgroundColor: '#fff',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          <CardHeader
            title="Monthly Progress"
            subheader="Positive engagement trends across months"
            sx={{
              p: 3,
              '& .MuiCardHeader-title': {
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#2d3748',
              },
              '& .MuiCardHeader-subheader': {
                fontSize: '0.875rem',
                color: '#718096',
              },
            }}
          />
          <CardContent sx={{ p: 3 }}>
            <HorizontalBarChart data={graphData} />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default GraphSection;