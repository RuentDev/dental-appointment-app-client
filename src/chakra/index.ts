import { ThemeConfig, extendTheme, ComponentStyleConfig, defineStyleConfig, background } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const ContainerStyle = {
  // style object for base or default style
  baseStyle: {
    borderWidth: 1,
    padding: 1,
    margin: 0
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: '',
    variant: '',
    colorScheme: '',
  },
}

const TextStyle = {
  baseStyle: {
    color: "#024B6C",
    fontSize: 16,
  },
  sizes: {},
  variants: {},
  defaultProps: {
    size: '',
    variant: '',
    colorScheme: '',
  },
}

const ButtonStyle = {
  // style object for base or default style
  baseStyle: {
    padding: 2,
    minWidth: "150px",
    maxWidth: "150px",
    borderRadius: 0,
    backgroundColor: "#E9490A",
    color: "#ffffff",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: '',
    variant: 'solid',
    colorScheme: '',
  },
}

const IconButtonStyle = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: '',
    variant: 'outline',
    colorScheme: '',
  },
}

const breakpoints = {
  base: '0px',
  sm: '640px',
  md: '768px',
  lg: '1200px',
  xl: '1280px',
  '2xl': '1920px',
}

const theme = extendTheme({ config },{
  components: {
    Container: ContainerStyle,
    IconButton: IconButtonStyle,
    Button: ButtonStyle,
    Text: TextStyle,
  },
  fonts: {
    heading: 'var(--font-rubik)',
    body: 'var(--font-rubik)',
  },
  breakpoints,
  colors: {
    brand: {
      100: "#2C3E61",
    },
  },
  styles: {
    global: () => {
     
    }
  },
})

export default theme;