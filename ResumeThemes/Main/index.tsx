import { useMantineColorScheme } from "@mantine/core";
import Educations from "./Educations";
import Experiences from "./Experiences";
import Head from "./Head";
import { StyledCard, StyledContainer } from "./Main.styled";
import Skills from "./Skills";

const Main = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <StyledCard colorScheme={colorScheme}>
      <StyledContainer>
        <Head />
        <Experiences />
        <Skills />
        <Educations />
        {/* <Portfolio /> */}
        {/* <Contact /> */}
      </StyledContainer>
    </StyledCard>
  );
};

export default Main;
