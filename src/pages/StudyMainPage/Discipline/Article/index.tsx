import styled from "styled-components";
import NotFound from "../../../NotFound";
import capitalizeWords from "../../../../functions/capitalizeWords";
import { ArticleProps } from "../../../../types/globalTypes";

const Container = styled.div`
  margin: 3svh 1svw;
`;
const Title = styled.h3`
  text-align: center;
`;
const ArticleContent = styled.div`
  text-align: justify;
  margin: 4svh 2svw;
  padding-bottom: 2svh;
`;
const AuthorParagraph = styled.p`
  text-align: end;
  margin-right: 2svw;
  padding-bottom: 2svh;
`;

interface ArticleComponentProps {
  selectedArticle: ArticleProps | undefined;
}

export default function Article({ selectedArticle }: ArticleComponentProps) {
  if (!selectedArticle) {
    return <NotFound />;
  }

  return (
    <Container>
      <article id="article">
        <Title>{capitalizeWords(selectedArticle.title)}</Title>
        <ArticleContent dangerouslySetInnerHTML={{ __html: selectedArticle.content }}></ArticleContent>
        <AuthorParagraph>{`Autor - ${selectedArticle.author}`}</AuthorParagraph>
      </article>
    </Container>
  );
}
