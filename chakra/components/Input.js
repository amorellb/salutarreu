const Input = {
  baseStyle: {
    field: {
      width: '100%',
      border: '1px',
      borderColor: 'gray.100',
      borderRadius: '10px',
      p: '7px',
      fontSize: 'sm',
      bgColor: 'white',
      _focus: {
        borderColor: 'brand.300',
        boxShadow: 'md',
      },
      _hover: {borderColor: 'brand.600'}
    }
  },
  variants: {},
  defaultProps: {
    size: null,
    variant: 'baseStyle'
  }
}
export default Input
