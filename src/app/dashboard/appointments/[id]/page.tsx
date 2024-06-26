import { Container} from '@chakra-ui/react'
import React from 'react'
import Components from '@/components'
export default function Appointment({ params }: { params: { id: string } }) {

  return (
    <Container maxW="full" h="full" border={0} borderRadius={0} display="flex">
      {params.id === "new" ? (
        <Components.Forms.BookingForm showSideImage={!params.id}/>
      ) : (
        <Components.Forms.AppointmentDetailsForm />
      )}
    </Container>
  )
}