"use server"
import { cookies } from "next/headers"
import { redirect } from 'next/navigation'

interface Response {
  statusText?: string;
  error?: string | unknown
}

export const loginAction = async (formData: any): Promise<Response> => {
  try {
    const {email, password } = formData

    const loginRes = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({usernameOrEmail: email, password})
    })

    const { error, data, statusText} = await loginRes.json()

    if(error){
      return {
        error: error
      }
    }

    cookies().set("dental-app-login", data)

    return {
      statusText: statusText
    }

  } catch (error) {
    return {
      error: error
    }
  }
}

export const signupAction = async (formData: any): Promise<Response> => {
  try {
    const {name, email, role, phone, password} = formData
    
    const signupRes = await fetch("http://localhost:5000/users/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, role, phone, email, password})
    })

    const {error, statusText} = await signupRes.json()

    if(error){
      console.log(error)
      return {
        error: error
      }
    } 
    
    return {
      statusText: statusText
    }
  } catch (error) {
    return {
      error: error
    }
  }
}