import React, { useState, useEffect, useContext } from "react";
import { AdminContext } from "../../../../contexts/AdminContext";
import Swal from "sweetalert2";
import axios from "axios";
import { BASE_URL_API, HEADER_API_ADMIN } from "../../../../config/urlApi";

const FormPage = () => {
    const [data, setData] = useState()
    const { contextData, onEdit, setOnEdit, closeModal, openModal, isModalOpen } = useContext(AdminContext)
    useEffect(() => {
        axios.get(BASE_URL_API + 'admin/users/'+contextData.id, HEADER_API_ADMIN)
            .then(function (response) {
                setData(response.data.data)
                console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }, [])
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Point User
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => closeModal()}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <input
                                type="text"
                                value={data ? data.point : "loading"}
                                readOnly
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <div>
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                        closeModal()
                                    }}
                                >
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default FormPage;