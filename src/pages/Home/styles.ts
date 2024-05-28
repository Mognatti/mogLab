import { styled } from "styled-components";

export const MainContainer = styled.div`
  margin-top: 8svh;
  margin-left: 4svw;
  margin-right: 4svw;
  height: 92svh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  flex-wrap: wrap;
  @media (max-width: 1030px) {
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 450px) {
    height: 70vh;
  }
`;

export const HomeTitle = styled.h1`
  font-weight: 300;
  font-size: 3em;
`;

export const HomeSubtitle = styled.p`
  font-size: 1.5em;
`;

export const HomeImage = styled.img`
  width: 35vw;
  @media (max-width: 1030px) {
    width: 60vw;
  }
  @media (max-width: 500px) {
    width: 70vw;
  }
  @media (max-width: 431px) {
    width: 80%;
  }
`;

export const Container = styled.div`
  margin-left: 4svw;
  margin-right: 4svw;
  min-height: 90svh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1030px) {
    justify-content: center;
    text-align: center;
    div {
      margin-bottom: -10svh;
    }
  }
`;
export const TextSpace = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  @media (max-width: 1030px) {
    width: 100%;
  }
`;

export const Content = styled.p`
  font-size: 1.5rem;
  text-align: justify;
`;
