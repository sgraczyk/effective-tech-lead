import { Flex, FlexProps } from '@chakra-ui/core'

type IProps = FlexProps

export function Container({ children, ...restProps }: IProps): JSX.Element {
  return (
    <Flex
      {...restProps}
      minHeight="100vh"
      padding="0 0.5rem"
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      {children}
    </Flex>
  )
}
