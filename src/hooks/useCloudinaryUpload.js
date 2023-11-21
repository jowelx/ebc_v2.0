import { useState } from 'react';

const useCloudinaryUpload = (uploadPreset, cloudName) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    const uploadToCloudinary = async (image) => {

        setLoading(true);
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', uploadPreset);

        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
                {
                    method: 'POST',
                    body: formData,
                }
            );

            if (response.ok) {
                const jsonResponse = await response.json();
                setImageUrl(jsonResponse.secure_url);
            } else {
                console.log('Server responded with status:', response.status);
            }
        } catch (err) {
            console.error('Error uploading image to Cloudinary:', err);
        }

        setLoading(false);
    };

    return { uploadToCloudinary, imageUrl, loading };
};

export default useCloudinaryUpload;

//how to use:

//   const onChangeImageUpload = async (event) => {
//     const { files } = event.target;
//     if (files && files[0]) {
//       setFarmImage(URL.createObjectURL(event.target.files[0]));
//       await uploadToCloudinary(files[0]);
//     }
//   };

// const { uploadToCloudinary, imageUrl } = useCloudinaryUpload(
//   "El_buen_conejo",
//   "cloudNamexxx"
// );

// useEffect(() => {
//   if (imageUrl) {
//     setFarmData((prevFarmData) => ({
//       ...prevFarmData,
//       photo: imageUrl,
//     }));
//   }
// }, [imageUrl]);