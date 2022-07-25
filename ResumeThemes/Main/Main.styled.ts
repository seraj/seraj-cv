import styled from "styled-components";

const columnGap = "10px";
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
  padding: 20px 50px;
  gap: ${columnGap};
  a {
    /* color: ${(props) => props.theme.colors.primary}; */
  }
`;

type FlexType = {
  direction?: "row" | "column";
  gap?: string;
};

export const StyledItems = styled.div<FlexType>`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  gap: ${(props) => props.gap || columnGap};
  .item {
    &-title {
      font-size: 1rem;
      font-weight: 400;
    }
    &-desc {
      /* color: #768097; */
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
        margin-bottom: ${columnGap};
        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          h3 {
            display: inline-block;
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

export const StyledEducations = styled.div`
  ${StyledItems} {
    ul {
      display: flex;
      justify-content: space-between;
      li {
        display: flex;
        gap: 4px;
        font-size: 0.9em;
      }
    }
  }
`;
export const StyledHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${columnGap};
  .profile {
    &-head {
      text-align: center;
      h1 {
        font-size: 2rem;
        font-weight: 800;
        font-style: normal;
        text-transform: uppercase;
        span {
          font-weight: 300;
        }
      }
      .contact {
        display: flex;
        gap: 20px;
        justify-content: center;
        span {
          position: relative;

          &:not(:last-child):after {
            position: absolute;
            right: -10px;
            top: 7px;
            content: "";
            background-color: ${({ theme }) => theme.colors.primary};
            width: 1px;
            height: 15px;
          }
        }
      }
    }
    &-bio {
      font-weight: bold;
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
export const StyledDataProvider = styled.div<FlexType>`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
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
  ${StyledItems} {
    flex-wrap: wrap;
    h3 {
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;

export const StyledTitle = styled.h2`
  margin-bottom: ${columnGap};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;
