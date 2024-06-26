import { Box, Flex, FlexProps, Icon } from "@chakra-ui/react"
import { IconType } from "react-icons"

export interface SidebarItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
  onClick: () => void
  isActive: boolean,
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, isActive, children, ...rest }) => {
  return (
    <Box
      as="a"
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isActive ? '#18AFD3' : ''}
        color={isActive ? 'white' : ''}
        _hover={{
          bg: '#18AFD3',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

export default SidebarItem
