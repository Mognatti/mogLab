import * as S from "./styles";

const navlinks = [
  {
    id: 1,
    href: "https://portfolio-mognatti.vercel.app",
    text: "Portfólio",
  },
  {
    id: 2,
    href: "https://github.com/Mognatti",
    text: "GitHub",
  },
  {
    id: 3,
    href: "https://www.linkedin.com/in/caio-mognatti/",
    text: "Linkedin",
  },
];

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.Content>
        <p>Criado e desenvolvido por Caio Mognatti</p>
        <S.Nav>
          {navlinks.map((link, index) => (
            <>
              <a href={link.href} key={link.id} target="_blank">
                {link.text}
              </a>
              {index !== navlinks.length - 1 && <span>|</span>}
            </>
          ))}
        </S.Nav>
      </S.Content>
    </S.FooterContainer>
  );
}
