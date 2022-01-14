import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL_API, HEADER_API } from "../../../config/urlApi";
import Swal from "sweetalert2";
import Table, {SelectColumnFilter} from '../../../components/Table'


const TransactionPage = () => {
    const [data, setData] = useState()
    const [formState, setFormState] = useState({
        point: 0,
    });

    useEffect(() => {
        axios.get(BASE_URL_API + 'transaction')
            .then(function (response) {
                console.log(response.data.data);
                setData(response.data.data)
                //console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }, [])

    const columns = [
        {
            Header: 'Transaction',
            accessor: 'transaction',
        },
        {
            Header: 'Date',
            accessor: 'transactionDate',
        },
        {
            Header: 'Point',
            accessor: 'point',
        },
        {
            Header: 'Attachment',
            accessor: 'transactionAttachment',
        },
        {
            Header: 'Description',
            accessor: 'description',
        },
        {
            Header: 'Status',
            accessor: 'status',
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

export default TransactionPage;