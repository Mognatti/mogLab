import * as S from "./styles";

export default function Home() {
  return (
    <>
      <S.MainContainer>
        <div>
          <S.HomeTitle>MogLab</S.HomeTitle>
          <S.HomeSubtitle>A comunidade científica simplificada</S.HomeSubtitle>
        </div>
        <S.HomeImage src="/img/home_books.png" alt="home_image" />
      </S.MainContainer>
      <S.Container>
        <S.TextSpace>
          <S.Content>
            Nossos artigos são produzidos de maneira didátiaca para que você possa receber um conteúdo completo e de
            fácil compreensão
          </S.Content>
        </S.TextSpace>
        <S.HomeImage src="/img/study_pic_2.png" alt="study_group" />
      </S.Container>
    </>
  );
}
