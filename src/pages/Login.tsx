import { Button } from '../components/UI/Button/Button';
import { TextInput } from '../components/UI/TextInput/TextInput';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const { setIsAuth } = useAuth();

  return (
    <section>
      <div className="container">
        <div className="sectionWrapper">
          <h1>Authorization</h1>

          <p style={isAuth ? { color: 'yellowgreen' } : { color: 'tomato' }}>
            {isAuth
              ? 'You are already authorized. Use navigation menu'
              : 'You need to log in'}
          </p>

          <form
            style={{ display: 'flex', flexDirection: 'column', rowGap: '16px' }}
          >
            <TextInput
              type="text"
              placeholder="Login"
              defaultValue="admin"
              autoComplete="off"
            />
            <TextInput
              type="password"
              placeholder="Password"
              defaultValue="admin"
              autoComplete="off"
            />
            <div style={{ display: 'flex', columnGap: '24px' }}>
              <Button type="button" onClick={() => setIsAuth(true)}>
                Sign in
              </Button>
              <Button type="button" onClick={() => setIsAuth(false)}>
                Sign out
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
