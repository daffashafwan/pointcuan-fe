import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL_API, HEADER_API_ADMIN } from "../../../config/urlApi";
import { AdminContext } from "../../../contexts/AdminContext";
import Swal from "sweetalert2";

const PCRPage = () => {
    const { menu } = useContext(AdminContext)
    const [point, setPoint] = useState(0)
    const [formState, setFormState] = useState({
        point: 0,
    });

    useEffect(() => {
        console.log(HEADER_API_ADMIN)
        axios.get(BASE_URL_API + 'pcr', HEADER_API_ADMIN)
            .then(function (response) {
                setPoint(response.data.data.pcrValue)
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }, [])

    const set = name => {
        return ({ target: { value } }) => {
            setFormState(oldValues => ({ ...oldValues, [name]: value }));
        }
    };

    const handleUpdate = () => {
        var bodyFormData = {
            pcrValue: formState.point,
        }
        console.log(bodyFormData)
        Swal.fire({
            title: 'Update Point',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(BASE_URL_API + 'pcr', bodyFormData)
                    .then(function (response) {
                        console.log(response.data);
                        Swal.fire(
                            'Berhasil Update!',
                            'PCR Berhasil Diupdate',
                            'success'
                        )
                        setPoint(bodyFormData.pcrValue)
                    })
                    .catch(function (error) {
                        console.log(error.response);
                    });
            }
        })
    }

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 xl:grid-cols-1 xl:gap-x-1 ">
                <div className="mt-10 w-full aspect-w-0 aspect-h-0 flex">
                    <form className="xl:basis-1/2 basis-full px-5 xl:px-0">
                        <div className="grid inline text-left  mb-10 mt-20 xl:mt-40">
                            <h1 className="inline font-sans text-3xl xl:text-4xl text-left font-medium text-orange-500">
                                PCR (Point Conversion Rate)
                            </h1>
                            <p className="inline font-sans text-3xl xl:text-3xl font-medium text-black">
                                Point Sekarang : {point}
                            </p>
                        </div>
                        <div>
                            <input
                                id="pcr"
                                name="pcr"
                                type="number"
                                value={formState.point}
                                onChange={set('point')}
                                required
                                placeholder="PCR"
                                className="w-full py-2 px-3 text-primary border border-gray-600 rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4"
                            />
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={() => handleUpdate()}
                                className="w-full border  rounded-xl px-5 py-2 bg-orange-500 font-sans text-white font-bold "
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PCRPage;