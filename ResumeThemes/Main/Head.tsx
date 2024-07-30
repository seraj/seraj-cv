import Icon from "@components/Icon";
import { contacts, profile } from "data/resume";
import { StyledHead } from "./Main.styled";

const Head = () => {
  return (
    <StyledHead>
      <div className="profile-head">
        <div>
          <h1>
            {profile.firstname}
            <span> {profile.lastname}</span>
          </h1>
          <h2>{profile.bio}</h2>
          <div>
            {profile.links.map((link) => (
              <a
                key={link.type}
                target="_blank"
                href={link.url}
                rel="noreferrer"
              >
                <Icon type={link.type as any} size={30} />
              </a>
            ))}
          </div>
        </div>
        <div className="contact">
          <span>
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          </span>
          <span>
            <a href={`tel:${contacts.tel.number}`}>{contacts.tel.text}</a>
          </span>
        </div>
      </div>

      {/* <div className="profile-bio">{profile.bio}</div> */}
      <div className="profile-summary">{profile.summary}</div>
    </StyledHead>
  );
};

export default Head;
