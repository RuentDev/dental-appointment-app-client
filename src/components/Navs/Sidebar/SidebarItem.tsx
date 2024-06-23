import { Box, Flex, FlexProps, Icon } from "@chakra-ui/react"
import { IconType } from "react-icons"

export interface SidebarItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
  onClick: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
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
