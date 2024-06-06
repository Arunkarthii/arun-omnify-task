

export default function Outlet() {
    return (
        <>
            <h1 className="font-bold text-[#334155] text-xl md:text-2xl">Waitlist</h1>
            <div className="px-5 flex flex-col md:flex-row items-center gap-3 md:gap-4 mt-4 md:mt-8">
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
        </>
    )
}