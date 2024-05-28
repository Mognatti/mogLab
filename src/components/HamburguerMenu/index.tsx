import { User } from "firebase/auth";
import { navLinks } from "../Header/navLinks";
import * as S from "./styles";

interface HamburguerMenuProps {
  showHamburguerList: boolean;
  setShowHamburguerList: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  Ypos: number;
}

export default function HamburguerMenu({ setShowHamburguerList, showHamburguerList, user, Ypos }: HamburguerMenuProps) {
  return (
    <>
      <S.HamburguerButton
        aria-controls="primary-navigation"
        aria-expanded={showHamburguerList}
        onClick={() => setShowHamburguerList((prev) => !prev)}
      >
        <S.HamburguerSVG scrolling={Ypos > 0} viewBox="0 0 100 100" width={40}>
          <S.HamburguerLines active={showHamburguerList} className="top" width={60} height={10} x={20} y={25} rx="5" />
          <S.HamburguerLines
            active={showHamburguerList}
            className="middle"
            width={60}
            height={10}
            x={10}
            y={45}
            rx="5"
          />
          <S.HamburguerLines active={showHamburguerList} className="down" width={60} height={10} x={20} y={65} rx="5" />
        </S.HamburguerSVG>
      </S.HamburguerButton>
      <S.HamburguerList show={showHamburguerList}>
        {navLinks.map((link) => (
          <S.HamburguerNavLink
            key={link.id}
            to={link.to}
            show={showHamburguerList}
            onClick={() => setShowHamburguerList(false)}
          >
            {link.name}
          </S.HamburguerNavLink>
        ))}
        <S.HamburguerNavLink to="/login" show={showHamburguerList} onClick={() => setShowHamburguerList(false)}>
          {user ? "Dashboard" : "Login"}
        </S.HamburguerNavLink>
      </S.HamburguerList>
    </>
  );
}
