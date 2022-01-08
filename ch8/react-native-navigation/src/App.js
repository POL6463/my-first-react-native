import React from "react";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigations/Stack";

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
