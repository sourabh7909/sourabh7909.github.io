import { Box, Center, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'

import "./Calendor.css"

const Calendor = (username, viewBox) => {
   
    return (
        <Box className='react-activity-calendar' w="82%"  margin={'auto'} >
            <Text mb={'20px'} textAlign={'center'} fontSize={'30px'} fontFamily={'Nunito,sans-serif'} fontWeight={'bold'}  color={'rgb(1, 164, 121)'}>DAYS I WORKED</Text>
            <Box borderTopLeftRadius={'50px'} borderBottomRightRadius={'50px'} borderTopRightRadius={'5px'} borderBottomLeftRadius={'5px'} border="10px solid rgb(1, 164, 121)" p='20px 0px' >
                <Center className="github-calendar-container">
                    <GitHubCalendar  viewBox="0 0 544 130" username='sourabh7909' />
                </Center>
            </Box>

            <Box w='85%' margin={'auto'}>
                <Text mt={'50px'} mb={'40px'} textAlign={'center'} fontSize={'30px'} fontFamily={'Nunito,sans-serif'} fontWeight={'bold'} color={'rgb(1, 164, 121)'}>MY STATISTICS</Text>
                <Box display={{base: "", sm: "", md: "flex", lg: "flex", xl: "flex", "2xl": "flex"}} width={'100%'}  justifyContent={'space-around'} margin={'auto'}>
                    <Box mt={{base: "20px", sm: "20px", md: "0", lg: "0", xl: "0", "2xl": "0"}}>
                        <Image id="github-stats-card" src="https://camo.githubusercontent.com/a2bc8cd4cc13edb197fdd0b2af7cca7908911a012bf5eff7413f14deb6c792a7/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d736f7572616268373930392673686f775f69636f6e733d74727565266c6f63616c653d656e"></Image>
                    </Box>
                    <Box mt={{base: "20px", sm: "20px", md: "0", lg: "0", xl: "0", "2xl": "0"}}>
                        <Image id="github-top-langs" src="https://camo.githubusercontent.com/c5ffaaf5f54a34d8c427fe54e555032407bc6ae3cf8ff7095cd4deaf0c330ecf/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d736f7572616268373930392673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"></Image>
                    </Box>
                    <Box mt={{base: "20px", sm: "20px", md: "0", lg: "0", xl: "0", "2xl": "0"}}>
                        <Image id="github-streak-stats" src="https://camo.githubusercontent.com/81779448e52dd2033a39c61658a222819b450ad17c17abed330b593b3e2f77d0/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d736f75726162683739303926"></Image>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Calendor