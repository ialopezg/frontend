import styled from "styled-components";

export const Input = ({ type, placeholder }: any) => {
  return <InputField type={type} placeholder={placeholder} />;
}

const InputField = styled.input`
  width: 280px;
`;