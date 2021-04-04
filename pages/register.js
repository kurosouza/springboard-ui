import { Box, Button, Form, FormField, Heading, Text, TextInput } from 'grommet'

import Layout from '../components/Layout'

export default function Page() {

    return (
        <Layout>
            <Box width='large' margin="small">
                <Heading level={3}>Register your business</Heading>
                <Form>
                    <Box background='light-1' pad='medium'>

                        <FormField label='Business Name'>
                            <TextInput placeholder='Kevler Electronics' />
                        </FormField>
                        <FormField label='Description'>
                            <TextInput placeholder='Electronics sales and distribution' />
                        </FormField>

                        <FormField label='Address'>
                            <TextInput placeholder='15 Crystal Drive, MS' />
                        </FormField>

                    </Box>

                    <Box background='light-1' pad='medium'>

                        <Text weight="bold">Account Information</Text>
                        <FormField label="Email">
                            <TextInput placeholder='info@kevler.co' />
                        </FormField>

                        <FormField label='Password'>
                            <TextInput type="password" />
                        </FormField>

                        <FormField label='Confirm Password'>
                            <TextInput type="password" />
                        </FormField>
                    </Box>

                    <Button margin='small' label='Register' type="submit" />
                </Form>
            </Box>
        </Layout>
    )
}