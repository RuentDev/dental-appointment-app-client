'use client'
import React from 'react'
import { LinkItemProps } from './types'
import SidebarContent from './SidebarContent'
import { Box, useDisclosure } from '@chakra-ui/react'
import { FiHome, FiCalendar, FiUser, FiUsers, FiBell } from 'react-icons/fi'

const linkItems: Array<LinkItemProps> = [
  { 
    icon: FiHome,
    name: 'Dasboard', 
    link: "/dashboard",
    isActive: false,
  },
  { 
    icon: FiCalendar,
    name: 'Appointment', 
    link: "/dashboard/appointments",
    isActive: false,
  },
  { 
    icon: FiUser,
    name: 'Profile', 
    link: "/dashboard/profile",
    isActive: false,
  },
  { 
    icon: FiUsers,
    name: 'Patients', 
    link: "/dashboard/patients",
    isActive: false,
  },
  { 
    icon: FiBell,
    name: 'Notifications', 
    link: "/dashboard/notifications",
    isActive: false,
  },
]

interface SidebarProps{}

const Sidebar:React.FC<SidebarProps> = ({}) => {
  // const { isOpen, onOpen, onClose } = useDisclosure()

  // bg={useColorModeValue('gray.100', 'gray.900')}
  return (
    <Box h="full" >
      <SidebarContent 
        links={linkItems} 
        display={{ 
          base: 'none', 
          md: 'block'
        }} 
      />
      {/* <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer> */}
      {/* mobilenav */}
      {/* <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4"></Box> */}
    </Box>
  )
}


export default Sidebar
