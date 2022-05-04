const Button = {
  baseStyle: {
    bgColor: 'brand.500',
    color: 'white',
    _hover: {
      bgColor: 'brand.600'
    }
  },
  variants: {
    outline: {
      _hover: {
        bgColor: 'none'
      }
    },
    ghost: {
      bg: 'none'
    }
  },

  defaultProps: {
    variant: 'baseStyle'
  }
}
export default Button
