import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const LoaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function Loader() {
  return (
    <LoaderSection>
      <Spinner animation="grow" />
    </LoaderSection>
  );
}
