import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, Heading, ScrollView, Skeleton, Text, VStack, useToast } from "native-base";
import { useState } from "react";
import { Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { FileInfo } from  'expo-file-system'

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [userPhoto, setUserPhoto] = useState('https://github.com/albert-dias.png')
  const toast = useToast();

  async function handleUserPhotoSelect(){
    setPhotoIsLoading(true)
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true
      });
  
      if(photoSelected.canceled){
        return
      }

      if(photoSelected.assets[0].uri){
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri) as FileInfo 

        if(photoInfo.size && (photoInfo.size / 1024 /1024 ) > 5){
          return toast.show({ 
            title: "Essa imagem é muito grande, escolha uma imagem até 5mb",
            placement: "top",
            bgColor: 'red.500'
          })
        }

        setUserPhoto(photoSelected.assets[0].uri)  
      }
    } catch (error) {
      console.log(error)
    } finally {
      setPhotoIsLoading(false)
    }
  }

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
            source={{ uri: userPhoto }} 
            alt="Imagem do usuario" 
            mr={4}
          />}
          <TouchableOpacity onPress={handleUserPhotoSelect} >
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