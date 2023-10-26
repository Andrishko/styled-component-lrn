import { H1 } from './components/Title';
import { DefaultButton, ExtendedButton } from './components/Buttons';
import styled from 'styled-components'


const Wrapper = styled.div`
h1{
  text-align: center;
  color: violet;
}

p{
  font-size: 40px;
}

button{
  background-color: pink;
  padding: 4px 8px;
  border: none;  
}
`

function App() {
  return (
    <Wrapper>
      <div>
        <H1>Styled Components</H1>
        <p>Cillum culpa deserunt enim et eiusmod quis proident consequat tempor ipsum sunt esse.</p>
        <DefaultButton>Click ME!</DefaultButton>
        <DefaultButton red>Click ME!</DefaultButton>
        <ExtendedButton red>Click ME!</ExtendedButton>
      </div>
    </Wrapper>
  );
}

export default App;
