import { MantineProvider, Text } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider
      theme={{
        // Override any other properties from default theme
        fontFamily: 'Open Sans, sans serif',
        spacing: { xs: '15', sm: '20', md: '25', lg: '30', xl: '40' },
      }}
    >
      <Text>Welcome to Mantine!</Text>
    </MantineProvider>
  );
}