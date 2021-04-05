
import { Box, Footer, Heading, Text } from 'grommet'
import Link from 'next/link'
import Image from 'next/image'


const Layout = props => {
    return (
        <Box direction='column' margin={{ 'horizontal': 'xlarge' }}>

            <Box direction='row' justify='between' fill>
                <Box margin='small'>
                    <Text weight='bold' size='large'>springboard</Text>
                </Box>
                <Box direction='row' margin='small' justify='end'>
                    <Box pad={{ 'horizontal': 'small' }}><Link href='/home'>home</Link></Box>
                    <Box pad={{ 'horizontal': 'small' }}><Link href='/login'>sign in</Link></Box>
                    <Box pad={{ 'horizontal': 'small' }}><Link href='/stores'>stores</Link></Box>
                </Box>
            </Box>

            { props.children}

            <Footer justify="center"><Text justify="center">by Kuro Souza</Text></Footer>
        </Box>
    )
}

export default Layout;