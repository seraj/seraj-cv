import { works } from "data/resume";
import { format } from "date-fns";
import { StyledCompany } from "./Main.styled";
import Title from "./Title";

const Experiences = () => {
  return (
    <>
      <Title title="Experience" />
      {works.map((work) => (
        <StyledCompany data-company={work.company} key={work.company}>
          <div className="company-head">
            <a href={work.link} target="_blank" rel="noreferrer">
              <h3>{work.company}</h3>
            </a>
            <div className="divider" />
            <span className="company-job-title">{work.title}</span>
            <div className="divider" />
            <div className="company-date">
              {format(new Date(work.time_start), "MMMM yyyy")}
              {work.time_end
                ? ` - ${format(new Date(work.time_end), "MMMM yyyy")}`
                : " - Present"}
            </div>
            <div className="divider" />
            <div className="company-location">{work.location}</div>
          </div>
          <ul>
            {work?.description?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {/* <Divider /> */}
        </StyledCompany>
      ))}
    </>
  );
};

export default Experiences;
