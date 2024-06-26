export interface AppointmentDetails{
  startDate: string
  endDate: string
  doctorId: string
  patientId: string
  service: string
  firstName?: string
  lastName?: string
  age?: number
  phone?: string
  email?: string
  description: string
}