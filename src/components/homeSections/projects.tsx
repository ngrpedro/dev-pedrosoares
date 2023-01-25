import { Box, Card, Flex, Grid, Image } from "@chakra-ui/react";
import better from "@/assets/cases/BetterMarketing.png";
import green from "@/assets/cases/Green.png";
import lotus from "@/assets/cases/Lotus.png";

const Projects = () => {
  return (
    <Box>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="20"
        my="28"
      >
        <Box m="auto">
          <Image
            /* src={green} */
            alt="mockup"
            className="rounded-md rotate-[-8deg] hover:rotate-[-4deg] transition-all"
          />
        </Box>
        <Box m="auto">
          <Image
            /*  src={lotus} */
            alt="mockup"
            className="rounded-md rotate-[8deg] hover:rotate-[4deg] transition-all"
          />
        </Box>
        <Box m="auto">
          <Image
            /* src={better} */
            alt="mockup"
            className="rounded-md rotate-[-3deg] hover:rotate-[0deg] transition-all"
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default Projects;
