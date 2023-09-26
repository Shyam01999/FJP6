import Crousel from "./Crousel";
import LoginForm from "./LoginForm";
import Grid from '@mui/material/Unstable_Grid2';
import './login.css';



function Login() {
  return (
    <>
      <div className="login_container">
            <Crousel></Crousel>
            <LoginForm ></LoginForm>
      </div>
    </>
  );
}

export default Login;
