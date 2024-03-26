import React from "react";
import { Box, Heading, Text, Flex, Image, Badge } from "@chakra-ui/react";

const AllPlatformsPanel = ({ allPlatformsData }) => {
  const getTrendRating = (score) => {
    if (score >= 5000) return "Hot";
    if (score >= 1000) return "Popular";
    return "Trending";
  };

  return (
    <Box>
      {allPlatformsData.map((item) => (
        <Flex key={item.id} mb={4} alignItems="center">
          <Image src={item.thumbnail} alt="Thumbnail" boxSize="100px" objectFit="cover" mr={4} />
          <Box>
            <Heading as="h3" size="md">
              {item.title}
            </Heading>
            {item.score && (
              <>
                <Text>Score: {item.score}</Text>
                <Badge colorScheme="purple">{getTrendRating(item.score)}</Badge>
              </>
            )}
            {item.views && (
              <>
                <Text>Views: {item.views}</Text>
                <Badge colorScheme="red">{getTrendRating(item.views)}</Badge>
              </>
            )}
            {item.likes && (
              <>
                <Text>Likes: {item.likes}</Text>
                <Badge colorScheme="blue">{getTrendRating(item.likes)}</Badge>
              </>
            )}
            {item.comments && <Text>Comments: {item.comments}</Text>}
            {item.upvotes && <Text>Upvotes: {item.upvotes}</Text>}
            {item.retweets && <Text>Retweets: {item.retweets}</Text>}
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default AllPlatformsPanel;
