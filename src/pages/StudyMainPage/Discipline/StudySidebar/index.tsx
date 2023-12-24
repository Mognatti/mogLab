import * as S from "./styles";
import { ArticleProps } from "../../../../types/globalTypes";
import { useNavigate } from "react-router-dom";

interface StudySidebarProps {
  articleList: ArticleProps[] | undefined;
  selectedArticle: ArticleProps | undefined;
  setSelectedArticle: React.Dispatch<React.SetStateAction<ArticleProps | undefined>>;
}

export default function StudySidebar({ articleList, setSelectedArticle }: Readonly<StudySidebarProps>) {
  const navigate = useNavigate();

  return (
    <S.SidebarDiv>
      <S.Title>
        Artigos
        <S.Icon size="20" />
      </S.Title>
      <hr />
      <S.NavList>
        {articleList?.map((item) => (
          <S.NavLink key={item.title} onClick={() => setSelectedArticle(item)}>
            {item.title}
          </S.NavLink>
        ))}
      </S.NavList>
      <S.GoBack onClick={() => navigate("/disciplinas")}>
        <S.ReturnIcon />
        Voltar
      </S.GoBack>
    </S.SidebarDiv>
  );
}
