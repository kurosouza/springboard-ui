import { Box, Heading, Text } from 'grommet'
import Link from 'next/link'

import Layout from '../components/Layout'

export default function Page() {
    return (<Layout>
        <Box margin="small">
            <Text margin={{"top":"medium"}}>ORGANIZATION</Text>
            <Text weight="bold">Kevler Electronics Home page</Text>
        </Box>
        <Box margin="small" direction="row" justify="start" align="start">

            <Box>
                <Box size="medium" background="light-2" direction="column" pad="medium">
                    <Text margin={{ "top": "small" }}>Wallet</Text>
                    <Link href="#">Generate Wallet</Link>
                    <Link href="#">View Transactions</Link>

                    <Text margin={{ "top": "small" }}>Loans</Text>
                    <Link href="#">Apply for Loan</Link>
                    <Link href="#">Peer Applications(3)</Link>

                    <Text margin={{ "top": "small" }}>Products</Text>
                    <Link href="#">Manage Products</Link>

                </Box>
            </Box>

            <Box margin={{ "left": "large" }}>
                <Box margin={{ vertical: "medium" }} direction="column">
                    <Text>Balance</Text>
                    <Text weight="bold">500.0 USD</Text>

                    <Box margin={{ "top": "small" }}>
                        <Link href="#">Transaction History</Link>
                    </Box>
                </Box>
            </Box>

        </Box>
    </Layout>)
}