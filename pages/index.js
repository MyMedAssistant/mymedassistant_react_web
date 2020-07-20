import Layout from '../components/Layout';
import Form from '../components/Form';


export default function Login() {
  return (
    <div className = "login">
      <Layout title="Sign In">
            <h1>Sign In</h1>
            <Form />
      </Layout>
      <style jsx>{`
      .login {
        font: 35px Helvetica, Arial, sans-serif;
        background: cornflowerblue;
        padding:30vh;
        text-align: center;
        transition: 100ms ease-in background;
      }
      `}</style>
    </div>
  )
}
