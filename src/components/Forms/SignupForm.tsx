"use client"
import { Flex, FormControl, Input, Button, Text, useToast } from '@chakra-ui/react'
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa'
import { signupAction } from '@/app/actions'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Formik, FormikProps, FormikHelpers, Field } from 'formik'

interface SignupFormProps{
  role: string
}

type Values = {
  name: string;
  role: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const SignupForm:React.FC<SignupFormProps> = ({role}) => {

  const router = useRouter()
  const toast = useToast()

  const handleOnFormSubmit = async (values: Values, _: FormikHelpers<Values>) => {
    const { error, statusText } = await signupAction(values)

    if(typeof error === "string"){
      toast({
        status: "error",
        description: error,
        position: "bottom"
      })

      return
    }

    if(statusText === "OK"){
      toast({
        status: "success",
        title: "Signup successful",
        position: "bottom"
      })
      router.push("/auth/signin")
    }

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
        name: '',
        email: "",
        phone: "",
        role: role, 
        password: "", 
        confirmPassword: "", 
      }}
      onSubmit={handleOnFormSubmit}
    >
      {(props: FormikProps<Values>) => (
        <form onSubmit={props.handleSubmit} autoComplete='new-form'>
          <Flex w={400} flexDirection="column" alignItems="center" justifyContent="center" gap={5}>
            <Input type='text' name='role' value={role} display="none"/>
            <FormControl isInvalid={!!props.errors.name && props.touched.name}>
              <Field
                as={Input}
                name='name'
                type='text'
                placeholder='Your Name'
                autoComplete='new-name'
                validate={handleRequiedFieldValidation}
              />
            </FormControl>
            <FormControl isInvalid={!!props.errors.phone && props.touched.phone}>
              <Field
                as={Input}
                name='phone'
                type='tel'
                placeholder='Your Phone'
                autoComplete='new-phone'
                validate={handleRequiedFieldValidation}
              />
            </FormControl>
            <FormControl isInvalid={!!props.errors.email && props.touched.email}>
              <Field
                as={Input}
                name='email'
                type='email'
                placeholder='Your Email'
                autoComplete='new-email'
                validate={handleRequiedFieldValidation}
              />
            </FormControl>
            <FormControl isInvalid={!!props.errors.password && props.touched.password}>
              <Field 
                as={Input}
                name='password'
                type='password'
                placeholder='Your Password'
                validate={handleRequiedFieldValidation}
              />
            </FormControl>
            <FormControl isInvalid={!!props.errors.confirmPassword && props.touched.confirmPassword}>
              <Field 
                as={Input}
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                autoComplete='new-confirm-pass'
                validate={handleRequiedFieldValidation}
              />
            </FormControl>
            <Button isLoading={props.isSubmitting} type='submit' borderRadius={10} maxW="100%" w="100%">Signup</Button>
            <Button variant="unstyled" onClick={() => router.push("/auth/signin")}>Login</Button>
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

export default SignupForm