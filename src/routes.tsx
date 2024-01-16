import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import useTheme from "./hooks/useTheme";
import { lightTheme, themeKey } from "./styles/theme";
import Global from "./styles/global";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudyMainPage from "./pages/StudyMainPage";
import ContactMe from "./pages/ContactMe";
import Discipline from "./pages/StudyMainPage/Discipline";
import Admin from "./pages/admin";
import ManageDisciplines from "./pages/admin/components/ManageDisciplines";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { useState } from "react";
import ManageArticles from "./pages/admin/components/ManageArticles";
import Article from "./pages/StudyMainPage/Discipline/Article";
import { ArticleProps } from "./types/globalTypes";
import Sidebar from "./pages/admin/components/Sidebar";

export default function AppRoutes() {
  const [{ theme, setTheme }] = useTheme(themeKey, lightTheme);
  const [selectedArticle, setSelectedArticle] = useState<ArticleProps | undefined>();

  const HeaderAndFooter = {
    JSX: (
      <>
        <Header {...{ theme, setTheme }} />
        <Footer />
      </>
    ),
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Global />
        <Routes>
          <Route path="/" element={HeaderAndFooter.JSX}>
            <Route index element={<Home />} />
            <Route path="/disciplinas" element={<StudyMainPage />} />
            <Route path="/disciplinas/:discipline" element={<Discipline setSelectedArticle={setSelectedArticle} />} />
            <Route path="/disciplinas/:discipline/:article" element={<Article selectedArticle={selectedArticle} />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route
            path="/admin"
            element={
              <>
                <Sidebar {...{ theme, setTheme }} />
                <Admin />
              </>
            }
          />
          <Route
            path="/admin/disciplinas"
            element={
              <>
                <Sidebar {...{ theme, setTheme }} />
                <ManageDisciplines />
              </>
            }
          />
          <Route
            path="/admin/artigos"
            element={
              <>
                <Sidebar {...{ theme, setTheme }} />
                <ManageArticles />{" "}
              </>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
