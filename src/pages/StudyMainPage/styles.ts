import { styled } from "styled-components";
import { SiBookstack } from "react-icons/si";

export const MainContainer = styled.div`
  margin: 3svh 4svw;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin-bottom: 2vh;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  gap: 1svh 0;
  margin: 2svh 4svw;
  @media (max-width: 750px) {
    margin: 0 2svw;
  }
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const DisciplineIcon = styled(SiBookstack)`
  color: ${(props) => (props.theme.title === "dark" ? props.theme.colors.white[500] : props.theme.colors.yellow[500])};
`;

export const Paragraph = styled.p`
  margin-top: 8px;
  font-size: 1.1em;
  text-align: justify;
`;
export const LinkContainer = styled.div`
  display: flex;
  gap: 0 0.5em;
  align-items: center;
`;
