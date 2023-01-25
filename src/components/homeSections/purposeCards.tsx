import {
  Box,
  Center,
  Grid,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FileDoc, IdentificationCard, ShieldCheck } from "phosphor-react";

const PurposeCards = () => {
  return (
    <div>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={{ base: "", sm: "6", md: "6" }}
      >
        <Center py={6}>
          <Box
            w={"full"}
            h={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"start"}
            className="space-y-5 hover:scale-105 transition-all"
          >
            <Box
              boxSize={12}
              bg={useColorModeValue("#00244A", "gray.400")}
              rounded={"full"}
              textColor="white"
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
            >
              <FileDoc size={28} />
            </Box>
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              <p className="font-poppins">Briefing do Projeto</p>
            </Heading>
            <Text
              textAlign={"start"}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              Momento de validação de ideias e direcionamento do projeto. Vamos
              organizar e pensar em soluções juntos.
            </Text>
          </Box>
        </Center>

        <Center py={6}>
          <Box
            w={"full"}
            h={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"start"}
            className="space-y-5 hover:scale-105 transition-all"
          >
            <Box
              boxSize={12}
              bg={useColorModeValue("#00244A", "gray.400")}
              rounded={"full"}
              textColor="white"
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
            >
              <IdentificationCard size={28} />
            </Box>
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              <p className="font-poppins break-all">Desenvolvimento</p>
            </Heading>
            <Text
              textAlign={"start"}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              Suas soluções criando vida com estratégias visuais planejadas para
              passar sua mensagem.
            </Text>
          </Box>
        </Center>

        <Center py={6}>
          <Box
            w={"full"}
            h={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"start"}
            className="space-y-5 hover:scale-105 transition-all"
          >
            <Box
              boxSize={12}
              bg={useColorModeValue("#00244A", "gray.400")}
              rounded={"full"}
              textColor="white"
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
            >
              <ShieldCheck size={28} />
            </Box>
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              <p className="font-poppins">Responsividade</p>
            </Heading>
            <Text
              textAlign={"start"}
              color={useColorModeValue("gray.700", "gray.400")}
            >
              Layout responsivo, que exibirá seu produto em varios formatos de
              telas.
            </Text>
          </Box>
        </Center>
      </Grid>
    </div>
  );
};

export default PurposeCards;
