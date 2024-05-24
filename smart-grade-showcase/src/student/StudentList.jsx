/* eslint-disable react/prop-types */
import { student } from "../data";

export default function StudentList({ studentClass }) {
  const studentData = student.filter(
    (students) => students.class === studentClass
  );
  const studentList = studentData.map((item) => (
    <tr key={item.id} className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">{item.id}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8"
            src={item.photo}
            width="32"
            height="32"
            alt={item.name}
          />
          <span className="whitespace-nowrap">{item.name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">{item.scores}</td>
      <td className="p-5 text-sm md:text-xl text-center">{item.percentage}%</td>
    </tr>
  ));

  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          Class Name: {studentClass}
        </td>
      </tr>
      {studentList}
    </>
  );
}
