import { useState } from "react";

function AdmissionForm() {
  const [admission, setAdmission] = useState({
    studentName: "",
    fatherName: "",
    mobile: "",
    course: "",
  });

  const handleChange = (e) => {
    setAdmission({
      ...admission,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(admission);
    alert("Admission Submitted Successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Admission Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={admission.studentName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            type="text"
            name="fatherName"
            placeholder="Father Name"
            value={admission.fatherName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={admission.mobile}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            type="text"
            name="course"
            placeholder="Course Name"
            value={admission.course}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Submit Admission
          </button>

        </form>
      </div>
    </div>
  );
}

export default AdmissionForm;