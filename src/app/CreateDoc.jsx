import PropTypes from "prop-types";

export default function CreateDoc() {
  /* Global classes */
  const primaryClassName =
    "p-1 outline outline-1 rounded focus:outline-2 focus:outline-sky-400";

  /* Components */
  const FormComponentContainer = ({ children }) => {
    return <div className="flex flex-col gap-1">{children}</div>;
  };

  FormComponentContainer.propTypes = {
    children: PropTypes.element,
  };

  return (
    <div className="flex flex-col gap-3 p-3">
      <div className="text-lg font-bold">สร้างบันทึกภายใน</div>
      <hr />
      <form className="flex flex-col">
        <FormComponentContainer>
          <label htmlFor="department">ฝ่าย/กลุ่มสาระการเรียนรู้</label>
          <select
            className={primaryClassName}
            name="department"
            id="department"
            defaultValue="0"
          >
            <option value="0">เลือก</option>
            {[
              "ฝ่ายบริหารทั่วไป",
              "ฝ่ายบริหารงานวิชาการ",
              "ฝ่ายบริหารงบประมาณ",
              "ฝ่ายบริหารงานบุคคล",
              "ฝ่ายกิจการนักเรียน",
              "กลุ่มสาระการเรียนรู้ภาษาไทย",
              "กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ",
              "กลุ่มสาระการเรียนรู้คณิตศาสตร์",
              "กลุ่มสาระการเรียนรู้สังคมศึกษา ศาสนาและวัฒนธรรม",
              "กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี",
              "กลุ่มสาระการเรียนรู้สุขศึกษา พลศึกษา",
              "กลุ่มสาระการเรียนรู้ศิลปศึกษา",
              "กลุ่มสาระการเรียนรู้การงานอาชีพ",
              "กิจกรรมพัฒนาผู้เรียน",
            ].map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </FormComponentContainer>
      </form>
    </div>
  );
}
