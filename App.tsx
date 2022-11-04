import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text, Center } from 'native-base';

import { THEME } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Center bgColor="gray.900" flex={1}>
        <Text color="white" fontSize={24} fontWeight="bold">Hello World!</Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}

