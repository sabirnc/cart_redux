import { Button, Heading, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const authDispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleLogin = () => {
    authDispatch(login())
    navigate('/')
  }

  return (
    <section className="login-sec">
      <form className="login-form">
        <Heading margin={"2"} color={'black'}>Login</Heading>
        <Input placeholder="Enter your usename" width={"auto"} bg={"white"} />
        <Input placeholder="Enter your password" width={"auto"} bg={"white"} />
        <Button bg={'black'} width={220} onClick={handleLogin} > Login </Button>
      </form>
    </section>
  );
};

export default Login;
