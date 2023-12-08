import { Link, useParams } from "react-router-dom";
import useFetchDisciplines from "../../../hooks/useFetchDisciplines";
import Loader from "./Loader";
import NotFound from "../../NotFound";

export default function Discipline() {
  const [{ disciplines, isDisciplinesLoading }] = useFetchDisciplines();
  const { discipline } = useParams();
  const selectedDiscipline = disciplines.find(
    (item) => item.title.toLowerCase() === discipline
  );

  if (isDisciplinesLoading) {
    return <Loader />;
  } else if (!selectedDiscipline) {
    return <NotFound />;
  }
  console.log(disciplines);
  console.log(selectedDiscipline);

  return (
    <>
      {selectedDiscipline && (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3>{selectedDiscipline.title}</h3>
          <p>{selectedDiscipline.description}</p>
          <ul>
            {selectedDiscipline.articles
              ? selectedDiscipline.articles.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={`/disciplinas/${discipline!.toLocaleLowerCase()}/${
                        item.title
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))
              : "A disciplina ainda não possui artigos cadastrados. Aguarde atualizações!"}
          </ul>
        </div>
      )}
    </>
  );
}
