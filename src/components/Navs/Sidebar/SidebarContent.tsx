import { BoxProps, Box, useColorModeValue, Flex, CloseButton, Text } from "@chakra-ui/react"
import SidebarItem from "./SidebarItem"
import { LinkItemProps } from "./types"
import { useRouter } from "next/navigation"

export interface SidebarContentProps extends BoxProps {
  onClose: () => void
  links?: LinkItemProps[]
}

const SidebarContent: React.FC<SidebarContentProps> = ({ onClose, links,...rest }) => {
  const router = useRouter()

  const handleSidebarItemClick = (link: LinkItemProps) => {
    router.push(link.link)
  }


  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w="100%"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {links && links.map((link) => (
        <SidebarItem key={link.name} icon={link.icon} onClick={() => handleSidebarItemClick(link)}>
          {link.name}
        </SidebarItem>
      ))}
    </Box>
  )
}

export default SidebarContent