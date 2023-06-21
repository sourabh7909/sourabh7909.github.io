import { Box, Button, Heading, Text, Image, Link } from '@chakra-ui/react'
import React from 'react'
import { DownloadIcon, ViewIcon } from '@chakra-ui/icons'
import sinature from "../images/digital sintaure.png"
import Resume from "../images/Sourabh_Patidar_Resume.pdf"
const About = () => {
  return (
    <Box  mb={'40px'} id="about" className='about section'>
    <Box >
      <Box position={'relative'} backgroundColor={'cyan.900'}  marginBottom={{ base: "20px", sm: "0", md: "0", lg: "0", xl: "0", "2xl": "0" }}>
        <Box pt={'20px'} display={{ base: "", sm: "", md: "flex", lg: "flex", xl: "flex", "2xl": "flex" }} justifyContent={'space-between'} m={'auto'} width={{ base: "95%", sm: "90%", md: "80%", lg: "80%", xl: "80%", "2xl": "80%" }} h={'auto'}>
          <Box mt={'20px'} width={{ base: "100%", sm: "100%", md: "60%", lg: "50%", xl: "50%", "2xl": "50%" }}>

            <Box ml={{ base: "30%", sm: "30%", md: "", lg: "", xl: "", "2xl": "" }} display={{ base: "block", sm: "block", md: "none", lg: "none", xl: "none", "2xl": "none" }} width={{ base: "40%", sm: "40%", md: "40%", lg: "38%", xl: "38%", "2xl": "38%" }}>
              <Image h={"55%"} borderRadius={'50%'} src={"https://avatars.githubusercontent.com/u/112754573?v=4"} />
            </Box>

            <Heading color="white" id="user-detail-name" pl={{ base: "25%", sm: "25%", md: "0", lg: "0", xl: "0", "2xl": "0" }} textAlign={'left'} mb={'10px'} fontSize={{ base: "18px", sm: "25px", md: "30px", lg: "30px", xl: "30px", "2xl": "30px" }} fontWeight={'semibold'} fontFamily={'Nunito,sans-serif'} fontStyle={'15px'}>Hi, I'm Sourabh Patidar.</Heading>
            <Text id="user-detail-intro" textAlign={'left'} mb={'20px'} fontFamily={'Nunito,sans-serif'} color={'rgb(132, 146, 166)'} w={'95%'} fontSize={'17px'}>Passionate Full Stack Web Developer with 3 months of experience and certification in backend and frontend in the MERN stack. Seeking to contribute my skills and expertise in the company growth. Ability to work in team environment, emphasizing team goals.</Text>
            <Box h={'auto'} width={{ base: "100%", sm: "100%", md: "100%", lg: "80%", xl: "60%", "2xl": "60%" }} display={{ base: "", sm: "", md: "flex", lg: "flex", xl: "flex", "2xl": "flex" }} justifyContent={'space-between'}>

             {/* <a id="resume-link-2"  href={Resume} download={"Resume"}>  */}
             <Button id="resume-button-2" onClick={()=>window.open('https://drive.google.com/file/d/19KTxx4iOLBOozJerHMoTAHFldPlETYpd/view')} fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px", xl: "15px", "2xl": "auto" }} w={{ base: "auto", sm: "auto", md: "auto", lg: "auto", xl: "auto", "2xl": "auto" }} mr={{ base: "5px", sm: "5px", md: "0", lg: "0", xl: "0", "2xl": "0" }} ml={{ base: "-20px", sm: "-20px", md: "0", lg: "0", xl: "0", "2xl": "0" }} fontFamily={'Nunito,sans-serif'} _hover={'none'} p={'20px 12px'} borderRadius={'10px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'}>Download Resume<DownloadIcon marginLeft={'10px'} mt={{ base: "28px", sm: "28px", md: "4px", lg: "4px", xl: "4px", "2xl": "4px" }} mb={{ base: "30px", sm: "30px", md: "4px", lg: "4px", xl: "4px", "2xl": "4px" }} />
             <a id="resume-link-2"  href={Resume} download={Resume}></a>
             </Button>
             {/* </a> */}

              <br></br>
              <a target='_blank' href={'https://drive.google.com/file/d/19KTxx4iOLBOozJerHMoTAHFldPlETYpd/view'}><Button fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px", xl: "15px", "2xl": "auto" }} w={{ base: "auto", sm: "auto", md: "auto", lg: "auto", xl: "auto", "2xl": "auto" }} mr={{ base: "40px", sm: "5px", md: "", lg: "", xl: "", "2xl": "" }} ml={{ base: "-20px", sm: "-20px", md: "", lg: "", xl: "", "2xl": "" }} mt={{ base: "20px", sm: "20px", md: "0", lg: "0", xl: "0", "2xl": "0" }} marginLeft={'20px'} fontFamily={'Nunito,sans-serif'} _hover={'none'} p={{ base: "20px 25px", sm: "20px 25px", md: "20px 12px", lg: "20px 12px", xl: "20px 12px", "2xl": "20px 12px" }} borderRadius={'10px'} backgroundColor={'rgb(1, 164, 121)'} color={'white'}>View Resume<ViewIcon marginLeft={'10px'} /></Button></a>
            </Box>
          </Box>
          <Box display={{ base: "none", sm: "none", md: "block", lg: "block", xl: "block", "2xl": "block" }} width={{ base: "40%", sm: "40%", md: "40%", lg: "38%", xl: "38%", "2xl": "38%" }}>
            <Image className='home-img' h={"55%"} borderRadius={'50%'} src={"https://avatars.githubusercontent.com/u/112754573?v=4"} />
          </Box>
        </Box>
      </Box>
      {/* persnal section */}
      <Box position={'relative'} marginTop={{ base: "30px", sm: "30px", md: "50px", lg: "0", xl: "-50px", "2xl": "-50" }} borderRadius={'10px'} backgroundColor={'white'} top={{ base: "", sm: "", md: "90%", lg: "90%", xl: "90%", "2xl": "90%" }}  left={'0'} right={'0'} marginLeft={'auto'} marginRight={'auto'} margin={'auto'} boxShadow={' rgba(0, 0, 0, 0.35) 0px 5px 15px;'} w={'82%'} h={{ base: "auto", sm: "auto", md: "270px", lg: "270px", xl: "230px", "2xl": "230px" }} display={{ base: "", sm: "", md: "flex", lg: "flex", xl: "flex", "2xl": "flex" }} >
        <Box textAlign={'left'} w={{ base: "100%", sm: "100%", md: "35%", lg: "35%", xl: "35%", "2xl": "35%" }} >
          <Box m={'15px 20px'} p={'10px'} pt={'30px'} backgroundColor={'rgb(238, 240, 242)'} h={'auto'} mt={{ base: "20px", sm: "20px", md: "30px0", lg: "30px", xl: "30px", "2xl": "30px" }} borderRadius={'10px'}>
            <Heading fontSize={'1.17em'} fontFamily={'Nunito,sans-serif'}>Personal Details</Heading>
            <pre style={{ border: "1px solid rgb(235, 225, 225)", marginTop: "15px", marginBottom: '10px' }}></pre>
            {/* <hr color='rgb(212, 218, 225)'></hr> */}
            <Text lineHeight={'30px'} color={'black'} fontFamily={'Nunito,sans-serif'} fontWeight={'bold'} fontSize={'13px'} display={'inline'}>Email:</Text>
            <Text fontFamily={'Nunito,sans-serif'} color={'rgb(112, 112, 112)'} fontSize={'14px'} fontWeight={'semibold'} display={'inline'}> patidarsourabh574@gmail.com</Text>
            <br ></br>
            <Text lineHeight={'30px'} color={'black'} fontFamily={'Nunito,sans-serif'} fontWeight={'bold'} fontSize={'13px'} display={'inline'}>Language:</Text>
            <Text fontFamily={'Nunito,sans-serif'} color={'rgb(112, 112, 112)'} fontSize={'14px'} fontWeight={'semibold'} display={'inline'}> English</Text>
            <br></br>
            <Text color={'black'} fontFamily={'Nunito,sans-serif'} fontWeight={'bold'} fontSize={'13px'} display={'inline'}>Nationality:</Text>
            <Text fontFamily={'Nunito,sans-serif'} color={'rgb(112, 112, 112)'} fontSize={'14px'} fontWeight={'semibold'} display={'inline'}> Indian</Text>
          </Box>
        </Box>
        <Box w={{ base: "95%", sm: "95%", md: "65%", lg: "65%", xl: "65%", "2xl": "65%" }} mt={'30px'} ml={{ base: "20px", sm: "20px", md: "0", lg: "0", xl: "0", "2xl": "0" }}>
          <Box textAlign={'left'}>
            <Heading fontFamily={'Nunito,sans-serif'} fontWeight={'semibold'} fontSize={'20px'} display={'initial'}>I am</Heading> <Heading
              fontFamily={'Nunito,sans-serif'} color={'rgb(1, 164, 121)'} display={'inline'} fontSize={'20px'} fontWeight={'semibold'} >Full Stack Web Developer</Heading>
          </Box>
          <Text w={'95%'} fontSize={'16px'} fontFamily={'Nunito,sans-serif'} textAlign={'left'}>My name is Sourabh Patidar, I am from Ujjain, Madhya Pradesh. Passionate Full Stack Web Developer with skills in the MERN stack, I have learned Full Stack Web Development in Masai school. Skilled in problem - solving and execution of software tasks from start to finish. I look forward to joining a company where I can contribute to individual and company growth..</Text>
          <Image alignSelf={'left'} w={'25%'} overflow={'hidden'} src={sinature}></Image>
        </Box>
      </Box>
    </Box>
    </Box>
  )
}

export default About