import { useState, useEffect, useRef } from "react";

const useWebSocket = (url) => {
  const [data, setData] = useState(null); // State to hold received data
  const [error, setError] = useState(null); // State to hold any WebSocket errors
  const socketRef = useRef(null); // Ref to hold the WebSocket instance

  useEffect(() => {
    // Initialize WebSocket connection
    const socket = new WebSocket(url);
    socketRef.current = socket;

    // WebSocket event listeners
    socket.onopen = () => {
      console.log("WebSocket connected:", url);
    };

    socket.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data); // Parse incoming data
        setData(parsedData); // Update the data state
      } catch (err) {
        console.error("Error parsing WebSocket message:", err);
        setError(err);
      }
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
      setError(err);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed:", url);
    };

    // Cleanup WebSocket connection on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [url]); // Re-run effect if URL changes

  return { data, error }; // Return data and error state
};

export default useWebSocket;
