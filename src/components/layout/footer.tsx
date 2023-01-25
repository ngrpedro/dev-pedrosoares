import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { ReactNode } from "react";

import logo from "../../assets/mini_logo.png";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";

const Logo = (props: any) => {
  return (
    <Flex
      gap="2"
      alignItems={"center"}
      justifyContent="center"
      fontWeight={900}
    >
      <Box boxSize="10">
        <Image /* src={logo} */ alt="Dan Abramov" />
      </Box>
      <p className="font-poppins sm:text-xl md:text-2xl">Pedro Soares</p>
    </Flex>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box color={useColorModeValue("gray.700", "gray.200")}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} spacing={6} flexWrap="wrap">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>Sobre mim</Link>
          <Link href={"#"}>Projetos</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text textAlign={"center"}>
            © 2023 Pedro Saores - WebSites. Todos os direitos reservados
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <TwitterLogo size={32} />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FacebookLogo size={32} />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <InstagramLogo size={32} />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
