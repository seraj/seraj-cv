import { skills } from "@data";

import { StyledDataProvider, StyledSkills, StyledItems } from "./Main.styled";
import Title from "./Title";

const Skills = () => {
  return (
    <StyledSkills>
      <Title title="Skills" />
      <Items title="Proficient Languages & Frameworks" data={skills.main} />

      <Items
        title="Knowledgeable Languages & Frameworks"
        data={skills.others}
      />
      <Items title="Tools" data={skills.tools} />
      <Items title="Bilingual" data={skills.language} />
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
