import React from "react";
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
  return (
    <Box
      p={4}
      sx={{
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {/* Graphs Section */}
      <Box flex="1 1 60%" sx={{ minWidth: 300 }}>
        <Card
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            borderRadius: "20px",
          }}
        >
          <CardHeader title="Zomato Insights" sx={{ color: "#2d3748" }} />
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={graphData}>
                <XAxis dataKey="name" stroke="#718096" />
                <YAxis stroke="#718096" />
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#667eea" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Box>

      {/* tweets processed and sentimental score cards*/}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CompCard heading="Tweets Processed" value="24789" />
        <CompCard heading="Tweets Processed" value="24789" />
      </div>

          {/* summary box */}
      <div style={{ display: "flex", width: "76%" }}>
        <SummaryCard />
      </div>
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
