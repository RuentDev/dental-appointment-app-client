"use server"
import { cookies } from "next/headers"
import { AppointmentDetails } from '@/utils/types'
interface Response {
  statusText?: string;
  error?: string | unknown
}

export const loginAction = async (formData: any): Promise<Response> => {
  try {
    const {email, password } = formData

    const loginRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/login`, {
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
    
    const signupRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/signup`, {
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

export const createNewAppointment = async (formData: AppointmentDetails) => {
  try {
    const {startDate, endDate, doctorId, patientId, service, age, phone, email, description} = formData
    
    const signupRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointment/new-appointment`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        startDate,
        endDate,
        doctorId,
        patientId,
        service,
        age,
        phone,
        email,
        description
      })
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