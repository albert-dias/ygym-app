import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base';

import backgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

import { useForm, Controller } from 'react-hook-form';

type FormDataProps ={
  name: string,
  email: string,
  password: string,
  password_confirm: string
}

export function SignUp() {
  const { control, handleSubmit, register, formState:{ errors} } = useForm<FormDataProps>();

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack()
  }

  function handdleSignUp(data: FormDataProps){

  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={backgroundImg}
          defaultSource={backgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="green.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>
        <Center>
          <Heading color="green.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>
          <Controller
            control={control}
            name="name"
            rules={{
              required: 'Informe um nome'
            }}
            render={({field: {onChange, value, ref}}) => (
              <Input 
                placeholder="Nome" 
                onChangeText={onChange}
                value={value}   
                errorMessage={errors.name?.message}
              /> 
            )}
          />


          <Controller
            control={control}
            name="email"
            rules={{
              required: 'informe o email',
              pattern: {
                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido'
              }
            }}
            render={({field: {onChange, value, ref}}) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
                // returnKeyType='next'
              />
            )}
          />
          
          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Digite sua senha',
              minLength: 8
            }}
            render={({field: {onChange, value, ref}}) => (
              <Input 
                placeholder="Senha" 
                secureTextEntry 
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
                // returnKeyType='next'
              />
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            rules={{
              required: 'Confirme sua senha'
            }}
            render={({field: {onChange, value, ref}}) => (
              <Input 
                placeholder="Confirme a senha" 
                secureTextEntry 
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password_confirm?.message}
                ref={(e) => {
                  ref(e);
                  register(e)
                }}
                onSubmitEditing={handleSubmit(handdleSignUp)}
                returnKeyType='send'
              />
            )}
          />

          <Button 
            onPress={handleSubmit(handdleSignUp)}
            title="Criar e acessar" 
          />
        </Center>
        <Center mt={24}>
          <Button title="Voltar para o login" variant="outline" onPress={handleGoBack} />
        </Center>
      </VStack>
    </ScrollView>
  );
}


// .wrapper {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(min(11.25rem, 100%), 1fr));
//   grid-gap: 1rem;
// }