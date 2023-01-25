import { Flex, Button, Box, Heading, Text } from "@chakra-ui/react";

import React from "react";
import { NumberOne, WhatsappLogo } from "phosphor-react";

const NewsLetter = () => {
  return (
    <Flex alignItems={"center"} justifyContent="center" mb="28">
      <Flex
        w="full"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent="space-between"
        gap={{ base: 16 }}
        bg={"#00244A"}
        textColor="white"
        rounded={"xl"}
        p={{ base: "8", md: "10" }}
      >
        <Box
          maxW={"500px"}
          textAlign={{ base: "center", md: "start" }}
          className="space-y-4"
        >
          <Heading fontWeight={900} fontSize={{ base: "4xl", sm: "5xl" }}>
            Precisa de um{" "}
            <Text as={"span"} color={"#C33C54"}>
              site profissional{" "}
            </Text>
            ?
          </Heading>
          <Text color={"gray.100"}>
            Do design ao desenvolvimento, te ajudo a construir um espaço para
            exposição da sua marca.
          </Text>
        </Box>
        <Box>
          <Button
            as={"a"}
            href="https://wa.me/5518997153884?text=Ol%C3%A1%2C+estou+vindo+atrav%C3%A9s+do+portif%C3%B3lio+e+gostaria+de+bater+um+papo%21"
            target={"_black"}
            display={"inline-flex"}
            rounded="full"
            fontSize={{ base: "md", lg: "xl" }}
            fontWeight={600}
            color={"white"}
            bg={"#C33C54"}
            _hover={{
              bg: "pink.400",
            }}
            px={{ base: "10", md: "14" }}
            py={{ base: "6", md: "8" }}
          >
            Entre em contato
            <WhatsappLogo size={30} className="ml-4" />
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default NewsLetter;
