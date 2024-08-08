import { Link, Outlet } from "react-router-dom";
import { BsFillPenFill, BsFillHouseFill } from "react-icons/bs";

const Menubar = () => {
  return (
    <div className="flex items-center bg-sky-700 rounded text-white px-3">
      <Link className="flex flex-col items-center md:flex-row md:justify-center md:gap-2 py-3 hover:bg-sky-600 w-20 md:w-28">
        <BsFillHouseFill className="w-6 h-6" />
        <div className="text-xs md:text-base md:font-bold">หน้าแรก</div>
      </Link>
      <Link
        className="flex flex-col items-center md:flex-row md:justify-center md:gap-2 py-3 hover:bg-sky-600 w-20 md:w-28"
        to="create-doc"
      >
        <BsFillPenFill className="w-6 h-6" />
        <div className="text-xs md:text-base md:font-bold">สร้าง</div>
      </Link>
    </div>
  );
};

export default function Layout() {
  return (
    <>
      <nav className="flex justify-between px-3 lg:px-20 py-3">
        <Link className="flex items-center font-bold">
          <div>Logo Here</div>
        </Link>
      </nav>
      <div className="mx-auto sm:w-5/6 lg:w-8/12 xl:w-6/12">
        <Menubar />
        <main className="mt-3 bg-white rounded p-3">
          <Outlet />
        </main>
      </div>
    </>
  );
}
