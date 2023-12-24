import * as S from "./styles";

const biologyRoute = [
  {
    id: 1,
    title: "Introdução",
    text: ` A rota da biologia é um caminho pelo qual eu acredito que você irá ter
    mais facilidade de aprender. Os conteúdos estão ordandos de tal forma
    que você só irá abordar uma discplina depois que todos os conteúdos
    base para o seu adequado aprendizado já tenham sido estudados. Esse
    método irá te ajudar a aprender os conteúdos com mais facilidade
    principalmente se você for iniciante. Mas é claro que não precisa se
    preocupar com esquecer as coisas quando já estiver mais avançado, pois
    sempre terá uma revisão simples e rápida a sua disposição enquanto
    navega pelos conteúdos listados no site.`,
  },
  {
    id: 4,
    title: "Citologia",
    text: (
      <>
        Para que as próximas disciplinas possam fazer sentido, é necessáiro primeiro entender a base do seu organismo.
        Para entender como o seu corpo funciona, você precisa estudar sobre as células. Por isso iremos inicair os
        estudos na discplina Citologia. A citologia é o estudo das células. Teorias de como se formaram, como se
        organizam, sobrevivem e realizam todos os processos que são fundamentais para a nossa existência. Nós somos
        considerados seres vivos, mas é bem verdade que aquilo que está realmente vivo é aquilo que nos forma. Nós somos
        um conjunto de seres vivos que foram uma estrutura harmônica, capazes de trabalhar em equipe, de acordo com
        algumas diretrizes, para o bem comum. Seria bom se nós conseguíssemos aprender como fazer isso no dia a dia, não
        é mesmo? Não é curioso como aquilo que nos forma é capaz de se organizar em prol daquilo que é melhor para o
        coletivo, mas nós somos, por muitas vezes, incapazes de fazer o mesmo? A biologia é realmente fascinante.
      </>
    ),
  },
  {
    id: 2,
    title: "Bioquímica",
    text: (
      <>
        Precisamos buscar compreender a base de tudo, aquilo que faz do universo algo extremamente intrigante e
        complexo. Precisamos primeiro entender o que é uma célula e como elas são formadas. Sendo assim, a temos agora a
        disciplina Bioquímica , a disciplina na qual muitos alunos possuem dificuldade, mas é importante ter em mente
        que ela é a base de tudo. Se você dominar a bioquímica, os processos metabólicos realizados pelo seu corpo serão
        de mais fácil compreesão, além de ser capaz de entender de maneira holística o funcionamento do organismo
        humano. Aqui você irá aprender sobre os átomos e as moléculas que formam toda a matéria.
      </>
    ),
  },
  {
    id: 3,
    title: "Genética",
    text: (
      <>
        Entramos agora em um estudo fascinante. Vamos pegar todo o conhecimento adquirido de física e química básica e
        vamos para o estudo daquilo que diferencia não só cada ser, mas também cada espécie. Entramos no mundo da{" "}
        Genética. A genética é o estudo dos genes e, por consequência, da hereditariedade. O que nos torna semelhantes
        com nossos familiares? Podemos ir além e nos perguntar: O que nos torna semelhantes como uma espécie? Por que o
        ser-humano possui as características que possui? Como o nosso corpo sabe a posição correta em que cada célula,
        tecido, órgão e membro deve estar? Vamos entender como compostos químicos transformam você em você.
      </>
    ),
  },
  {
    id: 5,
    title: "Anatomia Geral",
    text: (
      <>
        Agora que temos o conhecimento bioquímico e celular, podemos avançar para um estudo anatômico geral, entendendo
        as estruturas que nossas célular formam. Não existe uma ordem específica para o estudo da anatomia, mas
        recomendo que inicie pelo estudo dos sistemas hematológico, imune, cardiorespiratório e nevoso. Coloco
        hematologia primeiro porque acredito que tendo em mente a composição do sangue, você terá maior entendimento
        geral do seu organismo, principalmente do cardiorespitarório. O sistema imune entra no início também por ter uma
        relação muito forte com a hematologia, tornando seu estudo conjunto mais fácil de ser compreeendido. Depois de
        aprender sobre esses quadro sistemas, acredito que a ordem dos demais não seja tão relevente.
      </>
    ),
  },
];

export default function BiologyRoute() {
  return (
    <div>
      <S.TitleContainer>
        <S.Title>Rota da Biologia Humana</S.Title>
        <span>
          *Esse é um projeto em construção, a rota poderá sofrer alterações e os conteúdos ainda estão sendo produzidos
        </span>
      </S.TitleContainer>
      {biologyRoute.map((item) => (
        <div key={item.id} style={{ textAlign: "justify" }}>
          <S.Title>{item.title}</S.Title>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
