import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  HStack,
  VStack,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  Link,
  IconButton,
  useColorMode,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaWindows,
  FaBars,
  FaMoon,
  FaSun,
  FaArrowUp,
  FaLock,
  FaSync,
  FaCloud,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

import screenshot1 from "./assets/Screenshot-1.png";
import screenshot2 from "./assets/Screenshot-2.png";
import screenshot3 from "./assets/Screenshot-3.png";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const screenshots = [screenshot1, screenshot2, screenshot3];

// 🌈 Animated Background
function AnimatedBg() {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bgGradient="radial(at top left, blue.400, purple.500, pink.400)"
      opacity="0.2"
      filter="blur(100px)"
      zIndex="0"
      as={motion.div}
      animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
  );
}

// 🌙 Top Navigation with Scroll Spy
function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("rgba(255,255,255,0.85)", "rgba(26,32,44,0.85)");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const onScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) current = section.getAttribute("id");
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#how", label: "How It Works" },
    { href: "#security", label: "Security" },
    { href: "#download", label: "Download" },
  ];

  const NavLinks = (
    <HStack spacing={6} flexDir={{ base: "column", md: "row" }}>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          fontWeight={active === l.href.slice(1) ? "bold" : "medium"}
          color={active === l.href.slice(1) ? "blue.500" : "inherit"}
          _hover={{ color: "blue.400" }}
        >
          {l.label}
        </Link>
      ))}
      <IconButton
        as="a"
        href="https://github.com/ashishkarche/SecureFileApp"
        aria-label="GitHub"
        icon={<FaGithub />}
        variant="ghost"
      />
      <IconButton
        onClick={toggleColorMode}
        aria-label="Toggle dark mode"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        variant="ghost"
      />
    </HStack>
  );

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="50"
      py={4}
      bg={bg}
      borderBottom="1px solid"
      borderColor={borderColor}
      backdropFilter="saturate(180%) blur(10px)"
      css={{ scrollBehavior: "smooth" }}
    >
      <Container maxW="7xl">
        <Flex align="center" justify="space-between">
          <Heading size="sm" letterSpacing="tight">
            🔒 SecureFile
          </Heading>
          <Box display={{ base: "none", md: "block" }}>{NavLinks}</Box>
          <IconButton
            icon={<FaBars />}
            aria-label="Menu"
            onClick={onOpen}
            display={{ base: "block", md: "none" }}
            variant="ghost"
          />
        </Flex>
      </Container>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody mt={12}>{NavLinks}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

// 🚀 Hero
function Hero() {
  const textColor = useColorModeValue("gray.600", "gray.300");
  return (
    <Box as="section" id="home" position="relative" overflow="hidden" py={{ base: 16, md: 28 }}>
      <AnimatedBg />
      <Container maxW="7xl" position="relative" zIndex="1">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 16 }} alignItems="center">
          <MotionBox {...fadeUp}>
            <Heading
              fontSize={{ base: "2.5xl", md: "5xl" }}
              mb={5}
              lineHeight="short"
              textAlign={{ base: "center", md: "left" }}
            >
              Secure, Private & Reliable{" "}
              <Text as="span" bgGradient="linear(to-r, blue.400, purple.500)" bgClip="text">
                File Storage
              </Text>
            </Heading>
            <Text color={textColor} mb={6} textAlign={{ base: "center", md: "left" }}>
              Encrypt, sync, and manage your files anywhere with unmatched privacy.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} justify={{ base: "center", md: "start" }}>
              <Button
                as="a"
                href="#download"
                leftIcon={<FaWindows />}
                size="lg"
                bgGradient="linear(to-r, blue.400, purple.500)"
                _hover={{ bgGradient: "linear(to-r, blue.500, purple.600)", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}
                color="white"
              >
                Download
              </Button>
              <Button as="a" href="#features" variant="outline" colorScheme="blue" size="lg">
                Learn More
              </Button>
            </Stack>
          </MotionBox>

          <MotionBox {...fadeUp} transition={{ delay: 0.2 }}>
            <SimpleGrid columns={{ base: 2, sm: 3 }} spacing={4}>
              {screenshots.map((src, i) => (
                <MotionImage
                  key={i}
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  borderRadius="lg"
                  w="100%"
                  objectFit="cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </SimpleGrid>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

// 💎 Features
function Features() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");

  const features = [
    { title: "End-to-end Encryption", desc: "AES-256 encryption for all files at rest and in transit.", icon: <FaLock /> },
    { title: "Secure Sharing", desc: "Share encrypted files with expiring links and permissions.", icon: <FaCloud /> },
    { title: "Fast Sync", desc: "Smart sync engine minimizes upload times and bandwidth usage.", icon: <FaSync /> },
  ];

  return (
    <Box as="section" id="features" py={{ base: 16, md: 24 }} bg={bg}>
      <Container maxW="6xl">
        <Heading textAlign="center" mb={10}>
          Powerful Features
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {features.map((f, i) => (
            <MotionBox
              key={i}
              p={8}
              bg={cardBg}
              borderRadius="xl"
              textAlign="center"
              boxShadow="sm"
              whileHover={{ y: -5, boxShadow: "lg" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Box fontSize="3xl" mb={3} color="blue.500">
                {f.icon}
              </Box>
              <Heading fontSize="xl" mb={2}>
                {f.title}
              </Heading>
              <Text color="gray.500">{f.desc}</Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

// ⚙️ How It Works
function HowItWorks() {
  const steps = [
    { title: "1. Upload", desc: "Select your files and upload them securely." },
    { title: "2. Encrypt", desc: "Your files are encrypted locally before sending." },
    { title: "3. Sync", desc: "Encrypted data syncs across your devices seamlessly." },
  ];

  return (
    <Box as="section" id="how" py={{ base: 16, md: 24 }}>
      <Container maxW="6xl">
        <Heading textAlign="center" mb={10}>
          How It Works
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {steps.map((s, i) => (
            <MotionBox key={i} {...fadeUp} p={8} textAlign="center" border="1px solid" borderColor="gray.200" borderRadius="xl">
              <Heading fontSize="2xl" mb={3} color="blue.500">
                {s.title}
              </Heading>
              <Text>{s.desc}</Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

// 🔐 Security Architecture
// 🔐 Security Architecture — Responsive Animated Diagram
function Security() {
  const accent = "#2563EB"; // blue.600
  const accent2 = "#8B5CF6"; // purple
  const bg = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.300");

  const MotionBox = motion(Box);

  // Reusable animated node
  const Node = ({ title, subtitle, color = "blue.400", pulse = false }) => {
    const nodeBg = useColorModeValue("white", "gray.700");
    return (
      <MotionBox
        borderRadius="lg"
        p={{ base: 3, sm: 4 }}
        minW={{ base: "160px", md: "200px" }}
        textAlign="center"
        boxShadow="md"
        bg={nodeBg}
        border={`1px solid ${color}`}
        whileHover={{ scale: 1.05 }}
        animate={
          pulse
            ? { scale: [1, 1.04, 1], transition: { duration: 2.2, repeat: Infinity } }
            : {}
        }
      >
        <Heading
          size={{ base: "xs", sm: "sm" }}
          mb={1}
          color={color}
          lineHeight="shorter"
        >
          {title}
        </Heading>
        <Text fontSize={{ base: "xs", sm: "sm" }} color={textColor}>
          {subtitle}
        </Text>
      </MotionBox>
    );
  };

  // Animated arrow (responsive width)
  const Arrow = ({ color = "#60A5FA", width = "100%" }) => (
    <Box display={{ base: "none", md: "block" }} flex="1" textAlign="center">
      <svg
        width="100%"
        height="36"
        viewBox="0 0 200 36"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          x1="0"
          y1="18"
          x2="180"
          y2="18"
          stroke={color}
          strokeWidth="2"
          strokeDasharray="10 8"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -30 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        />
        <motion.polygon
          points="180,12 198,18 180,24"
          fill={color}
          animate={{ x: [0, 6, 0], transition: { duration: 1.6, repeat: Infinity, ease: "linear" } }}
        />
      </svg>
    </Box>
  );

  return (
    <Box as="section" id="security" py={{ base: 12, md: 20 }} bg={bg}>
      <Container maxW="7xl">
        <VStack spacing={{ base: 8, md: 12 }}>
          <Heading
            textAlign="center"
            fontSize={{ base: "2xl", md: "3xl" }}
            px={2}
          >
            Security Architecture
          </Heading>
          <Text
            textAlign="center"
            maxW="2xl"
            color={textColor}
            fontSize={{ base: "sm", md: "md" }}
            px={4}
          >
            SecureFile applies a multi-layer security design:
            client-side encryption, file fragmentation, multi-party encryption,
            and key-managed cloud storage.
          </Text>

          {/* Row 1: Client → Encryption → Fragmentation */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            flexWrap="wrap"
            gap={{ base: 4, md: 6 }}
            textAlign="center"
          >
            <Node title="Client App" subtitle="Uploads file" color={accent} pulse />
            <Arrow color={accent} />
            <Node
              title="Encryption Module"
              subtitle="AES / 3DES / RC6 applied"
              color={accent2}
              pulse
            />
            <Arrow color={accent2} />
            <Node title="Fragmenter" subtitle="Splits into 3 encrypted parts" color={accent} />
          </Flex>

          {/* Row 2: Multi-party Encryption → Cloud */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            flexWrap="wrap"
            gap={{ base: 4, md: 6 }}
          >
            <HStack
              spacing={{ base: 3, md: 4 }}
              justify="center"
              flexWrap="wrap"
              flex={{ base: "0 0 auto", md: "1" }}
            >
              <Node title="Part A" subtitle="Encrypted (AES)" color={accent} />
              <Node title="Part B" subtitle="Encrypted (3DES)" color={accent} />
              <Node title="Part C" subtitle="Encrypted (RC6)" color={accent} />
            </HStack>

            <Arrow color={accent2} />
            <Node
              title="Multi-Party Encryptor"
              subtitle="Encrypts using public keys"
              color={accent2}
              pulse
            />
            <Arrow color={accent} />
            <Node
              title="Cloud Storage"
              subtitle="Encrypted blobs + metadata"
              color={accent}
            />
          </Flex>

          {/* Row 3: Key Management & Access */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            flexWrap="wrap"
            gap={{ base: 4, md: 6 }}
          >
            <Node
              title="Key Management"
              subtitle="Handles rotation & distribution"
              color={accent2}
            />
            <Arrow color={accent2} />
            <Node
              title="Auth Server"
              subtitle="User validation & key access"
              color={accent}
            />
            <Arrow color={accent} />
            <Node
              title="Recipient"
              subtitle="Decrypts permitted fragments"
              color={accent}
              pulse
            />
          </Flex>

          <Text
            textAlign="center"
            color="gray.500"
            fontSize={{ base: "xs", md: "sm" }}
            pt={4}
            px={4}
          >
            Animated visualization of SecureFile’s hybrid encryption workflow —
            fully client-side, with multi-party key management for privacy and control.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}


// 💾 Download
function Download() {
  return (
    <Box as="section" id="download" py={{ base: 16, md: 24 }} bg="gray.800" color="white">
      <Container maxW="4xl" textAlign="center">
        <Heading mb={4}>Download SecureFile</Heading>
        <Text mb={8} color="gray.400">
          Available for Windows. macOS coming soon.
        </Text>
        <VStack spacing={4}>
          <Button
            as="a"
            href="https://github.com/ashishkarche/SecureFileApp/releases/download/v2.0/SecureFileAppSetup.exe"
            leftIcon={<FaWindows />}
            size="lg"
            bgGradient="linear(to-r, blue.400, purple.500)"
            _hover={{ bgGradient: "linear(to-r, blue.500, purple.600)", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}
            color="white"
          >
            Download for Windows
          </Button>
          <Link href="https://github.com/ashishkarche/SecureFileApp" isExternal color="gray.300">
            View on GitHub →
          </Link>
        </VStack>
      </Container>
    </Box>
  );
}

// ⬆️ Back to Top Button
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <MotionBox
          position="fixed"
          bottom="40px"
          right="40px"
          zIndex="100"
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
        >
          <IconButton
            icon={<FaArrowUp />}
            aria-label="Back to top"
            colorScheme="blue"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            rounded="full"
            size="lg"
            boxShadow="lg"
          />
        </MotionBox>
      )}
    </AnimatePresence>
  );
}

// ⚡ Footer
function Footer() {
  return (
    <Box as="footer" py={8} bg={useColorModeValue("white", "gray.800")}>
      <Container maxW="7xl">
        <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }}>
          <Text fontSize="sm" color="gray.500">
            © {new Date().getFullYear()} SecureFile. All rights reserved.
          </Text>
          <Link href="https://github.com/ashishkarche/SecureFileApp" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} variant="ghost" />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}

// 🌗 App Root
export default function App() {
  const [ready, setReady] = useState(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Helmet>
        <title>SecureFile – Encrypted Cloud Storage</title>
        <meta
          name="description"
          content="SecureFile encrypts and syncs your files privately using client-side AES-256 encryption. Reliable, private, and fast."
        />
        <meta property="og:title" content="SecureFile" />
        <meta property="og:description" content="Your encrypted cloud file storage." />
        <meta property="og:image" content="/og-preview.png" />
      </Helmet>

      <AnimatePresence mode="wait">
        <MotionBox
          key={colorMode}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4 }}
        >
          <TopNav />
          {!ready ? (
            <Flex align="center" justify="center" minH="60vh">
              <Text color="gray.500">Loading...</Text>
            </Flex>
          ) : (
            <>
              <Hero />
              <Features />
              <HowItWorks />
              <Security />
              <Download />
              <Footer />
              <BackToTop />
            </>
          )}
        </MotionBox>
      </AnimatePresence>
    </>
  );
}
