import { useState, useEffect } from "react";
import { Box, Heading, Text, Flex, Image, Spinner, Tabs, TabList, TabPanels, Tab, TabPanel, Badge } from "@chakra-ui/react";
import { FaReddit, FaYoutube, FaTwitter } from "react-icons/fa";

const Index = () => {
  const [redditData, setRedditData] = useState([]);
  const [youtubeData, setYoutubeData] = useState([]);
  const [twitterData, setTwitterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API calls to fetch data from different platforms
    // Replace with actual API calls in a real-world scenario
    setTimeout(() => {
      setRedditData([
        { id: 1, title: "Reddit Post 1", score: 5000, thumbnail: "https://images.unsplash.com/photo-1616509091215-57bbece93654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWRkaXQlMjB0aHVtYm5haWx8ZW58MHx8fHwxNzExNDMxODk4fDA&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 2, title: "Reddit Post 2", score: 3000, thumbnail: "https://images.unsplash.com/photo-1584824308820-99af1d0f9239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxyZWRkaXQlMjB0aHVtYm5haWx8ZW58MHx8fHwxNzExNDMxODk4fDA&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 3, title: "Reddit Post 3", score: 2000, thumbnail: "https://images.unsplash.com/photo-1567861911437-538298e4232c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxyZWRkaXQlMjB0aHVtYm5haWx8ZW58MHx8fHwxNzExNDMxODk4fDA&ixlib=rb-4.0.3&q=80&w=1080" },
      ]);
      setYoutubeData([
        { id: 1, title: "YouTube Video 1", views: 1000000, thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcxMTQzMTg5OXww&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 2, title: "YouTube Video 2", views: 500000, thumbnail: "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx5b3V0dWJlJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcxMTQzMTg5OXww&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 3, title: "YouTube Video 3", views: 250000, thumbnail: "https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHx5b3V0dWJlJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcxMTQzMTg5OXww&ixlib=rb-4.0.3&q=80&w=1080" },
      ]);
      setTwitterData([
        { id: 1, title: "Twitter Post 1", likes: 10000, thumbnail: "https://images.unsplash.com/photo-1532295454114-d7bc89024613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0d2l0dGVyJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcxMTQzMTg5OXww&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 2, title: "Twitter Post 2", likes: 5000, thumbnail: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx0d2l0dGVyJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcxMTQzMTg5OXww&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 3, title: "Twitter Post 3", likes: 2500, thumbnail: "https://images.unsplash.com/photo-1651066471224-b970dd45acc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHx0d2l0dGVyJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcxMTQzMTg5OXww&ixlib=rb-4.0.3&q=80&w=1080" },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const getTrendRating = (score) => {
    if (score >= 5000) return "Hot";
    if (score >= 1000) return "Popular";
    return "Trending";
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Social Media Trends Dashboard
      </Heading>
      {loading ? (
        <Flex justify="center">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Tabs>
          <TabList>
            <Tab>
              <FaReddit /> Reddit
            </Tab>
            <Tab>
              <FaYoutube /> YouTube
            </Tab>
            <Tab>
              <FaTwitter /> Twitter
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {redditData.map((post) => (
                <Flex key={post.id} mb={4} alignItems="center">
                  <Image src={post.thumbnail} alt="Thumbnail" boxSize="100px" objectFit="cover" mr={4} />
                  <Box>
                    <Heading as="h3" size="md">
                      {post.title}
                    </Heading>
                    <Text>Score: {post.score}</Text>
                    <Badge colorScheme="purple">{getTrendRating(post.score)}</Badge>
                  </Box>
                </Flex>
              ))}
            </TabPanel>
            <TabPanel>
              {youtubeData.map((video) => (
                <Flex key={video.id} mb={4} alignItems="center">
                  <Image src={video.thumbnail} alt="Thumbnail" boxSize="100px" objectFit="cover" mr={4} />
                  <Box>
                    <Heading as="h3" size="md">
                      {video.title}
                    </Heading>
                    <Text>Views: {video.views}</Text>
                    <Badge colorScheme="red">{getTrendRating(video.views)}</Badge>
                  </Box>
                </Flex>
              ))}
            </TabPanel>
            <TabPanel>
              {twitterData.map((tweet) => (
                <Flex key={tweet.id} mb={4} alignItems="center">
                  <Image src={tweet.thumbnail} alt="Thumbnail" boxSize="100px" objectFit="cover" mr={4} />
                  <Box>
                    <Heading as="h3" size="md">
                      {tweet.title}
                    </Heading>
                    <Text>Likes: {tweet.likes}</Text>
                    <Badge colorScheme="blue">{getTrendRating(tweet.likes)}</Badge>
                  </Box>
                </Flex>
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </Box>
  );
};

export default Index;