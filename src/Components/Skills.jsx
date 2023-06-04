import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useMediaQuery } from "@chakra-ui/react"

const Skills = () => {
    const [isWidth] = useMediaQuery("(max-width: 306px)") 
    return (
        <Box id="skills" w={'82%'} margin={'auto'}>
    <Heading mt={'50px'} mb={'50px'} textAlign={'center'} fontSize={'30px'} fontFamily={'Nunito,sans-serif'} color={'rgb(1, 164, 121)'}>SKILLS</Heading>
            <Box pl={isWidth ? "22%" :"0"} alignItems={'center'} w={'100%'} height={'auto'} margin={'0px auto'} display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'} gap={'16px'}>
                <Box className='skills-card' borderRadius={'10px'} p={'12px'} height={'145px'} textAlign={'center'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} w={'118px'}>
                    <Image className='skills-card-img' _hover={{ transform: 'scale(1.07)' }} transition={'all 0.3s'} display={'block'} margin={'auto'} w="80%" src="https://mohitkss.github.io/static/media/html5.4e6edfe05f07c383e94f.png"></Image>
                    <Text className='skills-card-name' fontSize={'16px'} mt={'10px'}>HTML</Text>
                </Box>
                <Box className='skills-card' borderRadius={'10px'} p={'12px'} height={'145px'} textAlign={'center'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} w={'118px'}>
                    <Image  className='skills-card-img' _hover={{ transform: 'scale(1.07)' }} transition={'all 0.3s'} display={'block'} margin={'auto'} w="80%" src="https://mohitkss.github.io/static/media/css3.845e8eb63836bef093cf.png"></Image>
                    <Text className='skills-card-name' fontSize={'16px'} mt={'10px'}>CSS</Text>
                </Box>
                <Box className='skills-card' borderRadius={'10px'} p={'12px'} height={'145px'} textAlign={'center'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} w={'118px'}>
                    <Image  className='skills-card-img' _hover={{ transform: 'scale(1.07)' }} transition={'all 0.3s'} display={'block'} margin={'auto'} w="80%" src="https://mohitkss.github.io/static/media/js.3dfb665e058d08c99f28.png"></Image>
                    <Text className='skills-card-name' fontSize={'16px'} mt={'10px'}>javascript</Text>
                </Box>
                <Box className='skills-card' borderRadius={'10px'} p={'12px'} height={'145px'} textAlign={'center'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} w={'118px'}>
                    <Image  className='skills-card-img' _hover={{ transform: 'scale(1.07)' }} transition={'all 0.3s'} display={'block'} margin={'auto'} w="80%" src="https://mohitkss.github.io/static/media/git.b1472a80b81e487179cf.png"></Image>
                    <Text className='skills-card-name' fontSize={'16px'} mt={'10px'}>Git/Github</Text>
                </Box>
                <Box className='skills-card' borderRadius={'10px'} p={'12px'} height={'145px'} textAlign={'center'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} w={'118px'}>
                    <Image  className='skills-card-img' _hover={{ transform: 'scale(1.07)' }} transition={'all 0.3s'} display={'block'} margin={'auto'} w="80%" src="https://mohitkss.github.io/static/media/mongodb.4f7af09e6354d51beec8.png"></Image>
                    <Text className='skills-card-name' fontSize={'16px'} mt={'10px'}>MongoDB</Text>
                </Box>
                <Box className='skills-card' borderRadius={'10px'} p={'12px'} height={'145px'} textAlign={'center'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} w={'118px'}>
                    <Image  className='skills-card-img' _hover={{ transform: 'scale(1.07)' }} transition={'all 0.3s'} display={'block'} margin={'auto'} w="80%" src="https://mohitkss.github.io/static/media/nodejs.b508473ad71a31ce2fae.png"></Image>
                    <Text className='skills-card-name' fontSize={'16px'} mt={'10px'}>NodeJS</Text>
                </Box>
                <Box className='skills-card' borderRadius={'10px'} p={'12px'} height={'145px'} textAlign={'center'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} w={'118px'}>
                    <Image  className='skills-card-img' _hover={{ transform: 'scale(1.07)' }} transition={'all 0.3s'} display={'block'} margin={'auto'} w="80%" src="https://mohitkss.github.io/static/media/react.22d1f2096ed82cab7a8a.png"></Image>
                    <Text className='skills-card-name' fontSize={'16px'} mt={'10px'}>ReactJS</Text>
                </Box>
                <Box className='skills-card' borderRadius={'10px'} p={'12px'} height={'145px'} textAlign={'center'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} w={'118px'}>
                    <Image  className='skills-card-img' _hover={{ transform: 'scale(1.07)' }} transition={'all 0.3s'} display={'block'} margin={'auto'} w="80%" src="https://mohitkss.github.io/static/media/redux.7fec6369cecd1cbd44d6.png"></Image>
                    <Text className='skills-card-name' fontSize={'16px'} mt={'10px'}>Redux</Text>
                </Box>
                <Box className='skills-card' borderRadius={'10px'} p={'12px'} height={'145px'} textAlign={'center'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} w={'118px'}>
                    <Image  className='skills-card-img' _hover={{ transform: 'scale(1.07)' }} transition={'all 0.3s'} display={'block'} margin={'auto'} w="80%" src="https://mohitkss.github.io/static/media/mern.b58d81727b47466a7cda.png"></Image>
                    <Text className='skills-card-name' fontSize={'16px'} mt={'10px'}>MERN</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Skills