import { skills } from "data/resume";

import { StyledDataProvider, StyledItems, StyledSkills } from "./Main.styled";

const Skills = () => {
  return (
    <StyledSkills>
      <Items title="Proficient Languages & Frameworks" data={skills.main} />

      <Items
        title="Knowledgeable Languages & Frameworks"
        data={skills.others}
      />
      {/* <Items title="Bilingual" data={skills.language} /> */}
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
