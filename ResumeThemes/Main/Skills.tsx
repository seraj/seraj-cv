import { skills } from "@data";
import { StyledDataProvider, StyledSkills, StyledItems } from "./Main.styled";
import Title from "./Title";

const Skills = () => {
  return (
    <StyledSkills>
      <div>
        <Title title="Skills" />
        <StyledDataProvider>
          <StyledItems direction="row">
            {skills.other.map((skill) => (
              <h3 key={skill.title}>{skill.title}</h3>
            ))}
          </StyledItems>
        </StyledDataProvider>
      </div>

      <div>
        <Title title="Language" />
        <StyledDataProvider>
          <StyledItems direction="row">
            {skills.language.map((lang) => (
              <h3 key={lang.title}>{lang.title}</h3>
            ))}
          </StyledItems>
        </StyledDataProvider>
      </div>
    </StyledSkills>
  );
};

export default Skills;
