import React, { useState, useEffect, useContext } from "react";
import { AdminContext } from "../../../../contexts/AdminContext";
import Swal from "sweetalert2";
import axios from "axios";
import { BASE_URL_API, HEADER_API } from "../../../../config/urlApi";

const FormPage = () => {
    const [data, setData] = useState()
    const { contextData, onEdit, setOnEdit, closeModal, openModal, isModalOpen } = useContext(AdminContext)
    useEffect(() => {
        axios.get(BASE_URL_API + 'categoryitems')
            .then(function (response) {
                setData(response.data.data)
                //console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }, [])

    const [formState, setFormState] = useState({
        description: "",
    });

    useEffect(() => {
        if (onEdit) {
            setFormState({
                description: contextData.description,
            })
        }
    }, [onEdit])

    const handleApprove = (isApprove) => {
        console.log(contextData)
        if (formState.description === "" && isApprove) {
            Swal.fire(
                'Gagal Update Item',
                'Field Belum Terisi',
                'warning'
            )
        } else {
            var bodyFormData = {
                point: contextData.point,
                transaction: contextData.transaction,
                transactionAttachment: contextData.transactionAttachment,
                transactionDate: contextData.transactionDate,
                userId: contextData.userId,
                description: formState.description,
                status: isApprove ? 2 : 1
            }
            console.log(bodyFormData)
            axios.put(BASE_URL_API + 'transaction/' + contextData.id, bodyFormData)
                .then(function (response) {
                    console.log(response.data);
                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil Update Data',
                        showConfirmButton: false,
                        timer: 1000
                    });
                    setFormState({
                        description: "",
                    })
                    setTimeout(function () {
                        setOnEdit(false)
                        closeModal()
                    }, 1000)

                })
                .catch(function (error) {
                    console.log(error.response);
                });
        }
    }

    const set = name => {
        return ({ target: { value } }) => {
            setFormState(oldValues => ({ ...oldValues, [name]: value }));
        }
    };
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
                                Kategori Baru
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
                            <img src="https://lh5.googleusercontent.com/44xjYt5EHFXELHp3Txw1OaxxHd7mVsxRB0kLgOkDlpVkX5fb5g0n2URRRU6Lcb4mimdzlCuxhZ6DPeCJxTg9GqEI7rnqJSazco80_h6wNjvcCxnL7Ek-hiQoa5ls5SdcAcmYHlEq=s0" />
                        </div>
                        <div className="relative p-6 flex-auto">
                            <input
                                type="text"
                                value={formState.description}
                                onChange={set('description')}
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="Deskripsi"
                            />
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <div>
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                        if (onEdit) {
                                            setOnEdit(false)
                                        }
                                        closeModal()
                                    }}
                                >
                                    Tutup
                                </button>
                            </div>
                            <div>
                                <button
                                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                        handleApprove(false)
                                    }

                                    }
                                >
                                    Tolak
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                        handleApprove(true)
                                    }
                                    }
                                >
                                    Terima
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