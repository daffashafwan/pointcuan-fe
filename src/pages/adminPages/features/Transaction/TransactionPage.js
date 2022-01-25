import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL_API, HEADER_API_ADMIN } from "../../../../config/urlApi";
import Swal from "sweetalert2";
import Table, { CurrencyRenderer, ApprovalButton, StatusPill, DateRenderer } from '../../../../components/Table'
import { AdminContext } from "../../../../contexts/AdminContext";
import FormPage from "./FormPage";

const TransactionPage = () => {
    const { contextData, onDelete, isModalOpen } = useContext(AdminContext)
    const [data, setData] = useState()
    const [formState, setFormState] = useState({
        point: 0,
    });

    useEffect(() => {
        axios.get(BASE_URL_API + 'transaction', HEADER_API_ADMIN)
            .then(function (response) {
                setData(response.data.data)
                //console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error.response);
            });
    },[])

    useEffect(() => {
        axios.get(BASE_URL_API + 'transaction', HEADER_API_ADMIN)
            .then(function (response) {
                setData(response.data.data)
                //console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }, [isModalOpen])

    const columns = [
        {
            Header: 'Transaction',
            accessor: 'transaction',
            Cell: CurrencyRenderer
        },
        {
            Header: 'User',
            accessor: 'user.Name',
        },
        {
            Header: 'Date',
            accessor: 'transactionDate',
            Cell: DateRenderer
        },
        {
            Header: 'Point',
            accessor: 'point',
        },
        {
            Header: 'Description',
            accessor: 'description',
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: StatusPill
        },
        {
            Header: 'Action',
            Cell: ApprovalButton,
        },
    ];

    const set = name => {
        return ({ target: { value } }) => {
            setFormState(oldValues => ({ ...oldValues, [name]: value }));
        }
    };

    // const handleUpdate = () => {
    //     var bodyFormData = {
    //         pcrValue: formState.point,
    //     }
    //     console.log(bodyFormData)
    //     Swal.fire({
    //         title: 'Update Point',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axios.put(BASE_URL_API + 'pcr', bodyFormData)
    //                 .then(function (response) {
    //                     console.log(response.data);
    //                     Swal.fire(
    //                         'Berhasil Update!',
    //                         'PCR Berhasil Diupdate',
    //                         'success'
    //                     )
    //                     setPoint(bodyFormData.pcrValue)
    //                 })
    //                 .catch(function (error) {
    //                     console.log(error.response);
    //                 });
    //         }
    //     })
    // }

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-y-5 gap-x-5 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 xl:grid-cols-1 xl:gap-x-1 ">
                <div className="mt-10 w-full aspect-w-0 aspect-h-0 flex justify-center">
                    <div className="basis-full px-5 xl:px-0">
                        {isModalOpen ?
                            <FormPage />
                            : null

                        }
                        {data ?
                            <Table
                                isPagination={true}
                                isSearch={true}
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

export default TransactionPage;