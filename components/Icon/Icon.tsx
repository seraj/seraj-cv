import Github from "./socials/github";
import Linkedin from "./socials/linkedin";
import Twitter from "./socials/twitterx";

type IconType = {
  type: "github" | "linkedin" | "twitter";
  size: number;
};

const Icon = ({ type, size }: IconType) => {
  const icons = {
    github: <Github size={size} />,
    linkedin: <Linkedin size={size} />,
    twitter: <Twitter size={size} />,
  };

  return icons[type];
};

export default Icon;
