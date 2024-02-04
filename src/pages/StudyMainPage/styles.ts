import { keyframes, styled } from "styled-components";
import { SiBookstack } from "react-icons/si";
import { FaCog } from "react-icons/fa";

const rotateCogFoward = keyframes`
to{
  transform: rotate(360deg);
}
`;
const rotateCogBackwards = keyframes`

to{
  transform: rotate(-360deg);
}
`;

export const MainContainer = styled.div`
  margin: 3svh 4svw;
  margin-bottom: 0;
  min-height: 100svh;
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

export const WIPContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CogContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 30svh;
`;

export const Disclaimer = styled.p`
  text-align: justify;
`;

export const CogIcon = styled(FaCog)`
  animation: ${rotateCogFoward} 5s infinite linear;
  color: ${(props) => (props.theme.title == "dark" ? props.theme.colors.white[500] : props.theme.colors.yellow[500])};
`;
export const SecondCogIcon = styled(FaCog)`
  margin-top: 30px;
  margin-left: -4px;
  animation: ${rotateCogBackwards} 5s infinite linear;
  color: ${(props) => (props.theme.title == "dark" ? props.theme.colors.white[500] : props.theme.colors.yellow[500])};
`;
