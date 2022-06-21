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
                  <h3>{work.company}</h3>
                  <div className="item-location">{work.location}</div>
                  <div className="item-date">
                    {format(new Date(work.time_start), "MMMM yyyy")}
                    {work.time_end
                      ? ` to ${format(new Date(work.time_end), "MMMM yyyy")}`
                      : " Until now"}
                  </div>
                </div>
                <div className="details">
                  <div className="item-title">{work.title}</div>
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
