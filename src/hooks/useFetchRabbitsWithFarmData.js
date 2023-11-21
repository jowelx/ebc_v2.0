import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { apiUrls } from "../utils/links";

const useFetchRabbitsWithFarmData = (isLoading, data, sendRequest, breedSelected) => {
    const [rabbits, setRabbits] = useState([]);
    const [errorFarmData, setErrorFarmData] = useState(null);
    const [isDataReady, setIsDataReady] = useState(false);

    const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: Cookies.get("authToken")
            ? `Bearer ${Cookies.get("authToken")}`
            : null,
    };

    useEffect(() => {
        if (!isLoading && data) {
            setIsDataReady(false);

            Promise.all(
                data.map((rabbit) =>
                    fetch(`${apiUrls.urlCages}${rabbit.cage_id}`, { headers })
                        .then((response) => response.json())
                        .then((cageData) =>
                            fetch(`${apiUrls.urlFarms}${cageData.farm_id}`, { headers })
                                .then((response) => response.json())
                                .then((farmData) => ({
                                    ...rabbit,
                                    farmName: farmData.name,
                                    farmAddress: farmData.address,
                                    farmProfileId: farmData.profile_id,
                                }))
                        )
                )
            )
                .then((rabbitsWithFarmData) => {
                    setRabbits(rabbitsWithFarmData);
                    setIsDataReady(true);
                })
                .catch((error) => {
                    console.error("error from fetch cage or farm:", error);
                    setErrorFarmData(error.message || "error from fetch cage or farm!");
                });
        }
    }, [isLoading, data, sendRequest, breedSelected]);

    return { rabbits, errorFarmData, isDataReady };
};

export default useFetchRabbitsWithFarmData;
