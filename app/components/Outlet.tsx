

export default function Outlet() {

    const waitlistMockData = [
        {
            payer: 'Theodore T.C. Calvin',
            email: 'theodore@gmail.com',
            phone: '966559186876',
            service: 'Private Language Session',
            status: 'Active',
            createdOn: 'Sun, 07 Jan 2024 2:42 PM',
            scheduled: 'Mon, 08 Jan 2024 2:00 PM',
        },
        {
            payer: 'Higgins Jonathan',
            email: 'higgins@gmail.com',
            phone: '966559186877',
            service: 'Group Language Session',
            status: 'Inactive',
            createdOn: 'Tue, 09 Jan 2024 11:15 AM',
            scheduled: 'Wed, 10 Jan 2024 1:00 PM',
        },
        {
            payer: 'Thomas Sullivan Magnum',
            email: 'magnum@gmail.com',
            phone: '966559186878',
            service: 'Private Language Session',
            status: 'Lead',
            createdOn: 'Mon, 08 Jan 2024 3:30 PM',
            scheduled: 'Tue, 09 Jan 2024 10:00 AM',
        },
        {
            payer: 'Juliet Higgins',
            email: 'juliet@gmail.com',
            phone: '966559186879',
            service: 'Group Language Session',
            status: 'Active',
            createdOn: 'Wed, 10 Jan 2024 9:45 AM',
            scheduled: 'Thu, 11 Jan 2024 2:30 PM',
        },
        {
            payer: 'Rick Wright',
            email: 'rick@gmail.com',
            phone: '966559186880',
            service: 'Private Language Session',
            status: 'Inactive',
            createdOn: 'Thu, 11 Jan 2024 4:50 PM',
            scheduled: 'Fri, 12 Jan 2024 12:00 PM',
        },
        {
            payer: 'T.C. Calvin',
            email: 'tc@gmail.com',
            phone: '966559186881',
            service: 'Group Language Session',
            status: 'Lead',
            createdOn: 'Fri, 12 Jan 2024 7:15 AM',
            scheduled: 'Sat, 13 Jan 2024 11:00 AM',
        },
        {
            payer: 'Luther Gillis',
            email: 'luther@gmail.com',
            phone: '966559186882',
            service: 'Private Language Session',
            status: 'Active',
            createdOn: 'Sat, 13 Jan 2024 5:20 PM',
            scheduled: 'Sun, 14 Jan 2024 3:00 PM',
        },
        {
            payer: 'Carol Baldwin',
            email: 'carol@gmail.com',
            phone: '966559186883',
            service: 'Group Language Session',
            status: 'Inactive',
            createdOn: 'Sun, 14 Jan 2024 6:30 PM',
            scheduled: 'Mon, 15 Jan 2024 1:30 PM',
        },
        {
            payer: 'Mac Reynolds',
            email: 'mac@gmail.com',
            phone: '966559186884',
            service: 'Private Language Session',
            status: 'Lead',
            createdOn: 'Mon, 15 Jan 2024 8:10 AM',
            scheduled: 'Tue, 16 Jan 2024 2:15 PM',
        },
        {
            payer: 'Katsumoto',
            email: 'katsumoto@gmail.com',
            phone: '966559186885',
            service: 'Group Language Session',
            status: 'Active',
            createdOn: 'Tue, 16 Jan 2024 11:50 AM',
            scheduled: 'Wed, 17 Jan 2024 3:45 PM',
        },
        {
            payer: 'Michelle Hue',
            email: 'michelle@gmail.com',
            phone: '966559186886',
            service: 'Private Language Session',
            status: 'Inactive',
            createdOn: 'Wed, 17 Jan 2024 2:30 PM',
            scheduled: 'Thu, 18 Jan 2024 4:00 PM',
        },
        {
            payer: 'Lily Katayama',
            email: 'lily@gmail.com',
            phone: '966559186887',
            service: 'Group Language Session',
            status: 'Lead',
            createdOn: 'Thu, 18 Jan 2024 5:45 PM',
            scheduled: 'Fri, 19 Jan 2024 9:00 AM',
        },
        {
            payer: 'Francis Hofstetler',
            email: 'francis@gmail.com',
            phone: '966559186888',
            service: 'Private Language Session',
            status: 'Active',
            createdOn: 'Fri, 19 Jan 2024 8:20 AM',
            scheduled: 'Sat, 20 Jan 2024 1:00 PM',
        },
        {
            payer: 'Danny Williams',
            email: 'danny@gmail.com',
            phone: '966559186889',
            service: 'Group Language Session',
            status: 'Inactive',
            createdOn: 'Sat, 20 Jan 2024 11:10 AM',
            scheduled: 'Sun, 21 Jan 2024 10:00 AM',
        },
        {
            payer: 'Steve McGarrett',
            email: 'steve@gmail.com',
            phone: '966559186890',
            service: 'Private Language Session',
            status: 'Lead',
            createdOn: 'Sun, 21 Jan 2024 1:50 PM',
            scheduled: 'Mon, 22 Jan 2024 12:00 PM',
        },
        {
            payer: 'Kono Kalakaua',
            email: 'kono@gmail.com',
            phone: '966559186891',
            service: 'Group Language Session',
            status: 'Active',
            createdOn: 'Mon, 22 Jan 2024 4:00 PM',
            scheduled: 'Tue, 23 Jan 2024 11:30 AM',
        },
        {
            payer: 'Chin Ho Kelly',
            email: 'chin@gmail.com',
            phone: '966559186892',
            service: 'Private Language Session',
            status: 'Inactive',
            createdOn: 'Tue, 23 Jan 2024 9:25 AM',
            scheduled: 'Wed, 24 Jan 2024 3:00 PM',
        },
        {
            payer: 'Catherine Rollins',
            email: 'catherine@gmail.com',
            phone: '966559186893',
            service: 'Group Language Session',
            status: 'Lead',
            createdOn: 'Wed, 24 Jan 2024 6:40 PM',
            scheduled: 'Thu, 25 Jan 2024 8:00 AM',
        },
        {
            payer: 'Duke Lukela',
            email: 'duke@gmail.com',
            phone: '966559186894',
            service: 'Private Language Session',
            status: 'Active',
            createdOn: 'Thu, 25 Jan 2024 7:55 AM',
            scheduled: 'Fri, 26 Jan 2024 2:45 PM',
        },
        {
            payer: 'Lou Grover',
            email: 'lou@gmail.com',
            phone: '966559186895',
            service: 'Group Language Session',
            status: 'Inactive',
            createdOn: 'Fri, 26 Jan 2024 12:00 PM',
            scheduled: 'Sat, 27 Jan 2024 1:15 PM',
        }
    ];

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
                        <input className="h-10 rounded-md w-56 shadow ps-9 " type="text" placeholder="Search client" />
                        <img className="h-5 absolute top-[10px] left-2" src="/images/search.png" alt="search" />
                    </div>
                    <img className="h-10 ms-3" src="/images/Icon Button (2).png" alt="reload" />
                    <img className="h-10 ms-3" src="/images/Icon Button (1).png" alt="reload" />
                    <img className="h-10 ms-3" src="/images/Icon Button.png" alt="reload" />
                </div>
            </div>
        </>
    )
}