import styled from "styled-components";
import NotFound from "../../../NotFound";
import capitalizeWords from "../../../../functions/capitalizeWords";
import { ArticleProps } from "../../../../types/globalTypes";
import useWindowScroll from "../../../../hooks/useWindowScroll";
import { FaArrowUp } from "react-icons/fa";

const Container = styled.div`
  margin: 3svh 1svw;
  min-height: 80svh;
  img {
    max-width: 100%;
    height: fit-content;
  }
`;
const Title = styled.h3`
  text-align: center;
`;
const ArticleContent = styled.div`
  text-align: justify !important;
  margin: 4svh 2svw;
  padding-bottom: 2svh;
  ul {
    display: flex;
    flex-direction: column;
    gap: 1em 0;
    li {
      text-align: justify !important;
      padding-left: 1.5em;
    }
  }
  img {
    padding: 0.4em 0;
  }
`;
const AuthorParagraph = styled.p`
  text-align: end;
  margin-right: 2svw;
  padding-bottom: 2svh;
`;

const ArrowUpDiv = styled.div`
  background-color: ${(props) => props.theme.colors.yellow[500]};
  position: fixed;
  right: 2svw;
  bottom: 5svh;
  cursor: pointer;
  border-radius: 50%;
  padding: 8px;
  transition: 350ms;

  &:hover {
    transform: scale(1.1);
  }
  * {
    cursor: pointer;
  }
`;
const ArrowUp = styled(FaArrowUp)`
  color: ${(props) => props.theme.colors.blue[400]};
`;

interface ArticleComponentProps {
  selectedArticle: ArticleProps | undefined;
}

export default function Article({ selectedArticle }: ArticleComponentProps) {
  const [{ Ypos, scrollToTop }] = useWindowScroll();
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
      {Ypos > 150 && (
        <ArrowUpDiv>
          <abbr title="Voltar para o topo">
            <ArrowUp onClick={() => scrollToTop()} size="25" />
          </abbr>
        </ArrowUpDiv>
      )}
    </Container>
  );
}
