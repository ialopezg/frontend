import { ButtonContainer } from "../../components/Containers/ButtonContainer";
import { InputContainer } from "../../components/Containers/InputContainer";
import { ThemeColors } from "../../components/helpers/ThemeColors";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { Pane } from "../../components/Containers/Pane";
import { FormButton } from "../../components/Buttons/FormButton";
import { Avatar } from "../../components/Avatar";

import Logo from '../../assets/images/logo.png';

export const Register = () => {
  return (
    <Pane bg="#fafafa">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          width: "100%",
          padding: "15px 0 25px 0",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Avatar image={Logo} height={60} width={160} radius={10} />
      </div>
      <Title size={25} color={ThemeColors.light} transform="uppercase">
        Registration
      </Title>
      <InputContainer>
        <Input type="text" placeholder="Type full name" />
        <Input type="email" placeholder="Type your email address" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Re-type password" />
      </InputContainer>
      <ButtonContainer>
        <FormButton type="submit" transform="uppercase" bg={ThemeColors.light}>
          Create account
        </FormButton>
      </ButtonContainer>
    </Pane>
  );
};
