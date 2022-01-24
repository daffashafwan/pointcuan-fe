import React, { useContext } from "react";
import { useTable, useGlobalFilter, useAsyncDebounce, useFilters, useSortBy, usePagination } from "react-table";
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { Button, PageButton } from "./Button"
import { AdminContext } from "../contexts/AdminContext";
import { classNames } from "../utils/Utils";
import DateObject from "react-date-object";

export function ActionButton({ value, column, row }) {
    const { onEdit, setOnEdit, openModal, setContextData, onDelete, setOnDelete } = useContext(AdminContext)
    return (
        <div className="items-center mx-3">
            <div className="grid grid-cols-2">
                <div className="grid grid-rows-1">
                    <button
                        type="button"
                        onClick={() => {
                            setContextData(row.original)
                            setOnEdit(true)
                            openModal()
                        }}
                        className="w-1/8 border rounded-xl px-5 mr-1 py-2 bg-green-500 font-sans text-white font-bold"
                    >
                        Edit
                    </button>
                </div>
                <div className="grid grid-rows-1">
                    <button
                        type="button"
                        onClick={() => {
                            setContextData(row.original)
                            setOnDelete(true)
                        }}
                        className="w-1/8 border rounded-xl px-5 py-2 bg-red-500 font-sans text-white font-bold"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export function ApprovalButton({ value, column, row }) {
    const { onEdit, setOnEdit, openModal, setContextData, onDelete, setOnDelete, setApprove } = useContext(AdminContext)
    return (
        <div className="items-center mx-3">
            <div className="grid grid-cols-2">
                <div className="grid grid-rows-1">
                    <button
                        type="button"
                        onClick={() => {
                            setContextData(row.original)
                            setOnEdit(true)
                            openModal()
                        }}
                        disabled={row.original.status === 0 ? false : true}
                        className={classNames(
                            "w-1/8 border rounded-xl px-5 mr-1 py-2",
                            row.original.status === 0 ? "bg-orange-500 font-sans text-white font-bold" : "bg-gray-500 font-sans text-white font-bold"
                        )}
                    >
                        Approve
                    </button>
                </div>
            </div>
        </div>
    );
}

export function ViewButton({ value, column, row }) {
    const { onEdit, setOnEdit, openModal, setContextData, onDelete, setOnDelete, setApprove } = useContext(AdminContext)
    return (
        <div className="items-center mx-3">
            <div className="grid grid-cols-2">
                <div className="grid grid-rows-1">
                    <button
                        type="button"
                        onClick={() => {
                            setContextData(row.original)
                            openModal()
                        }}
                        className="w-1/8 border rounded-xl px-5 mr-1 py-2 bg-orange-500 font-sans text-white font-bold"
                    >
                        View Point
                    </button>
                </div>
            </div>
        </div>
    );
}

export function StatusPill({ value }) {
    const status = value === 0 ? "Proses" : (value === 1 ? "Ditolak" : "Diterima");

    return (
        <span
            className={classNames(
                "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
                status.startsWith("Diterima") ? "bg-green-100 text-green-700" : null,
                status.startsWith("Proses") ? "bg-yellow-100 text-yellow-700" : null,
                status.startsWith("Ditolak") ? "bg-red-100 text-red-700" : null
            )}
        >
            {status}
        </span>
    );
}

export function StatusPill2({ value }) {
    const status = value == 0 ? "Tidak Aktif" : "Aktif";
    return (
        <span
            className={classNames(
                "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
                status.startsWith("Aktif") ? "bg-green-100 text-green-700" : null,
                status.startsWith("Tidak Aktif") ? "bg-red-100 text-red-700" : null
            )}
        >
            {status}
        </span>
    );
}

export function DateRenderer({ value }) {
    var date = new DateObject(value);
    var dateParsed = date.format("DD-MM-YYYY")
    return (
        dateParsed
    );
}

export function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
}) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
        const options = new Set();
        preFilteredRows.forEach((row) => {
            options.add(row.values[id]);
        });
        return [...options.values()];
    }, [id, preFilteredRows]);

    // Render a multi-select box
    return (
        <select
            name={id}
            id={id}
            value={filterValue}
            onChange={(e) => {
                setFilter(e.target.value || undefined);
            }}
        >
            <option value="">All</option>
            {options.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <label className="flex gap-x-2 items-baseline">
            <span className="text-gray-700">Search: </span>
            <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
            />
        </label>
    )
}

function Table({ columns, data, isSearch, isPagination }) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        prepareRow,
        state,
        preGlobalFilteredRows,
        setGlobalFilter } =
        useTable({
            columns,
            data,
        },
            useGlobalFilter,
            useFilters,
            useSortBy,
            usePagination
        );

    // Render the UI for your table
    return (
        <>
            {isSearch ?
                <div className="flex gap-x-2">
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={state.globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />

                    {headerGroups.map((headerGroup) =>
                        headerGroup.headers.map((column) =>
                            column.Filter ? (
                                <div key={column.id}>
                                    <label for={column.id}>{column.render("Header")}: </label>
                                    {column.render("Filter")}
                                </div>
                            ) : null
                        )
                    )}
                </div> :
                null
            }
            <div className="mt-2 flex flex-col">
                <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    {headerGroups.map(headerGroup => (
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map(column => (
                                                // Add the sorting props to control sorting. For this example
                                                // we can add them into the header props
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                                >
                                                    {column.render('Header')}
                                                    {/* Add a sort direction indicator */}
                                                    <span>
                                                        {column.isSorted
                                                            ? column.isSortedDesc
                                                                ? ' ▼'
                                                                : ' ▲'
                                                            : ''}
                                                    </span>
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody
                                    {...getTableBodyProps()}
                                    className="bg-white divide-y divide-gray-200"
                                >
                                    {page.map((row, i) => {  // new
                                        prepareRow(row)
                                        return (
                                            <tr {...row.getRowProps()}>
                                                {row.cells.map(cell => {
                                                    return (
                                                        <td
                                                            {...cell.getCellProps()}
                                                            className="px-6 py-4 whitespace-nowrap"
                                                        >
                                                            {cell.render('Cell')}
                                                        </td>
                                                    )
                                                })}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {isPagination ?
                <div className="py-3 flex items-center justify-between">
                    <div className="flex-1 flex justify-between sm:hidden">
                        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
                        <Button onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div className="flex gap-x-2">
                            <span className="text-sm text-gray-700">
                                Page <span className="font-medium">{state.pageIndex + 1}</span> of <span className="font-medium">{pageOptions.length}</span>
                            </span>
                            <select
                                value={state.pageSize}
                                onChange={e => {
                                    setPageSize(Number(e.target.value))
                                }}
                            >
                                {[5, 10, 20].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                <PageButton
                                    className="rounded-l-md"
                                    onClick={() => gotoPage(0)}
                                    disabled={!canPreviousPage}
                                >
                                    <span className="sr-only">First</span>
                                    <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
                                </PageButton>
                                <PageButton
                                    onClick={() => previousPage()}
                                    disabled={!canPreviousPage}
                                >
                                    <span className="sr-only">Previous</span>
                                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                </PageButton>
                                <PageButton
                                    onClick={() => nextPage()}
                                    disabled={!canNextPage
                                    }>
                                    <span className="sr-only">Next</span>
                                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                </PageButton>
                                <PageButton
                                    className="rounded-r-md"
                                    onClick={() => gotoPage(pageCount - 1)}
                                    disabled={!canNextPage}
                                >
                                    <span className="sr-only">Last</span>
                                    <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
                                </PageButton>
                            </nav>
                        </div>
                    </div>
                </div> : null
            }
        </>
    );
}

export default Table;