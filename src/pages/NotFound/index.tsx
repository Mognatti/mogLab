import { useNavigate } from "react-router-dom";
import * as GS from "../../styles/global";
import notFoundImage from "/img/404.svg";
import styled from "styled-components";

const NotfoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vh 4vw;
  justify-content: center;
  align-items: center;
`;

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <NotfoundDiv>
      <img src={notFoundImage} width={650} />
      <p>A página acessada não foi encontrada</p>
      <GS.GlobalButton
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        Voltar
      </GS.GlobalButton>
    </NotfoundDiv>
  );
}
