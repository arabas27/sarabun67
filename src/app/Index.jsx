import { useState } from "react";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-stretch gap-3">
      <div className="flex flex-col grow items-center font-bold bg-red-300 rounded py-3">
        <div className="text-xl">ใหม่</div>
        <div className="text-5xl">10</div>
      </div>
      <div className="flex flex-col grow items-center font-bold bg-yellow-300 rounded py-3">
        <div className="text-xl">อ่านแล้ว</div>
        <div className="text-5xl">10</div>
      </div>
      <div className="flex flex-col grow items-center font-bold bg-green-300 rounded py-3">
        <div className="text-xl">รวม</div>
        <div className="text-5xl">10</div>
      </div>
    </div>
  );
};

const DocItem = () => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="flex items-start md:items-center border-b">
      <div className="flex w-[40px] justify-center items-center gap-3">
        <button
          className="hover:bg-gray-100 p-2 rounded-full"
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? (
            <MdOutlineStar className="w-5 h-5 text-yellow-500" />
          ) : (
            <MdOutlineStarBorder className="w-5 h-5" />
          )}
        </button>
      </div>
      <Link className="flex flex-col md:flex-row" to="letters">
        <div className="w-[170px] px-1">
          <div className="line-clamp-1">นายสุทธานนท์ ทองนุ่น</div>
        </div>
        <div className="flex flex-col md:flex-row gap-1 flex-1 px-1">
          <div className="font-bold flex-shrink-0">head line</div>
          <div className="hidden md:inline-block">-</div>
          <div className="line-clamp-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            sequi quae officia quam officiis autem in laborum ipsum ipsa
            perspiciatis dolores, magnam, a quidem dolorum amet porro vitae
            excepturi quod?
          </div>
        </div>
      </Link>
      <div className="w-[200px] px-1 text-end">
        <div className="font-bold">27 ก.ค.</div>
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <>
      <Dashboard />
      <div className="p-3">
        <div className="flex flex-col">
          <DocItem />
          <DocItem />
        </div>
      </div>
    </>
  );
}
