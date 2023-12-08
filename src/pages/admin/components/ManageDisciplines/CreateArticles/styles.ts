import styled from "styled-components";

export const Form = styled.form`
  width: 90svw;
  display: flex;
  flex-direction: column;
  gap: 2svh;
  padding-bottom: 5vh;

  select {
    padding: 8px;
    width: 100%;
  }

  input {
    padding: 8px;
    width: 95%;
  }
  .article-author-div {
    margin-left: 2svw;
  }
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const InputAndLabelDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
