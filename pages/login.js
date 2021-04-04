import { Box, Button, Form, FormField, Heading, TextInput } from 'grommet'
import Layout from '../components/Layout'


export default function Page() {
    return (
        <Layout>
            <Box margin="small" align="center">
                <Heading level={4}>Login to Springboard</Heading>
                <Box size="small" margin="small" pad="small" background="light-1">
                    <Form>
                        <FormField label='Email'>
                            <TextInput placeholder='office@yourcompany.com' />
                        </FormField>
                        <FormField label='Password'>
                            <TextInput type="password" />
                        </FormField>
                        <Button type="submit" label="Login" primary/>
                    </Form>
                </Box>
            </Box>
        </Layout>)
}