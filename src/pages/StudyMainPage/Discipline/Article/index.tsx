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
  color: ${(props) =>
    props.theme.title == "dark" ? props.theme.colors.white[500] : props.theme.colors.black[500]} !important;
  ul {
    display: flex;
    flex-direction: column;
    gap: 1em 0;
    color: ${(props) =>
      props.theme.title == "dark" ? props.theme.colors.white[500] : props.theme.colors.black[500]} !important;

    li {
      text-align: justify !important;
      padding-left: 1.5em;
      margin: 0;
      color: ${(props) =>
        props.theme.title == "dark" ? props.theme.colors.white[500] : props.theme.colors.black[500]} !important;
    }
  }
  img {
    padding: 0.4em 0;
  }
  a {
    border-bottom: 1px solid ${(props) => props.theme.colors.yellow[500]};
    &:hover {
      padding: 0px 2px;
    }
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
