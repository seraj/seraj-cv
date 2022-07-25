import { useMantineColorScheme, Divider } from "@mantine/core";
import { StyledContainer, StyledCard } from "./Main.styled";
import Head from "./Head";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Educations from "./Educations";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Main = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <StyledCard colorScheme={colorScheme}>
      <StyledContainer>
        <Head />
        <Educations />
        <Experiences />
        <Skills />
        {/* <Portfolio /> */}
        {/* <Contact /> */}
      </StyledContainer>
    </StyledCard>
  );
};

export default Main;
