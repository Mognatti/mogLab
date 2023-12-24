import { useLocation } from "react-router-dom";
import * as S from "./styles";

export default function Footer() {
  const path = useLocation();
  return (
    <S.FooterContainer path={path.pathname}>
      <S.Content>
        <p>Criado e desenvolvido por Caio Mognatti</p>
        <p>Mande sua sugestão de conteúdo</p>
      </S.Content>
    </S.FooterContainer>
  );
}
