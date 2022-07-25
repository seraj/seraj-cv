import { educations } from "@data";
import { format } from "date-fns";
import {
  StyledEducations,
  StyledDataProvider,
  StyledItems,
} from "./Main.styled";
import Title from "./Title";

const Educations = () => {
  return (
    <StyledEducations>
      <Title title="Educations" />
      <StyledDataProvider>
        <StyledItems>
          <ul>
            {educations.map((edu) => (
              <li key={edu.name}>
                <h3>{edu.name}</h3>
                <div className="item-location">{edu.field}</div>
                <div className="item-date">
                  {format(new Date(edu.time_start), "MM/yyyy")} -{" "}
                  {format(new Date(edu.time_end), "MM/yyyy")}
                </div>
              </li>
            ))}
          </ul>
        </StyledItems>
      </StyledDataProvider>
    </StyledEducations>
  );
};

export default Educations;
