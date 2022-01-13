import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL_API, HEADER_API } from "../../../config/urlApi";
import Swal from "sweetalert2";
//import Table from 'react-tailwind-table';
import DataTable from 'react-data-table-component';


const ItemPage = () => {
    const [data, setData] = useState()
    const [formState, setFormState] = useState({
        point: 0,
    });

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
    }, [])
    
    const columns = [
        {

            name: 'Nama Item',
            selector: row => row.name,
        },
        {
            name: 'Point Redeem',
            selector: row => row.pointRedeem,
        },
        {
            name: 'Stock',
            selector: row => {
                
            },
        },
        {
            name: 'Created At',
            selector: row => row.createdAt,
        },
        {
            name: 'Updated At',
            selector: row => row.updatedAt,
        },
    ];

    const set = name => {
        return ({ target: { value } }) => {
            setFormState(oldValues => ({ ...oldValues, [name]: value }));
        }
    };


    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-y-5 gap-x-5 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 xl:grid-cols-1 xl:gap-x-1 ">
                <div className="mt-10 w-full aspect-w-0 aspect-h-0 flex justify-center">
                    <div className="basis-full px-5 xl:px-0">
                        <DataTable
                            columns={columns}
                            data={data}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemPage;