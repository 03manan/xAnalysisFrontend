import React, { useState, useEffect } from 'react';

import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Car, Twitter } from "lucide-react";
import CompCard from "../components/CompCard";
import SummaryCard from "../components/SummaryCard";
import StackedBarChart from "../components/StackedBarChart";
import HorizontalBarChart from "../components/HorizontalBarChart";
import useWebSocket from '../hooks/useWebSocket';

// Sample data
const graphData = [
  { name: "Jan", value: 2400 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2780 },
  { name: "Apr", value: 3890 },
  { name: "May", value: 2390 },
  { name: "Jun", value: 3490 },
];

const tweet = {
  username: "@ZomatoIndia",
  content:
    "We apologize for the inconvenience caused. Our team is working to resolve the issue as soon as possible. Thank you for your patience.",
  timestamp: "Nov 15, 2024",
};

const ZomatoDashboard = () => {
  const [categorySentimets, setCategorySentimets] = useState([]);
  const [engagement, setEngagement] = useState([]);
  const [tweetsProcessed, setTweetsProcessed] = useState(0);
  const [sentimentScore, setSentimentScore] = useState(0);
  const [summary, setSummary] = useState("");

  // Connect to the WebSocket for the "zomato" keyword
  const { data, error } = useWebSocket("ws://127.0.0.1:8000/ws/keyword/zomato/");

  useEffect(() => {
    if (data) {
      // Handle data received from the WebSocket
      if (data.type === "graph_statistics") {
          console.log(data.data.data);
          setCategorySentimets(data.data.data.category_sentiments);
          setSentimentScore(data.data.data.overall_sentiment_score);
         
          setEngagement(data.data.data.engagement);
        // console.log(data.type);
      } else if (data.type === "summary") {
        // setSummary(data.data);
        console.log(data.type);
      } else if (data.type === "stats") {
        setTweetsProcessed(data.data.tweets_processed);
        setSentimentScore(data.data.overall_sentiment_score);
      }
    }
  }, [data]);

 

  return (
    <Box
      p={4}
      sx={{
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
      }}
    >
      {/* Graphs Section */}
      <Box 
  flex="1 1 auto" // Adjusting flex-grow and shrink
  sx={{ 
    minWidth: 200, // Set a smaller minimum width
    maxWidth: 600, // Constrain maximum width
    width: "100%" // You can adjust the percentage or set a fixed width like "250px"
  }}
>
  <Card
    sx={{
      backgroundColor: "#fff",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      borderRadius: "20px",
    }}
  >
    <CardHeader sx={{ color: "#2d3748" }} />
    <CardContent>
      {/* <ResponsiveContainer width="100%" height={200}> */}
        <StackedBarChart data = {categorySentimets}/>
      {/* </ResponsiveContainer> */}
    </CardContent>
  </Card>
</Box>

<Box 
  flex="1 1 auto" // Adjusting flex-grow and shrink
  sx={{ 
    minWidth: 200, // Set a smaller minimum width
    maxWidth: 500, // Constrain maximum width
    width: "70%" // You can adjust the percentage or set a fixed width like "250px"
  }}
>
  <Card
    sx={{
      backgroundColor: "#fff",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      borderRadius: "20px",
    }}
  >
    <CardHeader sx={{ color: "#2d3748" }} />
    <CardContent>
      {/* <ResponsiveContainer width="100%" height={200}> */}
        <HorizontalBarChart data={engagement}/>
      {/* </ResponsiveContainer> */}
    </CardContent>
  </Card>
</Box>


      {/* tweets processed and sentimental score cards*/}
      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <CompCard heading="Tweets Processed" value="24789" />
        <CompCard heading="Tweets Processed" value="24789" />
      </div> */}
<Box
flex="1 1 auto" // Adjusting flex-grow and shrink
sx={{ 
  minWidth: 200, // Set a smaller minimum width
  maxWidth: 500, // Constrain maximum width
  width: "100%" // You can adjust the percentage or set a fixed width like "250px"
}}
>
          {/* summary box */}
      {/* <div style={{ display: "flex", width: "100%" }}> */}
        <SummaryCard />
      {/* </div> */}
      </Box>
    </Box>
  );
};

export default ZomatoDashboard;

{
  /* High Attention Tweets */
}
{
  /* <Box flex="1 1 30%">
        <Card sx={{ backgroundColor: '#fff', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', color: '#dc2626',  borderRadius: '20px' }}>
          <CardHeader title="High Attention Tweets" sx={{ color: '#2d3748' }} />
          <CardContent>
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar><Twitter /></Avatar>
              <Box>
                <Typography variant="body1" fontWeight="bold">{tweet.username}</Typography>
                <Typography variant="body1">{tweet.content}</Typography>
                <Typography variant="caption" color="#718096">{tweet.timestamp}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box> */
}
