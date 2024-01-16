import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IoIosHome } from "react-icons/io";
import { StyledLink } from "../../styles/global";
import { MdKeyboardArrowRight } from "react-icons/md";
import capitalizeWords from "../../functions/capitalizeWords";

const Container = styled.div<{ size: number }>`
  display: ${(props) => (props.size > 0 ? "flex" : "none")};
  align-items: center;
  margin-top: 9svh;
  margin-left: 3svw;
  height: 4svh;
  gap: 0.5em;
  width: fit-content;
`;

const CrumbContent = styled.span`
  display: flex;
  gap: 0.5em;
  align-items: center;
`;

const CrumbLink = styled(StyledLink)`
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
  }
`;

export default function BreadCrumbs() {
  const location = useLocation();
  let currentlink = "";
  const filteredCrumbs = location.pathname.split("/").filter((crumb: string) => crumb !== "");

  const crumbs = filteredCrumbs.map((crumb: string, index: number, array: string[]) => {
    const decodedCrumb = decodeURIComponent(crumb);
    currentlink += `/${decodedCrumb}`;
    const homeIcon = index === 0 ? <IoIosHome size="15px" /> : null;
    const arrowIcon = index !== array.length - 1 ? <MdKeyboardArrowRight size="15px" /> : null;

    return (
      <CrumbContent key={crumb}>
        <CrumbLink to={currentlink}>
          <span>
            {homeIcon}
            {capitalizeWords(decodedCrumb)}
          </span>
        </CrumbLink>
        {arrowIcon}
      </CrumbContent>
    );
  });

  return (
    <>
      <Container size={crumbs.length}>{crumbs}</Container>
      {crumbs.length > 0 && <hr />}
    </>
  );
}
