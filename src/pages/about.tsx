import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  AngularLogo,
  Atom,
  FileCss,
  FileHtml,
  FileJsx,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "phosphor-react";
import Head from "next/head";

interface Props {
  color: string;
  children: ReactNode | String;
}

export default function About() {
  return (
    <>
    <Head>
      <title>Pedro Soares | Sobre</title>
      <link rel="icon" href="/logo-mini.svg" />
    </Head>
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={"4"}
      pt="10"
    >
      <GridItem className="relative">
        <Box h="screen" className="sticky top-0">
          <Center py={6}>
            <Box
              maxW={"270px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Image
                h={"120px"}
                w={"full"}
                src={
                  "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
                objectFit={"cover"}
              />
              <Flex justify={"center"} mt={-12}>
                <Avatar
                  size={"xl"}
                  bg="gray.200"
                  css={{
                    border: "2px solid white",
                  }}
                />
              </Flex>

              <Box p={6}>
                <Stack spacing={0} align={"center"} mb={5}>
                  <h1 className="font-poppins text-2xl font-medium">
                    Pedro Soares
                  </h1>
                  <Text color={"gray.500"}>Desenvolvedor Frontend</Text>
                </Stack>
                <Stack>
                  <Button
                    as={"a"}
                    href="https://www.linkedin.com/in/pedro-nogueira399/"
                    target={"_black"}
                    w={"full"}
                    mt={8}
                    bg={useColorModeValue("blue.400", "blue.900")}
                    color={"white"}
                    rounded={"md"}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                  >
                    Linkedin
                    <LinkedinLogo size={26} className="ml-2" />
                  </Button>
                  <Button
                    as={"a"}
                    href="https://github.com/ngrpedro"
                    target={"_black"}
                    w={"full"}
                    mt={8}
                    bg={useColorModeValue("gray.900", "gray.900")}
                    color={"white"}
                    rounded={"md"}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                  >
                    Github
                    <GithubLogo size={26} className="ml-2" />
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Center>
        </Box>
      </GridItem>

      <GridItem colSpan={{ base: 1, md: 2 }}>
        <Box className="p-1 flex flex-col items-start font-poppins space-y-6">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-bold">
            Desenvolvedor front-end
          </h2>

          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            gap="5"
          >
            <span className="inline-block py-1 px-2 rounded bg-indigo-100 text-indigo-700 text-xs font-medium tracking-widest">
            Design de interface
            </span>
            <span className="inline-block py-1 px-2 rounded bg-green-100 text-green-700 text-xs font-medium tracking-widest">
            Experiencia do usuário
            </span>
            
            <span className="inline-block py-1 px-2 rounded bg-yellow-100 text-yellow-700 text-xs font-medium tracking-widest">
            Desenvolvimento web
            </span>
          </Grid>

          <div className="flex flex-wrap items-start justify-center gap-6 py-4">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
              <Atom size={32} className="text-white" />
            </div>
            <div className="w-14 h-14 bg-yellow-600 rounded-full flex items-center justify-center">
            <FileHtml size={32} className="text-white" />
            </div>
            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
            <FileCss size={32} className="text-white" />
            </div>
            <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center">
            <FileJsx size={32} className="text-white" />
            </div>
          </div>

          <p className="leading-relaxed text-justify">
            Desenvolvedor front-end, formado em Análise e Desenvolvimento de
            Sistemas no ano de 2018.
            <br />
            <br />
            Logo em 2019 tive minha primeira oportunidade como front-end,
            entrando em contato profissional com HTML, CSS e JavaScript e desde
            então procurando aperfeiçoar minhas habilidades em JavaScript.
            <br />
            <br />
            Criação, manutenção, teste e escalabilidade de produtos digitais têm
            feito parte da minha trajetória até aqui, assim como micro
            front-end, SPAs, clean code e padrões de organização e arquitetura.
            <br />
            <br />
            Projetos com APIs REST e GraphQL estão no meu portfólio pessoal e
            profissional.
            <br />
            <br />
            Tenho trazido libs e frameworks para o meu repertório, a fim de
            expandir conhecimento, gerar velocidade e escalabilidade para os
            projetos, tais como: ReactJS | NextJS , SASS, TailwindCSS, Chakra
            UI, Material UI, Bootstrap.
            <br />
            <br />
            Atuei em equipes de desenvolvimento ágil, que envolviam a
            colaboração com designers, outros desenvolvedores e gerentes de
            produto. Análise de requisitos, pesquisa, documentação e treinamento
            com o usuário também estão atrelados às minhas experiências.
          </p>

          <Stack w="full" alignItems={"end"} py="10">
            <Button
              as={"a"}
              href="https://wa.me/5518997153884?text=Ol%C3%A1%2C+estou+vindo+atrav%C3%A9s+do+portif%C3%B3lio+e+gostaria+de+bater+um+papo%21"
              target={"_black"}
              display={"inline-flex"}
              rounded="full"
              fontWeight={600}
              color={"white"}
              bg={"#C33C54"}
              _hover={{
                bg: "pink.400",
              }}
            >
              Entre em contato
              <WhatsappLogo size={22} className="ml-2" />
            </Button>
          </Stack>
        </Box>
      </GridItem>
    </Grid>
    </>

  );
}

const Tag = ({ color, children }: Props) => {
  return (
    <span
      className={`inline-block py-1 px-2 rounded bg-${color}-100 text-${color}-700 text-xs font-medium tracking-widest`}
    >
      {children}
    </span>
  );
};

const StackIcons = ({ color, children }: Props) => {
  console.log(color)
  return (
    <div
      className={`w-14 h-14 bg-${color}-600 rounded-full flex items-center justify-center`}
    >
      {children}
    </div>
  );
};
