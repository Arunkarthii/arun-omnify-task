"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, Calendar, ChevronDown, Hash, MoreHorizontal, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const data: Payment[] = [
    {
        id: 1,
        payer: 'Theodore T.C. Calvin',
        email: 'theodore@gmail.com',
        phone: '966559186876',
        service: 'Private Language Session',
        status: 'Active',
        createdOn: 'Sun, 07 Jan 2024 2:42 PM',
        scheduled: 'Mon, 08 Jan 2024 2:00 PM',
    },
    {
        id: 2,
        payer: 'Higgins Jonathan',
        email: 'higgins@gmail.com',
        phone: '966559186877',
        service: 'Group Language Session',
        status: 'Inactive',
        createdOn: 'Tue, 09 Jan 2024 11:15 AM',
        scheduled: 'Wed, 10 Jan 2024 1:00 PM',
    },
    {
        id: 3,
        payer: 'Thomas Sullivan Magnum',
        email: 'magnum@gmail.com',
        phone: '966559186878',
        service: 'Private Language Session',
        status: 'Lead',
        createdOn: 'Mon, 08 Jan 2024 3:30 PM',
        scheduled: 'Tue, 09 Jan 2024 10:00 AM',
    },
    {
        id: 4,
        payer: 'Juliet Higgins',
        email: 'juliet@gmail.com',
        phone: '966559186879',
        service: 'Group Language Session',
        status: 'Active',
        createdOn: 'Wed, 10 Jan 2024 9:45 AM',
        scheduled: 'Thu, 11 Jan 2024 2:30 PM',
    },
    {
        id: 5,
        payer: 'Rick Wright',
        email: 'rick@gmail.com',
        phone: '966559186880',
        service: 'Private Language Session',
        status: 'Inactive',
        createdOn: 'Thu, 11 Jan 2024 4:50 PM',
        scheduled: 'Fri, 12 Jan 2024 12:00 PM',
    },
    {
        id: 6,
        payer: 'T.C. Calvin',
        email: 'tc@gmail.com',
        phone: '966559186881',
        service: 'Group Language Session',
        status: 'Lead',
        createdOn: 'Fri, 12 Jan 2024 7:15 AM',
        scheduled: 'Sat, 13 Jan 2024 11:00 AM',
    },
    {
        id: 7,
        payer: 'Luther Gillis',
        email: 'luther@gmail.com',
        phone: '966559186882',
        service: 'Private Language Session',
        status: 'Active',
        createdOn: 'Sat, 13 Jan 2024 5:20 PM',
        scheduled: 'Sun, 14 Jan 2024 3:00 PM',
    },
    {
        id: 8,
        payer: 'Carol Baldwin',
        email: 'carol@gmail.com',
        phone: '966559186883',
        service: 'Group Language Session',
        status: 'Inactive',
        createdOn: 'Sun, 14 Jan 2024 6:30 PM',
        scheduled: 'Mon, 15 Jan 2024 1:30 PM',
    },
    {
        id: 9,
        payer: 'Mac Reynolds',
        email: 'mac@gmail.com',
        phone: '966559186884',
        service: 'Private Language Session',
        status: 'Lead',
        createdOn: 'Mon, 15 Jan 2024 8:10 AM',
        scheduled: 'Tue, 16 Jan 2024 2:15 PM',
    },
    {
        id: 10,
        payer: 'Katsumoto',
        email: 'katsumoto@gmail.com',
        phone: '966559186885',
        service: 'Group Language Session',
        status: 'Active',
        createdOn: 'Tue, 16 Jan 2024 11:50 AM',
        scheduled: 'Wed, 17 Jan 2024 3:45 PM',
    },
    {
        id: 11,
        payer: 'Michelle Hue',
        email: 'michelle@gmail.com',
        phone: '966559186886',
        service: 'Private Language Session',
        status: 'Inactive',
        createdOn: 'Wed, 17 Jan 2024 2:30 PM',
        scheduled: 'Thu, 18 Jan 2024 4:00 PM',
    },
    {
        id: 12,
        payer: 'Lily Katayama',
        email: 'lily@gmail.com',
        phone: '966559186887',
        service: 'Group Language Session',
        status: 'Lead',
        createdOn: 'Thu, 18 Jan 2024 5:45 PM',
        scheduled: 'Fri, 19 Jan 2024 9:00 AM',
    },
    {
        id: 13,
        payer: 'Francis Hofstetler',
        email: 'francis@gmail.com',
        phone: '966559186888',
        service: 'Private Language Session',
        status: 'Active',
        createdOn: 'Fri, 19 Jan 2024 8:20 AM',
        scheduled: 'Sat, 20 Jan 2024 1:00 PM',
    },
    {
        id: 14,
        payer: 'Danny Williams',
        email: 'danny@gmail.com',
        phone: '966559186889',
        service: 'Group Language Session',
        status: 'Inactive',
        createdOn: 'Sat, 20 Jan 2024 11:10 AM',
        scheduled: 'Sun, 21 Jan 2024 10:00 AM',
    },
    {
        id: 15,
        payer: 'Steve McGarrett',
        email: 'steve@gmail.com',
        phone: '966559186890',
        service: 'Private Language Session',
        status: 'Lead',
        createdOn: 'Sun, 21 Jan 2024 1:50 PM',
        scheduled: 'Mon, 22 Jan 2024 12:00 PM',
    },
    {
        id: 16,
        payer: 'Kono Kalakaua',
        email: 'kono@gmail.com',
        phone: '966559186891',
        service: 'Group Language Session',
        status: 'Active',
        createdOn: 'Mon, 22 Jan 2024 4:00 PM',
        scheduled: 'Tue, 23 Jan 2024 11:30 AM',
    },
    {
        id: 17,
        payer: 'Chin Ho Kelly',
        email: 'chin@gmail.com',
        phone: '966559186892',
        service: 'Private Language Session',
        status: 'Inactive',
        createdOn: 'Tue, 23 Jan 2024 9:25 AM',
        scheduled: 'Wed, 24 Jan 2024 3:00 PM',
    },
    {
        id: 18,
        payer: 'Catherine Rollins',
        email: 'catherine@gmail.com',
        phone: '966559186893',
        service: 'Group Language Session',
        status: 'Lead',
        createdOn: 'Wed, 24 Jan 2024 6:40 PM',
        scheduled: 'Thu, 25 Jan 2024 8:00 AM',
    },
    {
        id: 19,
        payer: 'Duke Lukela',
        email: 'duke@gmail.com',
        phone: '966559186894',
        service: 'Private Language Session',
        status: 'Active',
        createdOn: 'Thu, 25 Jan 2024 7:55 AM',
        scheduled: 'Fri, 26 Jan 2024 2:45 PM',
    },
    {
        id: 20,
        payer: 'Lou Grover',
        email: 'lou@gmail.com',
        phone: '966559186895',
        service: 'Group Language Session',
        status: 'Inactive',
        createdOn: 'Fri, 26 Jan 2024 12:00 PM',
        scheduled: 'Sat, 27 Jan 2024 1:15 PM',
    }
];

export type Payment = {
    id: number,
    payer: string,
    email: string,
    phone: string,
    service: string,
    status: string,
    createdOn: string,
    scheduled: string,
}

export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "createdOn",
        header: ({ column }) => {
            return (
                <div>
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        <Calendar className="me-2 h-4 w-4" />
                        Created On

                    </Button>
                </div>
            )
        },
        cell: ({ row }) => <div className="">{row.getValue("createdOn")}</div>,
    },
    {
        accessorKey: "payer",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <User className="me-2 h-4 w-4" />
                    Payer

                </Button>
            )
        },
        cell: ({ row }) => <div className="">{row.getValue("payer")}</div>,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status: string = row.getValue("status");
            switch (status) {
                case 'Lead':
                    return <div className="px-2 py-1 text-[#3B82F6] flex items-center w-[58px] bg-blue-100 text-xs rounded-2xl">
                        <div className="bg-[#3B82F6] me-1 h-2 w-2 rounded-full"></div>
                        <span>{status}</span>
                    </div>
                case 'Active':
                    return <div className="px-2 py-1 text-[#15803D] w-16 flex items-center bg-green-100 text-xs rounded-2xl">
                        <div className="bg-[#15803D] me-1 h-2 w-2 rounded-full"></div>
                        <span>{status}</span>
                    </div>
                case 'Inactive':
                    return <div className="px-2 py-1 text-[#334155] flex items-center bg-blue-100 text-xs rounded-2xl">
                        <div className="bg-[#334155] me-1 h-2 w-2 rounded-full"></div>
                        <span>{status}</span>
                    </div>
                default:
                    return <div className="px-2 py-1 text-[#3B82F6] flex items-center bg-blue-100 text-xs rounded-2xl">
                        <div className="bg-[#3B82F6] me-1 h-2 w-2 rounded-full"></div>
                        <span>{status}</span>
                    </div>
            }
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <Hash className="me-2 h-4 w-4" />
                    Email

                </Button>
            )
        },
        cell: ({ row }) => <div className="">{row.getValue("email")}</div>,
    },
    {
        accessorKey: "phone",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <Hash className="me-2 h-4 w-4" />
                    Payer Phone

                </Button>
            )
        },
        cell: ({ row }) => <div className="">+91 +{row.getValue("phone")}</div>,
    },
    {
        accessorKey: "service",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <Hash className="me-2 h-4 w-4" />
                    Services

                </Button>
            )
        },
        cell: ({ row }) => <div className="">{row.getValue("service")}</div>,
    },
    {
        accessorKey: "scheduled",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <Calendar className="me-2 h-4 w-4" />
                    Scheduled

                </Button>
            )
        },
        cell: ({ row }) => <div className="">+91 +{row.getValue("scheduled")}</div>,
    },
]


export default function Outlet() {

    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})




    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })




    return (
        <>
            <h1 className="font-bold text-[#334155] text-xl md:text-2xl">Waitlist</h1>
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 mt-4 md:mt-8">
                <div className="w-full md:w-[300px] cursor-pointer border-2 border-[#64748B] p-2 rounded-md">
                    <h1 className="font-medium">All Waitlists <span className="text-[#334155] font-normal text-xs ms-1">100</span></h1>
                </div>
                <div className="w-full md:w-[300px] cursor-pointer border-2 border-slate-200 hover:border-[#64748B] p-2 rounded-md">
                    <h1 className="font-medium">Newly Added <span className="text-[#334155] font-normal text-xs ms-1">50</span></h1>
                </div>
                <div className="w-full md:w-[300px] cursor-pointer border-2  border-slate-200 hover:border-[#64748B] p-2 rounded-md">
                    <h1 className="font-medium">Leads <span className="text-[#334155] font-normal text-xs ms-1">20</span></h1>
                </div>
            </div>
            <div className="mt-8 flex justify-between items-center">
                <button className="border-none p-2 h-10 shadow text-sm text-[#334155] font-medium bg-slate-50 rounded-md flex items-center">
                    <img className="h-4 me-2" src="/images/filter.png" alt="filter" />
                    Add Filter
                </button>
                <div className="flex items-center">
                    <div className="relative">
                        <input
                            className="h-10 rounded-md w-56 shadow ps-9 "
                            type="text"
                            value={(table.getColumn("payer")?.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                                table.getColumn("payer")?.setFilterValue(event.target.value)
                            }
                            placeholder="Search client"
                        />
                        <img className="h-5 absolute top-[10px] left-2" src="/images/search.png" alt="search" />
                    </div>
                    <img className="h-10 ms-3" src="/images/Icon Button (2).png" alt="reload" />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <img className="h-10 ms-3 cursor-pointer" src="/images/Icon Button (1).png" alt="column" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <div className="w-[300px] rounded-md p-3 py-5">
                                <h1 className="text-black font-medium">Edit Columns</h1>
                                <p className="text-[#334155] text-sm pb-3">Select the columns to rearrange</p>
                                {table
                                    .getAllColumns()
                                    .filter((column) => column.getCanHide())
                                    .map((column) => {
                                        return (
                                            <>
                                                <div className="flex items-center mb-3">
                                                    <Checkbox
                                                        key={column.id}
                                                        className="capitalize"
                                                        checked={column.getIsVisible()}
                                                        onCheckedChange={(value) =>
                                                            column.toggleVisibility(!!value)
                                                        }
                                                        aria-label="show & hide"
                                                    />
                                                    <p className="ms-2 capitalize py-1 px-2 border-[1px] border-slate-300 w-full rounded-md"> {column.id}</p>
                                                </div >
                                            </>
                                        )
                                    })}
                                <div className="grid grid-cols-12 mt-5 gap-2">
                                    <div className="col-span-6">
                                        <button className="p-2 w-full text-black font-medium rounded-md border-[1px] border-slate-300 text-sm">Reset to Default</button>
                                    </div>
                                    <div className="col-span-6">
                                        <button className="bg-black rounded-md w-full p-2 text-sm text-white font-medium">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <img className="h-10 ms-3" src="/images/Icon Button.png" alt="download" />
                </div>
            </div >
            <div className="mt-5">
                <div className="">
                    <div className="overflow-x-auto overflow-y-auto h-[380px] custom-scrollbar">
                        <Table>
                            <TableHeader className="bg-white">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                </TableHead>
                                            )
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            data-state={row.getIsSelected() && "selected"}
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columns.length}
                                            className="h-24 text-center"
                                        >
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex items-center justify-end space-x-2 ">
                        <div className="flex-1 text-sm text-muted-foreground">
                            {table.getFilteredSelectedRowModel().rows.length} of{" "}
                            {table.getFilteredRowModel().rows.length} row(s) selected.
                        </div>
                        <div className="flex items-center justify-end space-x-2 py-4">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                Previous
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                Next
                            </Button>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}