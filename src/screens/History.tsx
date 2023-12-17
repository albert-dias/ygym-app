import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, SectionList, Text, VStack } from "native-base";
import { useState } from "react";

export function History(){
  const [exercises, setExercises] = useState([
    {
      title: "10/12/2023",
      data:[
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
      ]
    },
    {
      title: "11/12/2023",
      data:[
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
      ]
    },
    {
      title: "13/12/2023",
      data:[
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
      ]
    },
    {
      title: "14/12/2023",
      data:[
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
        {
          title: 'Costas',
          name: 'Puxada frontal'
        },
      ]
    },
  ])

  return(
    <VStack flex={1}>
      <ScreenHeader title='Histórico de Exercícios'/>

      <SectionList
        sections={exercises} 
        keyExtractor={item => item.name}
        renderItem={({item})=> (
          <HistoryCard />
        )}
        renderSectionHeader={({section}) => (
          <Heading color='gray.200' fontSize='md' mt={10} mb={3}>{section.title}</Heading>
        )}
        px={8}
        contentContainerStyle={exercises.length === 0 && {flex: 1, justifyContent: 'center'}}
        ListEmptyComponent={() => (
          <Text color='gray.100' textAlign='center'>
            Não há exercícios registrados ainda.{'\n'}
            Vamos nos exercitar hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
      
      
    </VStack>
  )
}