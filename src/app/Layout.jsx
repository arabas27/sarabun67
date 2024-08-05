import { Link, Outlet } from "react-router-dom";

const Menubar = () => {
  return (
    <div className="bg-sky-700 rounded text-white font-bold p-3">
      <Link className="p-3 hover:bg-sky-600">หน้าแรก</Link>
    </div>
  );
};

export default function Layout() {
  return (
    <>
      <nav className="flex justify-between px-3 lg:px-20 py-3">
        <div className="flex items-center">
          <div>Logo Here</div>
        </div>
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
