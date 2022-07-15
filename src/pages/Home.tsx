import { Subtitle } from "../components/Subtitle";
import { Title } from "../components/Title";
import { Avatar } from "../components/Avatar";

import Logo from "../assets/images/logo.png";
import { LinkButton } from "../components/Buttons/LinkButton";
import { ButtonContainer } from "../components/Containers/ButtonGroup";

export const Home = () => (
  <section>
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        width: "100%",
        padding: "15px",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Avatar image={Logo} height={60} width={160} radius={10} />
    </div>
    <Title>Welcome to Frontend Site</Title>
    <Subtitle>Feel free to explore our site!</Subtitle>
    <ButtonContainer>
      <LinkButton to="/register">Register</LinkButton>
      <LinkButton to="/login">Login</LinkButton>
    </ButtonContainer>
  </section>
);
