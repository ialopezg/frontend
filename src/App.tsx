import { MainContainer } from './components/containners/MainContainer';
import { Title } from './components/Title';
import { InputContainer } from './components/containners/InputContainer';
import { Input } from './components/Input';
import { ButtonContainer } from './components/containners/ButtonContainer';

function App() {
  return (
    <MainContainer>
      <Title>Welcome</Title>
      <InputContainer>
        <Input type="text" placeholder="Type full name" />
        <Input type="email" placeholder="Type your email address" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Re-type password" />
      </InputContainer>
      <ButtonContainer></ButtonContainer>
    </MainContainer>
  );
}

export default App;
