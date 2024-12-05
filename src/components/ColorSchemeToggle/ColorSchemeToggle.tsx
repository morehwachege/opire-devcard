import React, { useEffect } from "react";
import { Button, Group, useMantineColorScheme } from "@mantine/core";

export function ColorSchemeToggle() {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const { setColorScheme } = useMantineColorScheme();
  useEffect(() => {
    setColorScheme(isDarkMode ? "dark" : "light")
  }, [])




  return (
    <Group justify="center" mt="xl">
      <Button onClick={() => setColorScheme("light")}>Light</Button>
      <Button onClick={() => setColorScheme("dark")}>Dark</Button>
      <Button onClick={() => setColorScheme("auto")}>Auto</Button>
    </Group>
  );
}
