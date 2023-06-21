import { Box, Button, Heading, Image, Input, Text, Textarea, useMediaQuery } from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import React from 'react'
import { BsGeoAltFill, BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Contact = () => {
  const [isWidth] = useMediaQuery("(max-width: 480px)")
  const [isWidths] = useMediaQuery("(max-width: 220px)")
  return (
    <Box mt={'50px'} id="contact">
      <Heading color={'rgb(1, 164, 121)'} fontFamily={'unito,sans-serif'} fontWeight={'semibold'} fontSize={'33px'} mb={'50px'} textAlign={'center'}>Contact Me</Heading>
      <Box w={'82%'} margin={'auto'} display={{base: "", sm: "", md: "", lg: "flex", xl: "flex", "2xl": "flex"}} justifyContent={'space-between'}>
        <Link id="contact-linkedin" to="https://www.linkedin.com/in/sourabh-patidar-6b0480163/" rel='noreferrer' target='_blank'>
          <Box  mt={{base: "20px", sm: "20px", md: "20px", lg: "5px", xl: "5px", "2xl": "5px"}}>
          <Text mt={'10px'} ml={{base: "46%", sm: "47%", md: "48%", lg: "42%", xl: "42%", "2xl": "42%"}} fontSize={'27px'}><BsLinkedin /></Text>
          <Text mt={'5px'} fontFamily={'unito,sans-serif'} fontWeight={'bold'} fontSize={'22px'}>LinkedIn</Text>
          <Text mt={'15px'} fontFamily={'unito,sans-serif'} fontSize={'14px'}>You can contact me on LinkedIn</Text>
          <Text fontFamily={'unito,sans-serif'} mt={'15px'} color={'rgb(1, 164, 121)'} fontSize={'16px'}>sourabh-patidar</Text>
        </Box></Link>
        <Link id="contact-github" to="https://github.com/sourabh7909" rel='noreferrer' target='_blank'>
          <Box mt={{base: "20px", sm: "20px", md: "20px", lg: "0", xl: "0", "2xl": "0"}}>
          <Text mt={'10px'} ml={{base: "46%", sm: "47%", md: "48%", lg: "42%", xl: "42%", "2xl": "42%"}} fontSize={'30px'}><BsGithub /></Text>
          <Text mt={'5px'} fontFamily={'unito,sans-serif'} fontWeight={'bold'} fontSize={'22px'}>Github</Text>
          <Text mt={'15px'} fontFamily={'unito,sans-serif'} fontSize={'14px'}>You can connect with me on Github</Text>
          <Text fontFamily={'unito,sans-serif'} mt={'15px'} color={'rgb(1, 164, 121)'} fontSize={'16px'}>sourabh-patidar</Text>
        </Box></Link>
        <Link id='contact-phone' to="tel:+917909378587" rel='noreferrer' target='_blank'>
          <Box mt={{base: "20px", sm: "20px", md: "20px", lg: "0", xl: "0", "2xl": "0"}}>
          <Text fontSize={'27px'}><PhoneIcon /></Text>
          <Text mt={'5px'} fontFamily={'unito,sans-serif'} fontWeight={'bold'} fontSize={'22px'}>Phone</Text>
          <Text mt={'15px'} fontFamily={'unito,sans-serif'} fontSize={'14px'}>Here is My Phone Number</Text>
          <Text fontFamily={'unito,sans-serif'} mt={'15px'} color={'rgb(1, 164, 121)'} fontSize={'16px'}>+917909378587</Text>
        </Box></Link>
        <Link id="contact-email" to="mailto:patidarsourabh574@gmail.com" rel='noreferrer' target='_blank'>
          <Box mt={{base: "20px", sm: "20px", md: "20px", lg: "0", xl: "0", "2xl": "0"}}>
          <Text fontSize={'32px'}><EmailIcon /></Text>
          <Text fontFamily={'unito,sans-serif'} fontWeight={'bold'} fontSize={'22px'}>Email</Text>
          <Text mt={'15px'} fontFamily={'unito,sans-serif'} fontSize={'14px'}>You can Simply mail me just by clicking on my email</Text>
          <Text fontFamily={'unito,sans-serif'} mt={'15px'} color={'rgb(1, 164, 121)'} fontSize={'16px'}>patidarsourabh574@gmail.com</Text>
        </Box></Link>
        <Link to="https://www.google.com/maps/place/23%C2%B029'23.6%22N+75%C2%B027'43.1%22E/@23.4898918,75.4597759,17z/data=!3m1!4b1!4m4!3m3!8m2!3d23.4898918!4d75.4619646?hl=en&entry=ttu" rel='noreferrer' target='_blank'>
          <Box mt={{base: "20px", sm: "20px", md: "20px", lg: "5px", xl: "5px", "2xl": "5px"}}>
          <Text mt={'10px'}  ml={{base: "46%", sm: "47%", md: "48%", lg: "40%", xl: "40%", "2xl": "40%"}} fontSize={'27px'}><BsGeoAltFill /></Text>
          <Text mt={'5px'} fontFamily={'unito,sans-serif'} fontWeight={'bold'} fontSize={'22px'}>Location</Text>
          <Text mt={'15px'} fontFamily={'unito,sans-serif'} fontSize={'14px'}>Ujjain Madhaya Pradesh</Text>
          <Text fontFamily={'unito,sans-serif'} mt={'15px'} color={'rgb(1, 164, 121)'} fontSize={'16px'}>View on Google map</Text>
        </Box></Link>
      </Box>

      {/* for input */}
      <Box w="82%" margin={'50px auto'}  display={{base: "", sm: "", md: "", lg: "flex", xl: "flex", "2xl": "flex"}}  justifyContent={'space-between'}>
        <Box margin="auto" w={{base: "100%", sm: "80%", md: "80%", lg: "49%", xl: "49%", "2xl": "49%"}}  alignItems={'center'}>
          <Input backgroundColor={'nblone'} placeholder='Name' fontSize={'15px'} _placeholder={{ opacity: 1, color: 'gray.500' }} _hover={'none'} borderRadius={'10px'} focusBorderColor='black' h={'40px'} border="1px solid silver"></Input>
          <Input fontSize={'15px'} _placeholder={{ opacity: 1, color: 'gray.500' }} backgroundColor={'nblone'} placeholder='Email' _hover={'none'} borderRadius={'10px'} focusBorderColor='black' h={'40px'} mt={'30px'} border="1px solid silver"></Input>
          <Input mb={isWidth?"30px":'0px'} fontSize={'15px'} _placeholder={{ opacity: 1, color: 'gray.500' }} placeholder='Subject' _hover={'none'} borderRadius={'10px'} focusBorderColor='black' h={'40px'} mt={'30px'} border="1px solid silver"></Input>
        </Box>
        <Box  mt={{base: "30px", sm: "30px", md: "30px", lg: "0", xl: "0", "2xl": "0"}} margin="0px auto" w={{base: "100%", sm: "80%", md: "80%", lg: "49%", xl: "49%", "2xl": "49%"}}>
          <Textarea fontSize={'15px'} placeholder='Your Message' _placeholder={{ opacity: 1, color: 'gray.500' }} _hover={'none'} focusBorderColor='black' borderRadius={'10px'} border="1px solid silver" h={'100px'} w={'100%'}></Textarea>
        </Box>
      </Box>
      <Box  w={'82%'} margin={'auto'} textAlign={{base: "center", sm: "center", md: "center", lg: "right", xl: "right", "2xl": "right"}}>
        <Button _hover={'none'} fontSize={'15px'} borderRadius={'10px'} color={'white'} p={{base: "19px 20px", sm: "19px 30px", md: "19px 30px", lg: "19px 30px", xl: "19px 30px", "2xl": "19px 30px"}}  bgColor={'rgb(1, 164, 121)'}>Send Message</Button>
      </Box>
      <Box  w={isWidths?"230px":"100%"} textAlign={'center'} color={'white'} bg={'black'}>
        <Box w={{base: "50%", sm: "30%", md: "30%", lg: "20%", xl: "20%", "2xl": "20%"}} display={'flex'} margin={'auto'} mt={'25px'} h={'70px'} color={'white'} bg={'black'}>
          <Text margin={'auto'} fontSize={{base: "10px", sm: "13px", md: "13px", lg: "15px", xl: "15px", "2xl": "15px"}} textAlign={'center'}>© 2023 Sourabh. Design by Me with</Text>
          <Image mt={'25px'} h={'30%'} src="http://clipartmag.com/images/red-heart-clipart-high-resolution-32.png"></Image>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact