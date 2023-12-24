import styled from "styled-components";
import { ArticleProps } from "../../../../types/globalTypes";
import { useEffect, useRef } from "react";

const Container = styled.div`
  height: 90svh;
  margin-top: 2svh;
`;

const Title = styled.h3`
  text-align: center;
`;

const ArticleContent = styled.div`
  text-align: justify;
  margin: 4svh 2svw;
`;

export default function Article({ title, content }: Readonly<ArticleProps>) {
  const contentDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    contentDiv.current!.innerHTML = content;
  }, [content]);
  return (
    <Container>
      <article id="article">
        <Title id="title">{title}</Title>
        <ArticleContent ref={contentDiv}>{content}</ArticleContent>
      </article>
    </Container>
  );
}
