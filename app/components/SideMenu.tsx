

export default function SideMenu({ toggle, isCollapse }: any) {

    console.log(isCollapse);


    const mockMenuData = [
        {
            icon: '/images/inbox.png',
            menu: 'Orders'
        },
        {
            icon: '/images/frame.png',
            menu: 'Subscriptions'
        },
        {
            icon: '/images/calendar-days.png',
            menu: 'Calendar'
        },
        {
            icon: '/images/hourglass.png',
            menu: 'Waitlist'
        },
    ]
    return (
        <div className={`flex flex-col h-full justify-between px-5 py-5`}>
            <div className="text-[#334155]">
                <div className={`flex items-center ${isCollapse ? 'justify-center' : 'justify-between'} cursor-pointer w-full`}>
                    <div className={`flex items-center`}>
                        <img className='h-10' src='/images/Rectangle-85-+-Group-Copy-21.png' alt="logo" />
                        <h1 className={`font-extrabold text-black ms-2 text-xl transition-all duration-300 ease-in ${isCollapse ? 'hidden' : ''}`}>Front.Desk</h1>
                    </div>
                    <img onClick={toggle} className={`h-5  ${isCollapse ? 'hidden' : ''}`} src="/images/Frame 48098411.png" alt="icon" />
                </div>
                <div className={`cursor-pointer transition-all duration-300 ease-in-out hover:px-4 ${isCollapse ? 'px-4' : ''} hover:bg-[#F1F5F9] rounded-md p-3 flex items-center justify-between mt-10 shadow`}>
                    <p className={` ${isCollapse ? 'hidden' : ''}`}>Location Name</p>
                    <img className="h-5" src="/images/arrow-left-right.png" alt="icon-arrow" />
                </div>
                <div className={`px-5 mt-1  ${isCollapse ? 'hidden' : ''}`}>
                    <div className="bg-[#F1F5F9] transition-all duration-300 ease-in-out hover:bg-white px-3 py-3 shadow rounded-b-md cursor-pointer">
                        <h1 className={`text-[#334155] font-extrabold`}>08:30 AM <span className="font-bold ms-2">Tue 20 Jan</span></h1>
                        <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center">
                                <img className="h-5" src="/images/globe.png" alt="icon-globe" />
                                <p className={`ms-1 text-xs font-medium`}>UTC: +5 hours</p>
                            </div>
                            <img className="h-5" src="/images/secondary icon (1).png" alt="icon-down" />
                        </div>
                    </div>
                </div>
                {isCollapse && (
                    <div className={`cursor-pointer transition-all duration-300 ease-in-out hover:px-4 ${isCollapse ? 'px-4' : ''} hover:bg-[#F1F5F9] hover:shadow rounded-md p-3 flex items-center`}>
                        <img className="h-5" src="/images/globe.png" alt="icon-globe" />
                    </div>
                )}
                <div className="mt-10">
                    {mockMenuData?.map((item: any, i: number) => (
                        <div key={i} className={`cursor-pointer transition-all duration-300 ease-in-out hover:px-4 ${isCollapse ? 'px-4' : ''} hover:bg-[#F1F5F9] hover:shadow rounded-md p-3 flex items-center ${i === 3 ? 'bg-[#F1F5F9]' : ''}`}>
                            <img className={`h-5 transition-all duration-300 ease-in m-0 ${isCollapse ? 'me-0' : 'me-2'}`} src={item?.icon} alt="icon-arrow" />
                            <p className={` ${isCollapse ? 'hidden' : ''}`}>{item?.menu}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-[#334155]">
                <div className={`cursor-pointer transition-all duration-300 ease-in-out hover:px-4 ${isCollapse ? 'px-4' : ''} hover:bg-[#F1F5F9] rounded-md p-3 flex items-center justify-between mt-10 shadow`}>
                    <div className="flex items-center">
                        <img className="h-5 me-2" src="/images/layout-dashboard.png" alt="icon-arrow" />
                        <p className={` ${isCollapse ? 'hidden' : ''}`}>Dashboard</p>
                    </div>
                    <img className={`h-5 ${isCollapse ? 'hidden' : ''}`} src="/images/secondary icon.png" alt="icon-arrow" />
                </div>
                <div className={`flex items-center mt-6 cursor-pointer ${isCollapse ? 'justify-center' : 'justify-between'}`}>
                    <div className="flex items-center">
                        <img className="h-10" src="/images/Ellipse 1.png" alt="profile-pic" />
                        <div className={`ms-2  ${isCollapse ? 'hidden' : ''}`}>
                            <h1 className="text-sm font-bold">Admin name</h1>
                            <p className="text-xs mt-2">adminname@mail.com</p>
                        </div>
                    </div>
                    <img className={`h-5  ${isCollapse ? 'hidden' : ''}`} src="/images/secondary icon (1).png" alt="down" />
                </div>
                <div className={`flex items-center mt-8 ${isCollapse ? 'justify-center' : ''}`}>
                    <img className="h-5" src="/images/help-circle.png" alt="help" />
                    <div className={`ms-2  ${isCollapse ? 'hidden' : ''}`}>
                        <h1 className="text-sm">Help Center</h1>
                        <p className="text-xs mt-1">@2024 Omnify.Inc. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}