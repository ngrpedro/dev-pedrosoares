import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import split from "@/assets/splitSection.jpg";
import Image from "next/image";

export default function SplitSection() {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      my={{ base: "6", md: "24" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              color={"gray.700"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#C33C54",
                zIndex: -1,
              }}
            >
              Velocidade
            </Text>
            <br />{" "}
            <Text color={"#C33C54"} as={"span"}>
              na criação do seu projeto
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Conduzindo o contato próximo ao cliente e/ou usuário nós conseguimos
            trazer mais velocidade para as tomadas de desição em relação as
            soluções!
          </Text>
          <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
            <Button
              as={"a"}
              href="https://wa.me/5518997153884?text=Ol%C3%A1%2C+estou+vindo+atrav%C3%A9s+do+portif%C3%B3lio+e+gostaria+de+bater+um+papo%21"
              target={"_black"}
              rounded={"full"}
              bg={"#C33C54"}
              color={"white"}
              _hover={{
                bg: "pink.400",
              }}
            >
              Começar um projeto
            </Button>
            <Button
              rounded={"full"}
              as={"a"}
              href="https://wa.me/5518997153884?text=Ol%C3%A1%2C+estou+vindo+atrav%C3%A9s+do+portif%C3%B3lio+e+gostaria+de+bater+um+papo%21"
              target={"_black"}
            >
              Como funciona?
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          src={split}
          className="rounded-md"
        />
      </Flex>
    </Stack>
  );
}
