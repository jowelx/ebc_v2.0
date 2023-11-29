// This component includes the form to login for our website and at header was added to guide the use and this
// component acts like a route of our website, more specific the route /login

import LoginForm from "@/Components/LoginForm";
import Heading from "@/UI/Heading";
import Paragraph from "@/UI/Paragraph";
import AppLink from "@/UI/AppLink";

const Login = () => {

    return (
        <div className="container">
            <div className="col-md-6 justify-content-center mx-auto border p-3 my-4">
                <Heading className="text-center">
                    {" "}
                    Inicia sesión en El buen conejo{" "}
                </Heading>
                <Paragraph className="text-center">
                    ¿Aun no tienes cuenta? &nbsp;
                    <AppLink href="/register">Registrate ahora</AppLink>
                </Paragraph>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
