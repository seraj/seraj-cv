import { works } from "@data";
import { format } from "date-fns";
import {
  StyledExperiences,
  StyledDataProvider,
  StyledItems,
} from "./Main.styled";
import Title from "./Title";

const Experiences = () => {
  return (
    <StyledExperiences>
      <Title title="Work Experience" />
      <StyledDataProvider>
        <StyledItems>
          <ul>
            {works.map((work) => (
              <li key={work.company}>
                <div className="title">
                  <div>
                    <h3>{work.company}</h3>
                    <span className="item-title">{work.title}</span>
                  </div>
                  {/* <div className="item-location">{work.location}</div> */}
                  <div className="item-date">
                    {format(new Date(work.time_start), "MM/yyyy")}
                    {work.time_end
                      ? ` - ${format(new Date(work.time_end), "MM/yyyy")}`
                      : ""}
                  </div>
                </div>
                <div className="item-desc">
                  {work.description.split("\n").map(function (item, idx) {
                    return (
                      <span key={idx}>
                        {item}
                        <br />
                      </span>
                    );
                  })}
                </div>
              </li>
            ))}
          </ul>
        </StyledItems>
      </StyledDataProvider>
    </StyledExperiences>
  );
};

export default Experiences;
