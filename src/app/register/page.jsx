// This component includes the form to register a new account and at header was added to guide the use and this
// component acts like a route of our website, more specific the route /register

import RegisterForm from "@/Components/RegisterForm";
import Heading from "@/UI/Heading";
import Paragraph from "@/UI/Paragraph";
import AppLink from "@/UI/AppLink";

const Index = () => {
    return (
        <div className="container">
            <div className="col-md-6 justify-content-center mx-auto border p-3 my-4">
                <Heading className="text-center"> Comienza a ser productor </Heading>
                <Paragraph className="text-center">
                    {" "}
                    Primero crea tu cuenta en El buen conejo{" "}
                </Paragraph>
                <Paragraph className="text-center">
                    ¿Ya tienes una cuenta? &nbsp;
                    <AppLink href="/login">Inicia sesión</AppLink>
                </Paragraph>
                <RegisterForm />
                <Paragraph className="text-center my-3 text-success text-sm">
                    Al continuar, usted reconoce que ha leído, entendido y está de acuerdo
                    con las &nbsp;
                    <AppLink href="/" className="text-decoration-none">
                        Condiciones del servicio
                    </AppLink>
                    &nbsp; y la Política de privacidad de El buen conejo.
                </Paragraph>
            </div>
        </div>
    );
};

export default Index;
