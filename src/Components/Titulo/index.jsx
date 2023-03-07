import styled from "styled-components";

// quando usamos o styled não precisamos redenizar um html pois o styledo components já sabe o tipo de html que iremos redenizar

const Titulo = styled.h1`
  color: ${({theme}) => theme.text};
  padding: 25px 0;
`
export default Titulo;
