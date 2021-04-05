import React, { useState } from 'react'
import Router from 'next/router'
import { Box, Button, Form, FormField, Heading, Text, TextInput } from 'grommet'

import Layout from '../components/Layout'

import { registerBusiness } from '../services/apiClient'


const defaultValue = {
    'businessName': '',
    'description': '',
    'address': '',
    'email': '',
    'password': '',
    'cpassword': ''
}

export default function Page() {
    const [value, setValue] = useState(defaultValue)
    return (
        <Layout>
            <Box width='large' margin="small">
                <Heading level={3}>Register your business</Heading>
                <Form value={value} onChange={(nextValue, { touched }) => {
                    console.log('Change ', nextValue, touched)
                    setValue(nextValue)
                }}
                    onReset={() => setValue(defaultValue)}
                    onSubmit={event => {
                        console.log('Submit ', event.value, event.touched)

                        registerBusiness(event.value.businessName, event.value.description, event.value.address,
                            event.value.email, event.value.password).then(r => {
                                console.log('Got response: ', r)
                                if(r.contactEmail === event.value.email) {
                                    // succeeded proceed
                                    Router.push('/businessHome')
                                }
                            })
                    }}>
                    <Box background='light-1' pad='medium'>

                        <FormField name='businessName' label='Business Name' required>
                            <TextInput name='businessName' placeholder='Kevler Electronics' />
                        </FormField>
                        <FormField name='description' label='Description'>
                            <TextInput name='description' placeholder='Electronics sales and distribution' />
                        </FormField>

                        <FormField name='address' label='Address' required>
                            <TextInput name='address' placeholder='15 Crystal Drive, MS' />
                        </FormField>

                    </Box>

                    <Box background='light-1' pad='medium'>

                        <Text weight="bold">Account Information</Text>
                        <FormField name='email' label="Email" required>
                            <TextInput name='email' placeholder='info@kevler.co' />
                        </FormField>

                        <FormField name='password' label='Password' required>
                            <TextInput name='password' type="password" />
                        </FormField>

                        <FormField name='cpassword' label='Confirm Password' required>
                            <TextInput name='cpassword' type="password" />
                        </FormField>
                    </Box>

                    <Button margin='small' label='Register' type="submit" />
                </Form>
            </Box>
        </Layout>
    )
}