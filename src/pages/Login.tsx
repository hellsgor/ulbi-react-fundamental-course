import { Button } from '../components/UI/Button/Button';
import { TextInput } from '../components/UI/TextInput/TextInput';

const Login = () => {
  return (
    <section>
      <div className="container">
        <div className="sectionWrapper">
          <h1>Authorization</h1>

          <form
            style={{ display: 'flex', flexDirection: 'column', rowGap: '16px' }}
          >
            <TextInput type="text" placeholder="Login" />
            <TextInput type="password" placeholder="Password" />
            <Button>Login</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
