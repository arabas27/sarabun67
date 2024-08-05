import { useState } from "react";
import { MdOutlineStar, MdOutlineStarBorder, MdFiberNew } from "react-icons/md";
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
    <div className="flex flex-col md:flex-row md:items-center border-b">
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
      <div className="w-[170px] px-1">
        <div className="line-clamp-1 font-bold">นายสุทธานนท์ ทองนุ่น</div>
      </div>
      <div className="flex-1 px-1">
        <div className="line-clamp-2 md:line-clamp-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          sequi quae officia quam officiis autem in laborum ipsum ipsa
          perspiciatis dolores, magnam, a quidem dolorum amet porro vitae
          excepturi quod?
        </div>
      </div>
      <div className="w-[100px] px-1 text-end">
        <div className="line-clamp-1 font-bold">27 ก.ค. 67</div>
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
