import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL_API, HEADER_API_ADMIN } from "../../../../config/urlApi";
import Swal from "sweetalert2";
import Table, {SelectColumnFilter, ActionButton, DateRenderer} from '../../../../components/Table'
import { AdminContext } from "../../../../contexts/AdminContext";
import FormPage from "./FormPage";

const ItemPage = () => {
    const { openModal, isModalOpen, setOnDelete, contextData, onDelete } = useContext(AdminContext)
    const [data, setData] = useState()

    useEffect(() => {
        axios.get(BASE_URL_API + 'items', HEADER_API_ADMIN)
            .then(function (response) {
                console.log(response.data.data);
                setData(response.data.data)
                //console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }, [])

    useEffect(() => {
        axios.get(BASE_URL_API + 'items')
            .then(function (response) {
                console.log(response.data.data);
                setData(response.data.data)
                //console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }, [isModalOpen, onDelete])

    useEffect(() => {
        if (onDelete) {
            handleDelete()
        }
    }, [onDelete])

    const handleDelete = () => {
        Swal.fire({
            title: 'Delete Item',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(BASE_URL_API + 'items/' + contextData.id)
            .then(function (response) {
                console.log(response.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil Hapus Data',
                    showConfirmButton: false,
                    timer: 1000
                });
                setTimeout(function () {
                    setOnDelete(false)
                }, 1000)
            })
            .catch(function (error) {
                console.log(error.response);
            });
            }else{
                setOnDelete(false)
            }
        })
    }
    
    const columns = [
        {

            Header: 'Nama Item',
            accessor: 'name',
        },
        {
            Header: 'Point Redeem',
            accessor: 'pointRedeem',
        },
        {
            Header: 'Stock',
            accessor: 'stock'
        },
        {
            Header: 'Kategori',
            accessor: 'category.Name'
        },
        {
            Header: 'Created At',
            accessor: 'createdAt',
            Cell: DateRenderer
        },
        {
            Header: 'Updated At',
            accessor: 'updatedAt',
            Cell: DateRenderer
        },
        {
            Header: 'Action',
            Cell: ActionButton
        }
    ];

    return (
        <div className="container mx-auto">
             <button
                type="button"
                onClick={() => openModal()}
                className="w-1/8 border mt-10 rounded-xl px-5 py-2 bg-orange-500 font-sans text-white font-bold"
            >
                Tambah Item
            </button>
            <div className="grid grid-cols-4 gap-y-5 gap-x-5 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 xl:grid-cols-1 xl:gap-x-1 ">
                <div className="mt-10 w-full aspect-w-0 aspect-h-0 flex justify-center">
                    <div className="basis-full px-5 xl:px-0">
                    {isModalOpen ?
                           <FormPage/>
                            : null

                        }
                    {data ?
                            <Table
                                columns={columns}
                                data={data}
                            />
                            : "loading"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemPage;