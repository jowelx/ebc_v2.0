import React from 'react'

import Heading from "../../UI/Heading";
import CardImage from "../../Components/CardImage";
import AppLink from "../../UI/AppLink";
import { BREED_CHOICE } from "../../utils/breeds";

const Market = () => {
    return (
        <>
            <section>
                <Heading className="text-center m-4">Buscar por razas</Heading>
                <div className="row">
                    {BREED_CHOICE.map((breed, index) => (
                        <div
                            key={index}
                            className="my-2 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center"
                        >
                            <AppLink href={`/market/${breed.name}`}>
                                <CardImage
                                    image={breed.urlImage}
                                    title={breed.name}
                                    text={breed.description}
                                />
                            </AppLink>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Market;
