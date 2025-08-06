import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

const AddVisa = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("countryData.json")
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const documents = [
        "Valid passport",
        "Visa application form",
        "Recent passport-sized photograph",
    ];

    const [requiredDocuments, setRequiredDocuments] = useState([]);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setRequiredDocuments([...requiredDocuments, value]);
        } else {
            setRequiredDocuments(requiredDocuments.filter((doc) => doc !== value));
        }
    };

    const handleAddVisa = event => {
        event.preventDefault();

        const form = event.target;

        const imageUrl = form.imageUrl.value;
        const countryName = form.countryName.value;
        const visaType = form.visaType.value;
        const visaTime = form.visaTime.value;
        const requirDoc = form.requirDoc.value;
        const description = form.description.value;
        const visaAge = form.visaAge.value;
        const visaFee = form.visaFee.value;
        const visaValidity = form.visaValidity.value;
        const visaAppMethod = form.visaAppMethod.value;

        const newAddedVisa = { imageUrl, countryName, visaType, visaTime, requirDoc, description, visaAge, visaFee, visaValidity, visaAppMethod };

        console.log(newAddedVisa);

        fetch('http://localhost:3000/visas', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAddedVisa)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
        form.reset();
    }

    return (
        <>
            <div className="py-28"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 10, 0.9), rgba(0, 0, 50, 0.5)), url(https://i.ibb.co/Csmy2GSk/plane1.png), url(https://i.ibb.co/67zLPVx5/bg.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "center",
                    backgroundPositionY: "80%",
                    backgroundSize: "cover",
                }}
            >
                <div className="flex justify-center items-center">
                    <h1 className="text-slate-100 text-6xl font-bold uppercase">Add Visas</h1>
                </div>
            </div>

            <div className="w-8/12 mx-auto py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center items-center">
                    {
                        countries.map((country) => (
                            <div key={country.id} className="btn w-28 lg:w-36 h-20 mx-auto rounded-full tooltip" data-tip={country.name} onClick={() => navigator.clipboard.writeText(country.flag)}
                                style={{
                                    backgroundImage:
                                        `url(${country.flag})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                            >
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="max-w-2xl mx-auto">
                <div className="shadow-sm py-10 px-8 lg:px-16 border rounded-2xl mb-10 mx-5 lg:mx-0">
                    <h2 className="text-4xl text-blue-800 font-bold text-center uppercase underline mb-10">Fill The Form</h2>
                    <form onSubmit={handleAddVisa} className="space-y-3">
                        <div className="flex flex-col lg:flex-row justify-between gap-2">
                            <h3 className="text-xl font font-light">Country Image Url:</h3>
                            <input name="imageUrl" type="text" placeholder="Click on the flag and copy the url" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-2">
                            <h3 className="text-xl font font-light">Country Name:</h3>
                            <select name="countryName" className="select select-bordered w-full max-w-xs" required readOnly>
                                <option disabled selected className="font-light text-gray-400">Select Your Favourite Country</option>
                                <option className="text-black">United States</option>
                                <option className="text-black">Canada</option>
                                <option className="text-black">United Kingdom</option>
                                <option className="text-black">Australia</option>
                                <option className="text-black">Germany</option>
                                <option className="text-black">France</option>
                                <option className="text-black">Japan</option>
                                <option className="text-black">India</option>
                                <option className="text-black">Bangladesh</option>
                                <option className="text-black">Norway</option>
                                <option className="text-black">United Arab Emirates</option>
                                <option className="text-black">Singapore</option>
                                <option className="text-black">Malaysia</option>
                                <option className="text-black">Nepal</option>
                                <option className="text-black">China</option>
                                <option className="text-black">Thiland</option>
                                <option></option>
                            </select>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-2">
                            <h3 className="text-xl font font-light">Visa Type:</h3>
                            <select name="visaType" className="select select-bordered w-full max-w-xs" required readOnly>
                                <option disabled selected className="font-light text-gray-400">Please select a visa type</option>
                                <option className="text-black">Tourist Visa</option>
                                <option className="text-black">Student Visa</option>
                                <option className="text-black">Official Visa</option>
                            </select>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-2">
                            <h3 className="text-xl font font-light">Visa Processing Time:</h3>
                            <select name="visaTime" className="select select-bordered w-full max-w-xs" required readOnly>
                                <option disabled selected className="font-light text-gray-400">Visa Processing Time</option>
                                <option className="text-black">3 weeks</option>
                            </select>
                        </div>
                        <div className="">
                            <div className="flex flex-col lg:flex-row justify-between gap-2">
                                <h3 className="text-xl font font-light">Required Docs:</h3>

                                <input
                                    name="requirDoc"
                                    type="text"
                                    className="input input-bordered"
                                    value={requiredDocuments.join(", ")}
                                    required readOnly
                                    placeholder="Selected documents will appear here"
                                />
                            </div>

                            <div className="max-w-xs lg:ml-56 mt-2">
                                <div>
                                    {documents.map((doc, i) => (
                                        <div key={i} className="form-control">
                                            <label className="label cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    value={doc}
                                                    checked={requiredDocuments.includes(doc)}
                                                    onChange={handleCheckboxChange}
                                                    className="checkbox"
                                                />
                                                <span className="label-text ml-2">{doc}</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-2">
                            <h3 className="text-xl font font-light">Description:</h3>
                            <textarea name="description" type="text" className="textarea textarea-bordered w-full max-w-xs" placeholder="Description" required></textarea>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-2">
                            <h3 className="text-xl font font-light">Age:</h3>
                            <input name="visaAge" type="number" placeholder="Visa Age" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-2">
                            <h3 className="text-xl font font-light">Visa Fees:</h3>
                            <input name="visaFee" type="number" placeholder="Visa Fees" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-2">
                            <h3 className="text-xl font font-light">Visa Validity:</h3>
                            <select name="visaValidity" className="select select-bordered w-full max-w-xs" required readOnly>
                                <option disabled selected className="font-light text-gray-400">Visa Validity</option>
                                <option className="text-black">3 years</option>
                            </select>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between gap-2">
                            <h3 className="text-xl font font-light">Application Method:</h3>
                            <select name="visaAppMethod" className="select select-bordered w-full max-w-xs" required readOnly>
                                <option disabled selected className="font-light text-gray-400">Visa Application Method</option>
                                <option className="text-black">Online (e-Visa)</option>
                                <option className="text-black">Visit Embassy</option>
                                <option className="text-black">Through Visa Center</option>
                            </select>
                        </div>
                        <div className="flex justify-center pt-5">
                            <button className="btn text-base text-blue-600 bg-orange-400 border-none shadow-none">Add Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddVisa;