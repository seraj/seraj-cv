import styled from "styled-components";

const columnGap = "20px";
const fontSize = "15px";

type Card = {
  colorScheme: "dark" | "light";
};
export const StyledCard = styled.div<Card>`
  position: relative;
  min-height: 297mm;
  margin: 0 auto;
  padding-bottom: 0.5em;
  background-color: ${({ colorScheme }) =>
    colorScheme === "dark" ? "#141517" : "#fff"};
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.9em;
  font-size: ${fontSize};
  padding: 100px;
  gap: 40px;
  a {
    color: ${(props) => props.theme.colors.primary};
  }
`;

type Item = {
  direction?: "row" | "column";
};

export const StyledItems = styled.div<Item>`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  gap: ${columnGap};
  .item {
    &-location,
    &-date {
      font-size: 0.8rem;
    }
    &-title {
      font-size: 1rem;
      font-weight: 400;
    }
    &-desc {
      color: #768097;
      font-size: 0.88em;
      overflow-wrap: break-word;
      word-break: break-word;
    }
  }
`;

export const StyledExperiences = styled.div`
  ${StyledItems} {
    ul {
      li {
        display: block;
        margin-bottom: 1.5em;
        .title {
          width: 46%;
          display: inline-block;
          vertical-align: top;
        }
        .details {
          width: 46%;
          display: inline-block;
          vertical-align: top;
        }
      }
    }
  }
`;

export const StyledEducations = styled.div`
  ${StyledItems} {
    ul {
      display: flex;
      gap: 50px;
      li {
        margin-bottom: 1.5em;
      }
    }
  }
`;
export const StyledHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${columnGap};
  .profile {
    &-name {
      h1 {
        font-size: 2.5rem;
        font-weight: 800;
        font-style: normal;
        text-transform: uppercase;
        span {
          font-weight: 300;
        }
      }
    }
  }
`;

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${columnGap};
  div {
    margin-bottom: 5px;
    &:last-child {
      margin: 0;
    }
  }
  ul {
    li {
      display: block;
      margin-bottom: 0.5em;
      .title {
        font-weight: bold;
        width: 46%;
        display: inline-block;
        vertical-align: top;
      }
      .details {
        width: 46%;
        display: inline-block;
        vertical-align: top;
      }
    }
  }
`;
export const StyledDataProvider = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${columnGap};
`;

export const StyledPortfolio = styled.div`
  display: flex;
  gap: ${columnGap};
  ${StyledItems} {
    ul {
      li {
        display: inline-block;
        width: 15.66%;
        margin-bottom: 0.5em;
        margin-right: 0.5em;
        span {
          font-size: 0.8rem;
          white-space: pre;
          overflow: hidden;
          width: 100%;
          text-overflow: ellipsis;
          display: block;
          padding: 0.5em 0;
        }
        img {
          /* max-height: 120px; */
          max-width: 100%;
        }
      }
    }
  }
`;

export const StyledSkills = styled.div`
  display: flex;
  gap: ${columnGap};
  > div:first-child {
    width: 65%;
  }
  ${StyledItems} {
    flex-wrap: wrap;
    h3 {
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;

export const StyledTitle = styled.h2`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;
