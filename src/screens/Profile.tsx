import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { useNavigation } from "@react-navigation/native";
import { Center, Heading, ScrollView, Skeleton, Text, VStack } from "native-base";
import { useState } from "react";
import { Platform, TouchableOpacity } from "react-native";

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(true)
  const { goBack } = useNavigation()

  return(
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />
      <ScrollView contentContainerStyle={{ paddingBottom: Platform.OS === 'ios' ? 240 : 36 }}>
        <Center mt={6} px={10}>
         {photoIsLoading ? <Skeleton 
            w={PHOTO_SIZE} 
            h={PHOTO_SIZE} 
            rounded='full'
            startColor='gray.500' 
            endColor='gray.400' 
          /> 
          :
          <UserPhoto 
            size={PHOTO_SIZE} 
            source={{ uri: 'https://github.com/albert-dias.png' }} 
            alt="Imagem do usuario" 
            mr={4}
          />}
          <TouchableOpacity onPress={goBack} >
            <Text 
              color='green.500' 
              fontWeight='bold' 
              fontSize='md' 
              mt={2} 
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
          <Input 
            placeholder="Nome"
            bg="gray.600"
          />
          <Input 
            placeholder="E-mail"
            value="albert.uft@gmail.com"
            bg="gray.600"
            isDisabled
          />

          <Heading color="gray.200" fontSize='md' mb={2} mt={12} alignSelf='flex-start'>Alterar senha</Heading>
          <Input 
            placeholder="Senha antiga"
            bg="gray.600"
            secureTextEntry
          />
          <Input 
            placeholder="Nova senha"
            bg="gray.600"
            secureTextEntry
          />
          <Input 
            placeholder="Confirm a nova senha"
            bg="gray.600"
            secureTextEntry
          />
          <Button title="Atualizar" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  )
}