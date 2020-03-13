import styled, { css } from 'styled-components';

const Input = styled.input`
background: transparent;
  border-radius: 3px;
  width:97%;
  padding:1%;
  border: 1px solid grey;
  color: black;
  background: white;
  margin-left:.5%;

  ${(props) => props.error && css`
    border: 1px solid red;
`}
${(props) => props.bgcolor && css`
    background: white;
 `};
`;

const Container = styled.div`
  border: 1px solid black;

`;

export {
  Input, Container,
};
