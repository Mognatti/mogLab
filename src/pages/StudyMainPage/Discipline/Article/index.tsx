import styled from "styled-components";
import { useEffect, useRef } from "react";
import useFetchArticles from "../../../../hooks/useFetchArticles";
import { useLocation } from "react-router-dom";
import NotFound from "../../../NotFound";
import Loader from "../Loader";
import capitalizeWords from "../../../../functions/capitalizeWords";
import normalizeUrlToString from "../../../../functions/normalizeUrlToString";

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

export default function Article() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const contentDiv = useRef<HTMLDivElement | null>(null);
  const authorRef = useRef<HTMLParagraphElement | null>(null);
  const location = useLocation();
  const [{ articleList, isArticlesListLoading, fetchArticles }] = useFetchArticles();
  const locationArray = location.pathname.split("/");
  const articleDiscipline = normalizeUrlToString(locationArray[locationArray.length - 2]);
  const articleTitle = normalizeUrlToString(locationArray[locationArray.length - 1]);
  const selectedArticle = articleList.find((article) => article.title === articleTitle);

  useEffect(() => {
    async function getArticles() {
      if (!selectedArticle) {
        await fetchArticles(articleDiscipline);
      }

      if (titleRef.current && contentDiv.current && authorRef.current && selectedArticle) {
        titleRef.current.innerHTML = capitalizeWords(selectedArticle.title);
        contentDiv.current.innerHTML = selectedArticle.content;
        authorRef.current.innerHTML = `Autor - ${selectedArticle.author}`;
      }
    }

    getArticles();
  }, [articleDiscipline, selectedArticle, fetchArticles]);

  if (isArticlesListLoading) {
    return <Loader />;
  } else if (!selectedArticle) {
    return <NotFound />;
  }

  return (
    <Container>
      <article id="article">
        <Title ref={titleRef}></Title>
        <ArticleContent ref={contentDiv}></ArticleContent>
        <AuthorParagraph ref={authorRef}></AuthorParagraph>
      </article>
    </Container>
  );
}
