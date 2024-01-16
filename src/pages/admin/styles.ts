import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10svh 4svw 5svh 8svw;
  @media (max-width: 466px) {
    margin: 8svh 0svw 5svh 10svw;
  }
  @media (max-width: 426px) {
    margin: 8svh 0svw 5svh 15svw;
    text-align: center;
  }
`;
