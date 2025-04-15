import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  Flex,
  Text
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I'm an enthusiastic ideas builder
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Esteban Romero
          </Heading>
          Software Developer in Bank of Bogota
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/esteban.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I enjoy working in the technological field to seek and innovate in the
          search for solutions to client requirements. I enjoy development,
          architecture, and artificial intelligence. I have experience in
          architectural development and design, primarily using technologies
          such as AWS, Python, Go, Node (TypeScript), Java, IAC with Terraform,
          and Angular for full-stack website development. I have had the
          opportunity to work and research AI implementations for various
          purposes. I am currently part of AI research groups at my current
          company. I enjoy learning new things every day.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <Flex direction="row" align="center" gap={4}>
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="80px"
            h="80px"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/banco_de_bogota_logo.png"
              alt="Profile image"
              width="80"
              height="80"
            />
          </Box>
          <Box>
            <Heading size="sm">Full stack developer</Heading>
            <Text fontSize="12px">
              <List>
                <ListItem>
                  Member of the digital strategy of Banco de Bogotá.
                </ListItem>
                <ListItem>
                  Leader of the authentication innovation molecule.
                </ListItem>
                <ListItem>
                  Member of the digital strategy research group.
                </ListItem>
                <ListItem>
                  Full Stack Developer for authentication and recognition
                  solutions
                </ListItem>
                <ListItem>Facial and security controls. </ListItem>
              </List>
            </Text>
          </Box>
        </Flex>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          What I Love ♥
        </Heading>
        <Paragraph>
          Music (From Japan to Mexico), Italian Food (Chef in development), Machine Learning, Software Architecture
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Bio and Certifications
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.linkedin.com/in/esteban-elias-romero-jaimes-7871881a4/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Esteban Romero
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
