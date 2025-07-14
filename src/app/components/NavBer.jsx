import Link from "next/link";


export default function NavBer() {
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link className="text-sm font-bold text-gray-600" href='/'>Home</Link>
                        <Link className="text-sm font-bold text-gray-600" href='/sander'>Sender</Link>
                        <Link className="text-sm font-bold text-gray-600" href='/receiver'>Receiver</Link>
                    </ul>
                </div>
                <Link href='/' className="ml-3 lg:ml-0 text-3xl font-extrabold">WEBAPP</Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10">
                    <Link className="text-sm font-bold text-gray-600" href='/'>Home</Link>
                    <Link className="text-sm font-bold text-gray-600" href='/sander'>Sender</Link>
                    <Link className="text-sm font-bold text-gray-600" href='/receiver'>Receiver</Link>
                </ul>
            </div>
        </div>
    )
}
