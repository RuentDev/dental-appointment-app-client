import { BoxProps, Box, useColorModeValue, Flex, CloseButton, Text } from "@chakra-ui/react"
import SidebarItem from "./SidebarItem"
import { LinkItemProps } from "./types"
import { useRouter } from "next/navigation"
import { useState } from "react"

export interface SidebarContentProps extends BoxProps {
  links: LinkItemProps[]
}

const SidebarContent: React.FC<SidebarContentProps> = ({ links, ...rest }) => {
  const router = useRouter()
  const [linksState, setLinksState] = useState(links)


  const handleSidebarItemClick = (link: LinkItemProps) => {
    setLinksState((prev) => prev.map((item) => ({...item, isActive: item.name === link.name})))
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
        {/* <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} /> */}
      </Flex>
      {linksState && linksState.map((link, index) => (
        <SidebarItem 
          key={`sidebar-item-${index}`} 
          icon={link.icon} 
          isActive={link.isActive}
          onClick={() => handleSidebarItemClick(link)}
        >
          {link.name}
        </SidebarItem>
      ))}
    </Box>
  )
}

export default SidebarContent