import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="explore_flexbox" options={{ title: 'Flexbox' }} />
      <Stack.Screen name="fullHeightColumn" options={{ title: 'Full Height Columns' }} />
      <Stack.Screen name="exploreGridLayout" options={{ title: 'Grid Layout' }} />
      <Stack.Screen name="columnInsideRows" options={{ title: 'Columns inside rows' }} />
    </Stack>
  )
}
