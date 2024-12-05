import React from "react";
import { Welcome } from "../components/Welcome/Welcome";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";
import DevCard from "../components/DevCard/DevCard";
import { Center } from "@mantine/core";

export default function HomePage() {
  return (
    <>
      <Center style={{ height: "100vh", backgroundColor: "#1a1a1a" }}>
        <DevCard />
      </Center>
    </>
  );
}
