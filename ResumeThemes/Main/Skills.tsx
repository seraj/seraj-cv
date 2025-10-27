import { skills } from "data/resume";

import { StyledDataProvider, StyledItems, StyledSkills } from "./Main.styled";

const Skills = () => {
  return (
    <StyledSkills>
      <Items title="Frontend Frameworks & Libraries" data={skills.main} />
      <Items title="Testing & Quality Assurance" data={skills.testing} />
      <Items title="Styling & UI Libraries" data={skills.styling} />
      <Items title="Development Tools" data={skills.tools} />
      <Items title="Backend & Database" data={skills.backend} />
      <Items title="Languages" data={skills.language} />
    </StyledSkills>
  );
};

const Items = ({ data, title }: { data: string[]; title: string }) => {
  return (
    <StyledDataProvider direction="row">
      <h3>{title}: </h3>
      <StyledItems direction="row" gap="7px">
        {data.map((item: string) => (
          <h3 key={item}>{item}</h3>
        ))}
      </StyledItems>
    </StyledDataProvider>
  );
};
export default Skills;
