import { profile, contacts } from "@data";
import { StyledHead } from "./Main.styled";

const Head = () => {
  return (
    <StyledHead>
      <div className="profile-name">
        <h1>
          {profile.firstname}
          <span> {profile.lastname}</span>
        </h1>
      </div>

      <div className="profile-bio">{profile.bio}</div>
      <p className="profile-summary">
        {profile.summary.split("\n").map(function (item, idx) {
          return (
            <span key={idx}>
              {item}
              <br />
            </span>
          );
        })}
      </p>
    </StyledHead>
  );
};

export default Head;
