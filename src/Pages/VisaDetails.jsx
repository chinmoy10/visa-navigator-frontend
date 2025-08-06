import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const VisaDetails = () => {

    const { id } = useParams();

    const visaData = useLoaderData();
    const [singleVisaDetails, setSingleVisaDetails] = useState([]);

    useEffect(() => {
        if (id) {
            const singleVisaData = [...visaData].find(oneVisa => oneVisa._id == id);
            setSingleVisaDetails(singleVisaData);
        }
    }, [visaData, id])

    console.log(singleVisaDetails);

    const { _id, imageUrl, countryName, visaType, visaTime, requirDoc, description, visaAge, visaFee, visaValidity, visaAppMethod } = singleVisaDetails || {};

    return (
        <div>
            Visa Details: {countryName}
            <img src={imageUrl} alt="" />
        </div>
    );
};

export default VisaDetails;