import styled from "styled-components";

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;  
  padding: 8px;
  padding-left: 16px;
  width: 100%;
  color: #f4ede8;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  input {
    background: transparent;
    border: 0;
    flex: 1;
  }
  svg {
    margin-right: 16px;
  }
`;
