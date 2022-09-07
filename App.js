import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import AppNavRootRender from './Navigation/AppNav';

export default function App() {
  return (
    <TailwindProvider>
      <AppNavRootRender />
    </TailwindProvider>
  );
}