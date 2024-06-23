import React, { FC } from 'react';
import { Box, Flex, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import AppointmentProcessSectionCard from './AppointmentProcessSectionCard';
import AppointmentProcessSectionCardButtonProps from './AppointmentProcessSectionCardButtonProps';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { TbHeartbeat } from 'react-icons/tb';
import { FaUserDoctor } from 'react-icons/fa6';

interface AppointmentProcessSectionProps {}

const Appointments: FC<AppointmentProcessSectionProps> = ({}) => {
  return (
    <Box paddingX={{ base: 8, lg: 16 }} py={16}>
      <Grid templateColumns='repeat(3,1fr)' columnGap={4} rowGap={8}>
        <GridItem colSpan={{ base: 3, lg: 1 }}>
          <Stack spacing={8} textAlign={{ base: 'center', lg: 'left' }}>
            <Text fontSize='32px' color='#024B6C' fontWeight={700}>
              How to get an Appointment from us?
            </Text>
            <Text fontSize='16px' color='#024B6C'>
              Our Online Scheduling lets your patients schedule fully booked
              appointments directly into your practice management system
              anytime, and from anywhere.
            </Text>
            <Flex
              justifyContent={{ base: 'center', lg: 'start' }}
              alignItems={'center'}>
              <AppointmentProcessSectionCardButtonProps
                display={{ base: 'none', lg: 'block' }}
              />
            </Flex>
          </Stack>
        </GridItem>
        <GridItem colSpan={{ base: 3, lg: 2 }}>
          <Grid
            templateColumns='repeat(3,1fr)'
            height={'100%'}
            gap={16}
            justifyItems={{ base: 'center', lg: 'stretch' }}>
            <AppointmentProcessSectionCard
              icon={<FaRegCalendarCheck size={40} color='#18AFD3' />}
              title='Make Appointment'
            />
            <AppointmentProcessSectionCard
              icon={<FaUserDoctor size={40} color='#18AFD3' />}
              title='Select Expert Doctor'
            />
            <AppointmentProcessSectionCard
              icon={<TbHeartbeat size={40} color='#18AFD3' />}
              title='Confirm Consultation'
            />
          </Grid>
        </GridItem>
        <GridItem colSpan={{ base: 3 }}>
          <Flex justifyContent={'center'} alignItems={'center'}>
            <AppointmentProcessSectionCardButtonProps
              display={{ lg: 'none' }}
            />
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Appointments;