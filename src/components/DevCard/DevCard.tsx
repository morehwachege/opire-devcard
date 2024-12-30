import { Avatar, Box, Container, Flex, Group, Image, Text, Title } from '@mantine/core'
import React from 'react'
import profileImage from "../../assets/images/antony-gakuru.jpg";
import { BiLogoGithub } from "react-icons/bi";
import { GoGitPullRequest } from "react-icons/go";
import { FaDollarSign, FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaDribbble, FaTrophy } from "react-icons/fa";
import logoMask from "../../assets/images/logo_mask.svg"
import bigLogo from "../../assets/images/big_logo.svg"
import angularIcon from '../../assets/images/repositoryIcons/angular1.png'
import godotEngine1Icon from '../../assets/images/repositoryIcons/godotengine1.png'
import quasarFrameworkIcon from '../../assets/images/repositoryIcons/quasarframework1.png'
import typeOrm from '../../assets/images/repositoryIcons/typeorm.png'


function DevCard() {
  return (
    <Box w="600"
      bd="1px solid #ffffff30"
      bg="#242424"
      style={{
        borderRadius: 10, overflow: "hidden",
        paddingTop: 25,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 5
      }}
      pos={'relative'}>
      <Image
        src={logoMask}
        alt="Rounded Image"
        // h={130}
        w="auto"
        fit="contain"
        style={{
          position: "absolute",
          top: -25,
          height: 130,
          right: -25,
          '@media (max-width: 593px)': {
            top: -25,
            right: -25,
            height: 50,
        },
        }}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      />
      <Image
        src={logoMask}
        alt="Rounded Image"
        h={130}
        w="auto"
        fit="contain"
        style={{
          position: "absolute",
          bottom: -25,
          left: -25
        }}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      />
      <Flex
        gap={'sm'}
        align={'center'}>
        <Avatar src={profileImage} alt="it's me" radius="xl" w={90} h={90} />
        <Flex
          align="flex-start"
          wrap={'wrap'}
          direction={'column'}
        >
          <Title order={3}>Antony Gakuru</Title>
          <Flex
          >
            <BiLogoGithub size={24} color="ffffff" />
            <Text c='#20726B' pl={4}>@morehwachege</Text>
          </Flex>
        </Flex>
      </Flex>

      <Group px={2} style={{
        whiteSpace: 'nowrap',
        '@media (max-width: 593px)': {
          flex: 'column',
          justifyContent: 'flex-start',
        },
      }}>
        <Container
          bg='#1a1a1a'
          h={120}
          mt='md'
          size={'7rem'}
          style={{ borderRadius: 10 }}>

          <Flex direction={"column"} align={"center"} justify={"center"} h={120}>
            <GoGitPullRequest size={26} color="ff972f" />
            <Text ta="center" style={{ paddingTop: 5 }}>274</Text>
            <Text ta="center" style={{ whiteSpace: 'nowrap', paddingTop: '10' }} size="xs">
              Issues Resolved
            </Text>
          </Flex>
        </Container>

        <Container
          bg='#1a1a1a'
          h={120}
          mt='md'
          size={'7rem'}
          style={{ borderRadius: 10 }}>

          <Flex direction={"column"} align={"center"} justify={"center"} h={120}>
            <FaDollarSign size={26} color="#78A55A" />
            <Text ta="center" style={{ paddingTop: 5 }}>3725</Text>
            <Text ta="center" style={{ whiteSpace: 'nowrap', paddingTop: '10' }} size="xs">
              Money Earned
            </Text>
          </Flex>
        </Container>

        <Container
          bg='#1a1a1a'
          h={120}
          mt='md'
          size={'7rem'}
          style={{ borderRadius: 10 }}>

          <Flex direction={"column"} align={"center"} justify={"center"} h={120}>
            <FaTrophy size={26} color="#D16D6A" />
            <Text ta="center" style={{ paddingTop: 5 }}>8</Text>
            <Text ta="center" style={{ whiteSpace: 'nowrap', paddingTop: '10' }} size="xs">
              Challenges
            </Text>
          </Flex>
        </Container>

        <Container
          h={120}
          mt='md'
          size={'11rem'}
          style={{ borderRadius: 10 }}>
          <Flex direction={"row"} align={"center"} justify={"center"} h={120}>
            <Text ta="center" style={{ paddingTop: '10' }} size="xs">
              Data since December 2024
            </Text>
            <FaArrowRightLong size={26} color="#78A55A" />
          </Flex>
        </Container>
      </Group>

      {/* Most recent contributions */}
      <Flex justify={"end"} align={"center"} gap={'xl'} style={{ paddingTop: 20 }}>
        <Flex style={{ paddingRight: 55 }} direction={'column'} >
          <Text size={"sm"} fw="700">Most Recent Contributions</Text>
          <Group style={{ paddingTop: 10 }}>
            <Avatar src={angularIcon} alt="it's me" radius="xl" w={40} h={40} />
            <Avatar src={quasarFrameworkIcon} alt="it's me" radius="xl" w={40} h={40} />
            <Avatar src={typeOrm} alt="it's me" radius="xl" w={40} h={40} />
            <Avatar src={godotEngine1Icon} alt="it's me" radius="xl" w={40} h={40} />
          </Group>
        </Flex>

        <Flex gap={'md'} justify={"center"} align={"center"}>
          <Text size={"xs"} fw="700">Socials</Text>
          <FaArrowRightLong size={20} color="#78A55A" />
          <Flex justify={"center"} align={"center"} gap={'xs'}>
            <FaLinkedin size={20} color="#78A55A" />
            <FaDribbble size={20} color="#78A55A" />
            <FaXTwitter size={20} color="#78A55A" />
          </Flex>
        </Flex>
      </Flex>

      <Image
        src={bigLogo}
        alt="Rounded Image"
        h={15}
        w="auto"
        fit="contain"
        style={{
          marginTop: 18,
          marginLeft: "auto",
          opacity: .7
        }}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      />
    </Box>
  )
}

export default DevCard