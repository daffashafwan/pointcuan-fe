import React, { useState, useEffect, useContext } from "react";
import { AdminContext } from "../../../../contexts/AdminContext";
import Swal from "sweetalert2";
import axios from "axios";
import { BASE_URL_API, HEADER_API_ADMIN } from "../../../../config/urlApi";
import parse from 'html-react-parser'
import Select from "react-select";

const FormPage = () => {
    const [formState, setFormState] = useState({
        category: "",
        svg: ""
    });
    const [option, setOption] = useState()
    const { contextData, onEdit, setOnEdit, closeModal, openModal, isModalOpen } = useContext(AdminContext)
    useEffect(() => {
        if (onEdit) {
            formState.category = contextData.name
            formState.svg = contextData.svg
            console.log(JSON.parse(contextData.svg))
            setOption(JSON.parse(contextData.svg))
        }
    }, [onEdit])

    const dataIcon = [
        {
            iconName: "Phone",
            svg: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 70 69"
          >
            <circle cx="35.359" cy="34.473" r="34.473" fill="#516BEB"></circle>
            <path
              fill="#fff"
              d="M22.78 23.466a1.573 1.573 0 011.572-1.572h3.386a1.572 1.572 0 011.55 1.314l1.163 6.974a1.573 1.573 0 01-.849 1.667l-2.434 1.215a17.355 17.355 0 009.6 9.6l1.217-2.434a1.572 1.572 0 011.665-.85l6.974 1.164a1.573 1.573 0 011.315 1.55v3.386a1.572 1.572 0 01-1.573 1.573h-3.145c-11.29 0-20.441-9.152-20.441-20.442v-3.145z"
            ></path>
          </svg>
            `
        },
        {
            iconName: "Ticket",
            svg: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 70 69"
          >
            <circle cx="35.359" cy="34.473" r="34.473" fill="#516BEB"></circle>
            <path
              fill="#fff"
              d="M19 29.2c0-.902.421-1.767 1.172-2.404.75-.638 1.767-.996 2.828-.996h24c1.06 0 2.078.358 2.828.996.75.637 1.172 1.502 1.172 2.404v3.4c-1.06 0-2.078.358-2.828.996C47.422 34.233 47 35.098 47 36c0 .901.421 1.766 1.172 2.404.75.638 1.767.996 2.828.996v3.4c0 .902-.421 1.766-1.172 2.404-.75.638-1.767.996-2.828.996H23c-1.06 0-2.078-.358-2.828-.996S19 43.702 19 42.8v-3.4c1.06 0 2.078-.358 2.828-.996S23 36.901 23 36c0-.902-.421-1.767-1.172-2.404-.75-.638-1.767-.996-2.828-.996v-3.4z"
            ></path>
          </svg>`
        },
        {
            iconName: "Electric",
            svg: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 70 69"
          >
            <circle cx="35.359" cy="34.473" r="34.473" fill="#516BEB"></circle>
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M37.414 20.083c.377.117.706.35.94.665.234.314.36.694.36 1.084V31h7.428c.34 0 .673.091.963.265.291.174.528.423.685.72a1.814 1.814 0 01-.125 1.899l-13 18.333c-.225.32-.55.56-.923.686a1.88 1.88 0 01-1.157.013 1.857 1.857 0 01-.94-.664 1.817 1.817 0 01-.359-1.085v-9.167h-7.428c-.34 0-.673-.092-.963-.266a1.843 1.843 0 01-.685-.72 1.814 1.814 0 01.125-1.898l13-18.333c.226-.32.55-.56.924-.685a1.88 1.88 0 011.155-.012v-.002z"
              clipRule="evenodd"
            ></path>
          </svg>`
        },
        {
            iconName: "Signal",
            svg: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 70 69"
          >
            <circle cx="35.453" cy="34.473" r="34.473" fill="#516BEB"></circle>
            <path
              fill="#fff"
              d="M27.5 20.7a1.9 1.9 0 000 3.8c10.494 0 19 8.507 19 19a1.9 1.9 0 003.8 0c0-12.591-10.209-22.8-22.8-22.8z"
            ></path>
            <path
              fill="#fff"
              d="M25.6 32.1a1.9 1.9 0 011.9-1.9 13.3 13.3 0 0113.3 13.3 1.9 1.9 0 01-3.8 0 9.5 9.5 0 00-9.5-9.5 1.9 1.9 0 01-1.9-1.9zm-1.9 11.4a3.8 3.8 0 117.6 0 3.8 3.8 0 01-7.6 0z"
            ></path>
          </svg>`
        },
        {
            iconName: "Save",
            svg: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 70 69"
          >
            <circle cx="35.359" cy="34.473" r="34.473" fill="#516BEB"></circle>
            <path
              fill="#fff"
              d="M30.643 34.557a1.9 1.9 0 10-2.686 2.686l5.7 5.7a1.9 1.9 0 002.686 0l5.7-5.7a1.9 1.9 0 00-2.686-2.686L36.9 37.014V26.4h9.5a3.8 3.8 0 013.8 3.8v13.3a3.8 3.8 0 01-3.8 3.8H23.6a3.8 3.8 0 01-3.8-3.8V30.2a3.8 3.8 0 013.8-3.8h9.5v10.614l-2.457-2.457zM33.1 22.6a1.9 1.9 0 013.8 0v3.8h-3.8v-3.8z"
            ></path>
          </svg>
            `
        },
    ]

    

    const handleEdit = () => {
        if (formState.category === "") {
            Swal.fire(
                'Gagal Update Kategori',
                'Kategori Belum Terisi',
                'warning'
            )
        } else {
            var bodyFormData = {
                category: formState.category,
                svg: JSON.stringify(option)
            }
            console.log(bodyFormData)
            console.log(contextData.id)
            axios.put(BASE_URL_API + 'categoryitems/' + contextData.id, bodyFormData, HEADER_API_ADMIN)
                .then(function (response) {
                    console.log(response.data);
                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil Update Data',
                        showConfirmButton: false,
                        timer: 1000
                    });
                    setFormState({
                        category: ""
                    })
                    setOption()
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

    const handleCreate = () => {
        if (formState.category === "") {
            Swal.fire(
                'Gagal Menambahkan Kategori',
                'Kategori Belum Terisi',
                'warning'
            )
        } else {
            var bodyFormData = {
                category: formState.category,
                svg: JSON.stringify(option)
            }
            console.log(bodyFormData)
            axios.post(BASE_URL_API + 'categoryitems', bodyFormData, HEADER_API_ADMIN)
                .then(function (response) {
                    console.log(response.data);
                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil Tambah Data',
                        showConfirmButton: false,
                        timer: 1000
                    });
                    setOption()
                    setTimeout(function () {
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
                            <input
                                type="text"
                                value={formState.category}
                                onChange={set('category')}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="Nama Kategori"
                            />
                        </div>
                        <div className="relative p-6 flex-auto">
                            <Select
                                name="categoryId"
                                options={dataIcon}
                                value={option}
                                onChange={setOption}
                                getOptionLabel={(option) => option.iconName}
                                getOptionValue={(option) => option.svg} // It should be unique value in the options. E.g. ID
                            />
                            <div className="mt-4 border-0 p-5 items-center rounded-lg shadow-lg relative flex flex-col items-center w-full bg-white">
                                {option ? parse(option.svg) : "Loading"}
                            </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
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
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                    console.log(onEdit)
                                    if (onEdit) {
                                        handleEdit()
                                    } else {
                                        handleCreate()
                                    }
                                }

                                }
                            >
                                Tambah
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default FormPage;