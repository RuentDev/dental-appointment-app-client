"use client"
import {FormControl, Input, Text, Button, Flex, IconButton, useToast, FormErrorMessage } from '@chakra-ui/react'
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa6";
import { useRouter } from 'next/navigation'
import React from 'react'
import { loginAction } from '@/app/actions'
import { Field, Formik, FormikHelpers, FormikProps } from 'formik';


type Values = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter()
  const toast = useToast()

  const handleOnFormSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    const { error, statusText } = await loginAction(values)

    if(typeof error === "string"){
      toast({
        status: "error",
        description: error,
        position: "bottom"
      })

      return
    }

    console.log(statusText)

    router.push("/dashboard")
  }

  const handleRequiedFieldValidation = (value: string) => {
    let error;

    if (!value) {
      error = "This field is required";
    }

    return error;
  };


  return (
    <Formik
      initialValues={{ 
        email: "",
        password: "", 
      }}
      onSubmit={handleOnFormSubmit}
    >
      {(props: FormikProps<Values>) => (
        <form onSubmit={props.handleSubmit}>
          <Flex w={400} flexDirection="column" alignItems="center" justifyContent="center" gap={5}>
            <FormControl isInvalid={!!props.errors.email && props.touched.email}>
              <Field
                as={Input} 
                name='email'
                type='email'
                // autoComplete='off'
                placeholder='Your Email'
                validate={handleRequiedFieldValidation}
                />
                <FormErrorMessage>{props.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!props.errors.password && props.touched.password}>
              <Field
                as={Input}
                name='password'
                type='password'
                // autoComplete='off'
                placeholder='Your Password'
                validate={handleRequiedFieldValidation}
              />
              <FormErrorMessage>{props.errors.password}</FormErrorMessage>
            </FormControl>
            <Button borderRadius={10} maxW="100%" w="100%" type='submit' isLoading={props.status}>Login</Button>
            <Button variant="unstyled" onClick={() => router.push("/auth/signup")}>Signup</Button>
            <Text>Or</Text>
            <Flex gap={5}>
              <FaGoogle />
              <FaFacebook />
              <FaTwitter />
            </Flex>
          </Flex>
        </form>
      )}
      </Formik>
  )
}

export default LoginForm