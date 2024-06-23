'use client'
import React from 'react'
import {
  Box,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  FiHome,
  FiCompass,
  FiStar,
  FiSettings,
  FiCalendar,
  FiUser,
  FiUsers,
  FiBell
} from 'react-icons/fi'
import { LinkItemProps } from './types'
import SidebarContent from './SidebarContent'

const linkItems: Array<LinkItemProps> = [
  { 
    icon: FiHome,
    name: 'Dasboard', 
    link: "/dashboard"
  },
  { 
    icon: FiCalendar,
    name: 'Appointment', 
    link: "/dashboard/appointments"
  },
  { 
    icon: FiUser,
    name: 'Profile', 
    link: "/dashboard/profile"
  },
  { 
    icon: FiUsers,
    name: 'Patients', 
    link: "/dashboard/patients"
  },
  { 
    icon: FiBell,
    name: 'Notifications', 
    link: "/dashboard/notifications"
  },
]

interface SidebarProps{}

const Sidebar:React.FC<SidebarProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // bg={useColorModeValue('gray.100', 'gray.900')}
  return (
    <Box h="full" >
      <SidebarContent 
        onClose={() => onClose}
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
