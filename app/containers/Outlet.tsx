"use client"

import * as React from "react"
import {
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
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { columns, paymentData } from "@/components/columns"
import PeopleComponent, { ScheduledDateComponent, ServiceComponent } from "@/components/filerComponent"
import Image from "next/image"

export default function Outlet({ isCollapse }: any) {
    const [selectedFilter, setSelectedFilter] = React.useState('scheduledDate')
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data: paymentData,
        columns: columns,
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

    const renderComponent = () => {
        switch (selectedFilter) {
            case 'scheduledDate':
                return <ScheduledDateComponent />;
            case 'people':
                return <PeopleComponent />;
            case 'service':
                return <ServiceComponent />;
            default:
                return null;
        }
    };

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
            <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="border-none mb-5 md:mb-0 p-2 h-10 shadow text-sm text-[#334155] font-medium bg-slate-50 rounded-md flex items-center">
                            <Image width={15} height={10} className="h-4 me-2" src="/images/filter.png" alt="filter" />
                            Add Filter
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="p-0 m-0">
                        <div className="w-full md:w-[650px] rounded-md">
                            <div className="grid grid-cols-12 h-full md:h-[360px]">
                                <div className="col-span-12 md:col-span-5 p-2 bg-slate-100">
                                    <div onClick={() => setSelectedFilter('scheduledDate')} className={`p-2 mb-2 rounded-md flex items-center cursor-pointer ${selectedFilter === 'scheduledDate' ? 'bg-slate-300' : 'hover:bg-slate-300 '}`}>
                                        <Image width={15} height={10} className='h-4' src="/images/calendar-days.png" alt="calender" />
                                        <p className="text-sm ms-2 font-medium">Scheduled Date</p>
                                    </div>
                                    <div onClick={() => setSelectedFilter('people')} className={`p-2 mb-2 rounded-md flex items-center cursor-pointer ${selectedFilter === 'people' ? 'bg-slate-300' : 'hover:bg-slate-300 '}`}>
                                        <Image width={15} height={10} className='h-4' src="/images/users.png" alt="users" />
                                        <p className="text-sm ms-2 font-medium">People</p>
                                    </div>
                                    <div onClick={() => setSelectedFilter('service')} className={`p-2 mb-2 rounded-md flex items-center cursor-pointer ${selectedFilter === 'service' ? 'bg-slate-300' : 'hover:bg-slate-300 '}`}>
                                        <Image width={15} height={10} className='h-4' src="/images/layout-dashboard.png" alt="layout" />
                                        <p className="text-sm ms-2 font-medium">Services / Products</p>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-7 p-3">
                                    {renderComponent()}
                                </div>
                            </div>
                            <div className="grid grid-cols-12 py-3 px-3 gap-2 border-[1px] border-slate-300">
                                <div className="col-span-6">
                                </div>
                                <div className="col-span-6 flex items-center">
                                    <button className="p-2 w-full me-2 text-black font-medium rounded-md border-[1px] border-slate-300 text-sm">Reset to Default</button>
                                    <button className="bg-black rounded-md w-full p-2 text-sm text-white font-medium">Apply</button>
                                </div>
                            </div>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

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
                        <Image height={10} width={20} className="h-5 absolute top-[10px] left-2" src="/images/search.png" alt="search" />
                    </div>
                    <Image height={10} width={40} className="h-10 ms-3" src="/images/Icon Button (2).png" alt="reload" />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Image height={10} width={45} className="h-10 ms-3 cursor-pointer" src="/images/Icon Button (1).png" alt="column" />
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

                    <Image height={10} width={40} className="h-10 ms-3 hidden md:block" src="/images/Icon Button.png" alt="download" />
                </div>
            </div >
            <div className="mt-5">
                <div className="">
                    <div className={`overflow-x-auto overflow-y-auto h-[380px] custom-scrollbar ${isCollapse ? 'w-full md:w-[calc(100vw-135px)] ' : 'w-full md:w-[calc(100vw-324px)] '}`}>
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