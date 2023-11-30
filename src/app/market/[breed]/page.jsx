'use client'
import { useEffect } from "react";
import useHttpGetWithPagination from "../../../hooks/useHttpGetWithPagination";
import useFetchRabbitsWithFarmData from "../../../hooks/useFetchRabbitsWithFarmData";
//import { useLoaderData } from "react-router-dom";
import { useRouter } from "next/navigation";
import CardImage from "../../../Components/CardImage";
import AppLink from "../../../UI/AppLink";
import Heading from "../../../UI/Heading";
import { apiUrls } from "../../../utils/links";

const BreedInventory = () => {
    const router = useRouter()
    const breedSelected = router.query
    // const breedDecode = decodeURIComponent(breedSelected);
    const { isLoading, error, data, sendRequest } = useHttpGetWithPagination();

    useEffect(() => {
        sendRequest(`${apiUrls.urlRabbits}?breed=${breedSelected}&is_active=true`);
    }, [sendRequest, breedSelected]);

    const { rabbits, errorFarmData, isDataReady } = useFetchRabbitsWithFarmData(
        isLoading,
        data,
        sendRequest,
        breedSelected
    );
    return (
        <>
            {!isDataReady && !error && (
                <h2 className="text-muted text-center m-5 p-5">Cargando...</h2>
            )}
            {(error || errorFarmData) && (
                <h2 className="text-danger text-center m-5 p-5">
                    Ha ocurrido un error, intente de nuevo
                </h2>
            )}
            {isDataReady && !error && !errorFarmData && rabbits.length === 0 && (
                <h2 className="text-muted text-center m-5 p-5">
                    No hay conejos disponibles de raza {breedSelected}
                </h2>
            )}
            {rabbits.length > 0 && (
                <section>
                    <Heading className="text-center m-4">
                        {decodeURIComponent(breedSelected)}
                    </Heading>
                    <div className="row">
                        {rabbits.map((rabbit) => (
                            <div
                                key={rabbit.id}
                                className="my-2 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center"
                            >
                                <AppLink
                                    href={`/market/rabbit/${rabbit.id}?farmName=${rabbit.farmName}&farmAddress=${rabbit.farmAddress}&farmProfileId=${rabbit.farmProfileId}`}
                                >
                                    <CardImage
                                        image={rabbit.photo}
                                        title={rabbit.tag}
                                        text={`$ ${rabbit.price}`}
                                        link={{
                                            url: "#",
                                            className: "text-muted",
                                            text: `Granja: ${rabbit.farmName}, Ubicacion: ${rabbit.farmAddress}`,
                                        }}
                                    />
                                </AppLink>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};

export default BreedInventory;
