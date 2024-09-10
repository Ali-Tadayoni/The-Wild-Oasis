import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.main`
  padding: 20px;
  background-color: orangered;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>hello world</H1>
        <Button onClick={() => alert("hello")}>ali</Button>
        <Button onClick={() => alert("hello")}>check</Button>
        <Input type="number" placeholder="number of gusts"></Input>
        <Input type="number" placeholder="number of gusts"></Input>
      </StyledApp>
    </>
  );
}

export default App;
