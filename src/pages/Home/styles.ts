import { styled } from "styled-components";

export const MainContainer = styled.div`
  margin-top: 8vh;
  margin-left: 4vw;
  margin-right: 4vw;
  height: 92svh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
`;

export const Container = styled.div`
  margin-left: 4vw;
  margin-right: 4vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HomeTitle = styled.h1`
  font-weight: 300;
  font-size: 3em;
`;

export const HomeSubtitle = styled.p`
  font-size: 1.5em;
`;

export const HomeImage = styled.img`
  width: 500px;
`;

export const TextSpace = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;

export const Content = styled.p`
  font-size: 1.5rem;
  text-align: justify;
`;
