// This component includes the form to change password and at header was added to guide the use and this
// component acts like a route of our website, more specific the route /changepass
'use client'
import React, { useState } from "react";
import ChangePassForm from "../../Components/ChangePassForm";
import Heading from "../../UI/Heading";
import Paragraph from "../../UI/Paragraph";
import SuccessfullSection from '../../UI/SuccessfullSection'

const Index = () => {

    const [success, setSuccess] = useState(false);

    return (
        <div className="container">
            {success && <SuccessfullSection spanText="Contraseña actualizada" />}
            <div className="change-pass col-md-6 justify-content-center mx-auto border p-3 my-4">
                <Heading className="text-center"> Cambia tu contraseña </Heading>
                <Paragraph className="text-center">
                    {" "}
                    Introduce tu nueva contraseña para tu cuenta del buen conejo{" "}
                </Paragraph>
                <ChangePassForm setSuccess={setSuccess} />
            </div>
        </div>
    );
};

export default Index;
