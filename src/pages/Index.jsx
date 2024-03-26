import { useState, useEffect } from "react";
import { Box, Heading, Text, Flex, Image, Spinner, Tabs, TabList, TabPanels, Tab, TabPanel, Badge, Select } from "@chakra-ui/react";
import { FaReddit, FaYoutube, FaTwitter } from "react-icons/fa";
import AllPlatformsPanel from "./AllPlatformsPanel";

const fetchRedditData = async () => {
  const response = await fetch("https://example-rapidapi-reddit-endpoint", {
    headers: { "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY" },
  });
  if (!response.ok) throw new Error("Failed to fetch Reddit data");
  return response.json();
};

const fetchYouTubeData = async () => {
  const response = await fetch("https://example-rapidapi-youtube-endpoint", {
    headers: { "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY" },
  });
  if (!response.ok) throw new Error("Failed to fetch YouTube data");
  return response.json();
};

const Index = () => {};

export default Index;
