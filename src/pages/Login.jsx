import styled from "styled-components";
import { mobile } from "../reponsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/set-with-fashionable-women-s-clothing-jeans-sweater_169016-3214.jpg?t=st=1648293781~exp=1648294381~hmac=6766a1bff5c32671b7d98bf43a742470ea0950215c852346e809eea3411963cf&w=1060")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px 5px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 10px 0;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 10px 0;
  font-size: 12px;
  text-decoration: underline;
  margin: 5px 0;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" type="text" />
          <Input placeholder="email" type="email" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
