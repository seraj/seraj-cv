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
  padding: 30px 40px;
  a {
    /* color: ${(props) => props.theme.colors.primary}; */
  }
`;

type FlexType = {
  direction?: "row" | "column";
  gap?: string;
};

export const Divider = styled.div`
  border-top: 1px solid #eee;
  margin: 10px 0;
`;

export const StyledCompany = styled.div`
  display: flex;
  flex-direction: column;
  .company {
    &-head {
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 0.9em;
      .divider {
        width: 1px;
        height: 15px;
        background-color: #eee;
        margin: 0 10px;
      }
    }
    &-location,
    &-date {
      font-size: 0.9em;
    }
  }
  ul {
    margin-left: 50px;
    li {
      list-style-type: disc;
      font-size: 0.88em;
      font-weight: normal;
    }
  }
`;
export const StyledItems = styled.div<FlexType>`
  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
  gap: ${(props) => props.gap || columnGap};
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
  line-height: 1.9em;
  font-size: ${fontSize};
  flex-direction: column;
  .profile {
    &-head {
      display: flex;
      justify-content: space-between;
      h1 {
        font-size: 2rem;
        font-weight: 800;
        margin: 0;
        font-style: normal;
        text-transform: uppercase;
        span {
          font-weight: 300;
        }
      }
      h2 {
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
        font-style: normal;
        text-transform: uppercase;
      }
      .contact {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    }
    &-summary {
      margin: 0;
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
  h3 {
    font-size: 14px;
    font-weight: 800;
    margin: 0;
  }
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
  margin-top: 5px;
  ${StyledItems} {
    h3 {
      font-weight: 500;
    }
  }
`;

export const StyledTitle = styled.h2`
  margin: 0;
  margin-bottom: ${columnGap};
  font-size: 1.2rem;
  /* color: ${(props) => props.theme.colors.primary}; */
`;
