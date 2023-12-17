import { HStack, Heading, Text, VStack } from "native-base";

export function HistoryCard(){
  return (
    <HStack 
      w='full' 
      px={5} 
      py={4} 
      mb={3} 
      bg='gray.600' 
      rounded='md' 
      justifyContent='space-between' 
      alignItems='center'
      borderLeftWidth={3}
      borderLeftColor='green.500'
    >
      <VStack mr={5}>
        <Heading color='white' fontSize='md' textTransform='capitalize'>
          Costas
        </Heading>
        <Text color='gray.100' fontSize='lg' numberOfLines={1}>
          Puxada Frontal
        </Text>
      </VStack>
      <Text color='gray.300' fontSize='md'>
        08:56
      </Text>
    </HStack>
  )
}