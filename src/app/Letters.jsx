export default function Letters() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 md:gap-0 border-b pt-3 pb-6">
        <div className="flex flex-col md:flex-row md:gap-1 md:items-center">
          <div className="font-bold">นายสุทธานนท์ ทองนุ่น</div>
          <div className="text-sm text-gray-600">{"<ผู้อำนวยการโรงเรียน>"}</div>
        </div>
        <div className="flex gap-1 items-center">
          <div className="text-sm text-gray-600">ถึง</div>
          <div>นายฐิติ เผ่าวรรธนะพันธุ์</div>
        </div>
      </div>
      <div className="text-justify md:px-10 pt-3 pb-6 border-b">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iusto
        explicabo id consequuntur accusamus ducimus? Ullam error nulla ea
        asperiores eveniet magnam unde vitae minus velit? Ducimus itaque
        deserunt deleniti.
      </div>
      <div className="flex flex-col gap-3 md:gap-1 border-b pt-3 pb-6">
        <div className="flex-shrink-0 font-bold">เอกสารแนบ</div>
        <div className="flex flex-col gap-3">
          <div className="text-wrap">
            1. เอกสารแนบเอกสารแนบเอกสารแนบเอกสารแนบเอกสารแนบ.pdf
          </div>
          <div className="text-wrap">
            2. เอกสารแนบเอกสารแนบเอกสารแนบเอกสารแนบเอกสารแนบ.pdf
          </div>
          <div className="text-wrap">
            3. เอกสารแนบเอกสารแนบเอกสารแนบเอกสารแนบเอกสารแนบ.pdf
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 pt-3 pb-6">
        <div className="font-bold">การดำเนินการ</div>
        <div className="flex gap-1">
          <div>1{")"}</div>
          <div className="font-bold">ผอ.</div>
          <div>ส่งต่อ</div>
          <div className="font-bold">ครูฐิติ</div>
        </div>
      </div>
    </div>
  );
}
