import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi'
import { useMediaQuery } from "@chakra-ui/react"
import make_my_trip_img from "../images/make_my_trip_ss.png"
import folower_1800_img from "../images/1800_flowers_ss.png"
import { Link } from 'react-router-dom';

const Projects = () => {
  const [isWidth] = useMediaQuery("(max-width: 335px)")
  const [isWidt] = useMediaQuery("(max-width: 205px)")
  return (
    <Box id='projects' backgroundColor={'white'} mt={'30px'}   p={'10px'} borderRadius={'20px'} h={'auto'} w={'82%'} margin={'0px auto'} mb={'70px'}>
      {/* frist project */}
      <Heading mt={'50px'} mb={'50px'} textAlign={'center'} fontSize={'30px'} fontFamily={'Nunito,sans-serif'} color={'rgb(1, 164, 121)'}>PROJECTS</Heading>
      <Box className='project-card' pb={{ base: "30px", sm: "30px", md: "30px", lg: "30px", xl: "0", "2xl": "0" }} display={{ base: "", sm: "", md: "", lg: "", xl: "flex", "2xl": "flex" }} borderRadius={'10px'} h={'auto'} boxShadow={'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'}>
        <Box p={'20px'} borderRadius={'10px'} overflow={'hidden'} _hover={{ transform: 'scale(1.07)' }} transition={'all 0.3s'} width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "55%", "2xl": "55%" }} h={'100%'}>
          <Image borderRadius={'10px'} boxSizing={'border-box'} h={{ base: "auto", sm: "auto", md: "auto", lg: "auto", xl: "400px", "2xl": "450px" }} w={'auto'} src={make_my_trip_img}></Image>
        </Box>
        <Box borderRadius={'10px'} boxShadow={{ base: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", sm: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", md: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", lg: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", xl: "unset", "2xl": "unset" }} textAlign={{ base: "center", sm: "center", md: "center", lg: "center", xl: "left", "2xl": "left" }} width={{ base: "100%", sm: "100%", md: "100%", lg: "90%", xl: "55%", "2xl": "55%" }} p={'30px'} margin={{ base: "center", sm: "center", md: "center", lg: "auto", xl: "", "2xl": "" }}>
          <Heading className='project-title' mb={'15px'} color={'rgb(52, 58, 64)'} fontWeight={'semibold'} fontFamily={'Nunito,sans-serif'}>MAKE MY TRIP</Heading>
          <Text className='project-description' mb={'15px'} fontSize={'large'} width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "85%", "2xl": "85%" }}>MakeMyTrip provides online travel services including airline tickets, domestic and international holiday packages, hotel reservations, rail, and bus tickets.</Text>
          <Text mb={'15px'} width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "90%", "2xl": "90%" }} fontFamily={'Nunito,sans-serif'} fontSize={'large'} fontWeight={'bold'}>A collaborative project, built in 4 days by a team of 5 developers.</Text>
          
          <Box className='project-tech-stack' width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "80%", "2xl": "80%" }} display={'flex'} flexWrap={'wrap'}>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>HTML</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>CSS</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Javascript</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>json-server</Box>
          </Box>
          {/* button */}
          <Box  mt={'30px'}>
            <Link target='_blank' to="https://github.com/atir09/purple-crook-1402"><Button className='project-github-link' mb={isWidth ? "10px" : "0"} mr={'20px'} p={'15px'} backgroundColor={'pink'} _hover={'none'}><FaGithub fontSize={'20px'} mr={"10px"} /><Text ml={'10px'}>Github</Text></Button></Link>

            <Link target='_blank' to="https://clone-of-mmt.netlify.app/"><Button className='project-deployed-link' ml={isWidth ? "-20px" : "0"} marginLeft={isWidt ? "10px" : "0"} p={'15px'} backgroundColor={'rgb(68, 164, 190)'} _hover={'none'}><BiLinkExternal fontSize={'20px'} /><Text ml={'10px'}>Live</Text></Button></Link>
          </Box>
        </Box>
      </Box>

      {/* second projects */}

      <Box className='project-card' mt={'80px'} pb={{ base: "30px", sm: "30px", md: "30px", lg: "30px", xl: "0", "2xl": "0" }} display={{ base: "", sm: "", md: "", lg: "", xl: "flex", "2xl": "flex" }} borderRadius={'10px'} h={'auto'} boxShadow={'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'}>
        <Box p={'20px'} borderRadius={'10px'} overflow={'hidden'} _hover={{ transform: 'scale(1.07)' }} transition={'all 0.3s'} width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "55%", "2xl": "55%" }} h={'100%'}>
          <Image borderRadius={'10px'} boxSizing={'border-box'} h={{ base: "auto", sm: "auto", md: "auto", lg: "auto", xl: "400px", "2xl": "450px" }} w={'100%'} src={folower_1800_img}></Image>
        </Box>
        <Box borderRadius={'10px'} boxShadow={{ base: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", sm: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", md: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", lg: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", xl: "unset", "2xl": "unset" }} textAlign={{ base: "center", sm: "center", md: "center", lg: "center", xl: "left", "2xl": "left" }} width={{ base: "100%", sm: "100%", md: "100%", lg: "90%", xl: "55%", "2xl": "55%" }} p={'30px'} margin={{ base: "center", sm: "center", md: "center", lg: "auto", xl: "", "2xl": "" }}>
          <Heading className='project-title' mb={'15px'} color={'rgb(52, 58, 64)'} fontWeight={'semibold'} fontFamily={'Nunito,sans-serif'}>1800 Flowers.com</Heading>
          <Text className='project-description' mb={'15px'} fontSize={'large'} width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "85%", "2xl": "85%" }}>1-800 Flowers.com is a floral and foods gift retailer and distribution website in the United States.</Text>
          <Text mb={'15px'} width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "90%", "2xl": "90%" }} fontFamily={'Nunito,sans-serif'} fontSize={'large'} fontWeight={'bold'}>This is a individual project which is only created by me in 5 days.</Text>
          <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "80%", "2xl": "80%" }} display={'flex'} flexWrap={'wrap'}>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>HTML</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>CSS</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Javascript</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>React</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Redux</Box>
            {/* <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Material UI</Box> */}
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Chakra UI</Box>
            {/* <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Multer</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>JWT</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>bcrypt</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Swiper</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Mongoose</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>MongoDB</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Express</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Node.js</Box> */}
          </Box>
          {/* button */}
          <Box  mt={'30px'}>
            <Link target='_blank' to="https://github.com/sourabh7909/Flowers-1800.com"><Button className='project-github-link' mb={isWidth ? "10px" : "0"} mr={'20px'} p={'15px'} backgroundColor={'pink'} _hover={'none'}><FaGithub fontSize={'20px'} mr={"10px"} /><Text ml={'10px'}>Github</Text></Button></Link>

            <Link target='_blank' to="https://fluffy-sunflower-923368.netlify.app/"><Button className='project-deployed-link' ml={isWidth ? "-20px" : "0"} marginLeft={isWidt ? "10px" : "0"} p={'15px'} backgroundColor={'rgb(68, 164, 190)'} _hover={'none'}><BiLinkExternal fontSize={'20px'} /><Text ml={'10px'}>Live</Text></Button></Link>
          </Box>
        </Box>
      </Box>

      {/* third project */}
      <Box className='project-card' mt={'80px'} pb={{ base: "30px", sm: "30px", md: "30px", lg: "30px", xl: "0", "2xl": "0" }} display={{ base: "", sm: "", md: "", lg: "", xl: "flex", "2xl": "flex" }} borderRadius={'10px'} h={'auto'} boxShadow={'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'}>
        <Box p={'20px'} borderRadius={'10px'} overflow={'hidden'} _hover={{ transform: 'scale(1.07)' }} transition={'all 0.3s'} width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "45%", "2xl": "45%" }} h={'100%'}>
          <Image borderRadius={'10px'} boxSizing={'border-box'} h={'auto'} w={'100%'} src="https://www.yourdesignpick.com/49152/yec193.jpg"></Image>
        </Box>
        <Box borderRadius={'10px'} boxShadow={{ base: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", sm: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", md: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", lg: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", xl: "unset", "2xl": "unset" }} textAlign={{ base: "center", sm: "center", md: "center", lg: "center", xl: "left", "2xl": "left" }} width={{ base: "100%", sm: "100%", md: "100%", lg: "90%", xl: "55%", "2xl": "55%" }} p={'30px'} margin={{ base: "center", sm: "center", md: "center", lg: "auto", xl: "", "2xl": "" }}>
          <Heading className='project-title' mb={'15px'} color={'rgb(52, 58, 64)'} fontWeight={'semibold'} fontFamily={'Nunito,sans-serif'}>ORGANIC MARKET</Heading>
          <Text className='project-description' mb={'15px'} fontSize={'large'} width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "85%", "2xl": "85%" }}>The best online grocery store in India. bigbasket is an online supermarket for all your daily needs. Online shopping now made easy with a wide range of groceries and home needs.</Text>
          <Text mb={'15px'} width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "90%", "2xl": "90%" }} fontFamily={'Nunito,sans-serif'} fontSize={'large'} fontWeight={'bold'}>A collaborative project, built in 4 days by a team of 5 developers.</Text>
          <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "80%", "2xl": "80%" }} display={'flex'} flexWrap={'wrap'}>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>HTML</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>CSS</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Javascript</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>React</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Redux</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Material UI</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Chakra UI</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Multer</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>JWT</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>bcrypt</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Swiper</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Mongoose</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>MongoDB</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Express</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Node.js</Box>
          </Box>
          {/* button */}
          <Box  mt={'30px'}>
            <Link target='_blank' to="https://github.com/sourabh7909/Flowers-1800.com"><Button className='project-github-link' mb={isWidth ? "10px" : "0"} mr={'20px'} p={'15px'} backgroundColor={'pink'} _hover={'none'}><FaGithub fontSize={'20px'} mr={"10px"} /><Text ml={'10px'}>Github</Text></Button></Link>

            <Link target='_blank' to="https://fluffy-sunflower-923368.netlify.app/"><Button className='project-deployed-link' ml={isWidth ? "-20px" : "0"} marginLeft={isWidt ? "10px" : "0"} p={'15px'} backgroundColor={'rgb(68, 164, 190)'} _hover={'none'}><BiLinkExternal fontSize={'20px'} /><Text ml={'10px'}>Live</Text></Button></Link>
          </Box>
        </Box>
      </Box>
   
   {/* fourth projects */}
   <Box className='project-card' mt={'80px'} pb={{ base: "30px", sm: "30px", md: "30px", lg: "30px", xl: "0", "2xl": "0" }} display={{ base: "", sm: "", md: "", lg: "", xl: "flex", "2xl": "flex" }} borderRadius={'10px'} h={'auto'} boxShadow={'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'}>
        <Box p={'20px'} borderRadius={'10px'} overflow={'hidden'} _hover={{ transform: 'scale(1.07)' }} transition={'all 0.3s'} width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "45%", "2xl": "45%" }} h={'100%'}>
          <Image borderRadius={'10px'} boxSizing={'border-box'} h={'auto'} w={'100%'} src="https://www.yourdesignpick.com/49152/yec193.jpg"></Image>
        </Box>
        <Box borderRadius={'10px'} boxShadow={{ base: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", sm: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", md: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", lg: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", xl: "unset", "2xl": "unset" }} textAlign={{ base: "center", sm: "center", md: "center", lg: "center", xl: "left", "2xl": "left" }} width={{ base: "100%", sm: "100%", md: "100%", lg: "90%", xl: "55%", "2xl": "55%" }} p={'30px'} margin={{ base: "center", sm: "center", md: "center", lg: "auto", xl: "", "2xl": "" }}>
          <Heading className='project-title' mb={'15px'} color={'rgb(52, 58, 64)'} fontWeight={'semibold'} fontFamily={'Nunito,sans-serif'}>ORGANIC MARKET</Heading>
          <Text className='project-description' mb={'15px'} fontSize={'large'} width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "85%", "2xl": "85%" }}>The best online grocery store in India. bigbasket is an online supermarket for all your daily needs. Online shopping now made easy with a wide range of groceries and home needs.</Text>
          <Text mb={'15px'} width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "90%", "2xl": "90%" }} fontFamily={'Nunito,sans-serif'} fontSize={'large'} fontWeight={'bold'}>A collaborative project, built in 4 days by a team of 5 developers.</Text>
          <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "80%", "2xl": "80%" }} display={'flex'} flexWrap={'wrap'}>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>HTML</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>CSS</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Javascript</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>React</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Redux</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Material UI</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Chakra UI</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Multer</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>JWT</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>bcrypt</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Swiper</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Mongoose</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>MongoDB</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Express</Box>
            <Box m={'2px 2px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'} borderRadius={'10px'} p={'1px 15px'} fontSize={'14px'} fontFamily={'Nunito,sans-serif'}>Node.js</Box>
          </Box>
          {/* button */}
          <Box  mt={'30px'}>
            <Link target='_blank' to="https://github.com/sourabh7909/Flowers-1800.com"><Button className='project-github-link' mb={isWidth ? "10px" : "0"} mr={'20px'} p={'15px'} backgroundColor={'pink'} _hover={'none'}><FaGithub fontSize={'20px'} mr={"10px"} /><Text ml={'10px'}>Github</Text></Button></Link>

            <Link target='_blank' to="https://fluffy-sunflower-923368.netlify.app/"><Button className='project-deployed-link' ml={isWidth ? "-20px" : "0"} marginLeft={isWidt ? "10px" : "0"} p={'15px'} backgroundColor={'rgb(68, 164, 190)'} _hover={'none'}><BiLinkExternal fontSize={'20px'} /><Text ml={'10px'}>Live</Text></Button></Link>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default Projects

