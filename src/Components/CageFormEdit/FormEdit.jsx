import styles from "../CageFormEdit/FormEdit.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHttp } from "../../hooks/useHttp";
import { apiUrls } from "../../utils/links";

const FormEdit = () => {

    const navigate = useNavigate();

    const { isLoading, error, data, sendRequest, isntOk } = useHttp();

    const [formData, setFormData] = useState({
        farm_id: "ae4f4c87-71a3-455f-9cde-a9b5964b5fdd",
        title: '',
        lotNumber: '',
        privacy: ''
    });

    // Effect to populate form data when data is fetched
    useEffect(() => {
        // Define a function to fetch cage data from the API
        const fetchCageData = async () => {
            try {
                // Make a GET request to the API endpoint using the custom hook
                const responseData = await sendRequest(apiUrls.urlCages, "GET");
                // Set the fetched data in the form state
                setFormData(responseData);
            } catch (error) {
                console.error(error.message || 'Error fetching cage data');
            }
        };
        // Call the fetchCageData function to fetch data when component mounts
        fetchCageData();
    }, []); // Empty dependency array ensures the effect runs only once

    // Event handler to update form data when input fields change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // Update corresponding form field value in state
        setFormData({ ...formData, [name]: value });
    };

    // Event handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a PUT request to update cage data in the API
            await sendRequest(apiUrls.urlCages, "PUT", formData);
            // Handle successful API response (if needed)
            console.log('Cage data successfully updated:', data);
        } catch (error) {
            // Handle errors in API request
            console.error(error.message || 'Something went wrong while updating cage data');
        }
    };

    return (
        <>
            <section className={styles.flexContainerForm}>
                <form className={styles.flexContainerFormDiv1} onSubmit={handleSubmit}>

                    <h1>Editar Jaula</h1>
                    <p className={styles.instructionsTextForm}>Modifica los datos de esta jaula, esto no afectará a los conejos</p>
                    
                        <label className={styles.labelForm}>
                            Título    
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className={styles.inputForm}
                            placeholder="002"
                            required
                        />

                        <label className={styles.labelForm}>
                            Número de lote o identificación
                        </label>
                        <input
                            type="text"
                            name="lotNumber"
                            value={formData.lotNumber}
                            onChange={handleInputChange}
                            className={styles.inputForm}
                            placeholder="Número de lote"
                        />

                        <label className={styles.labelForm}>
                        Privacidad
                        </label>
                        <select
                            name="privacy"
                            value={formData.privacy}
                            onChange={handleInputChange}
                            className={styles.selectForm}
                        >
                            <option>Privado</option>
                            <option>Publico</option>
                        </select>

                    <h6 className={styles.Caption}>Mantenlo en privado si no quieres que otros vean los conejos de esta jaula</h6>

                    <button type="submit" className={styles.buttonFormCage}> Guardar cambios </button>
                    <button onClick={() => navigate('/cage/details')} className={styles.buttonFormCage2}> Regresar </button>
                </form>

                
            </section>
        </> 
    );
};

export default FormEdit;