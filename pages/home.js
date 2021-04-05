import { Box, Button, Heading, Text } from 'grommet'
import Link from 'next/link'
import Image from 'next/image'


export default function Home(props) {
    // const { store } = props

    console.dir(props)
    
    return (
        <Box direction='column' margin={{ 'horizontal': 'xlarge' }} background={<Image src='/images/pexels-trang-doan-c2.jpg' width={600} height={400} />}>

            <Box direction='row' justify='between'>
                <Box margin='small'>
                    <Text weight='bold' size='large'>springboard</Text>
                </Box>
                <Box direction='row' margin='small' justify='end'>
                    <Box pad={{ 'horizontal': 'small' }}><Link href='/login'>sign in</Link></Box>
                    <Box pad={{ 'horizontal': 'small' }}><Link href='/stores'>stores</Link></Box>
                </Box>
            </Box>

            <Box direction='row'>
                <Box flex="grow" background='neutral-3' width='medium' pad='large'>
                    <Heading level={2} margin={{ vertical:'xsmall'}}>springboard</Heading>
                    <Heading level={4} margin={{ vertical:'xsmall'}}>we help your business succeed</Heading>
                    <Link margin={{'vertical':'large'}} href="/register">Register your business now</Link>
                </Box>

                <Box>
                    <Image src="/images/pexels-trang-doan-c2.jpg" width={600} height={400} />
                </Box>
            </Box>

            <Box direction='row' flex="grow" justify='start' margin={{'vertical':'medium'}}>
                <Box background="light-6" pad='large'>
                    <Text>Recieve Payments</Text>
                </Box>
                <Box background="light-2" pad='large'>
                    <Text>Get Loans</Text>
                </Box>

                <Box background="accent-4" pad='large'>
                    <Link href="#">Verify a business</Link>
                </Box>
            </Box>

            <Box size='small'>
                <Button label='test store' />
            </Box>
        </Box>
    );
}