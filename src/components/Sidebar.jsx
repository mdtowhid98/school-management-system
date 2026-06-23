function Sidebar({ setPage }) {
    return (
      <div className="w-64 min-h-screen bg-gray-800 text-white p-5">
        <h1 className="text-2xl font-bold mb-6">Student Panel</h1>
  
        <ul className="space-y-3">
          <li
            className="p-2 hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => setPage("registration")}
          >
            Registration
          </li>
  
          <li
            className="p-2 hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => setPage("admission")}
          >
            Admission
          </li>
        </ul>
      </div>
    );
  }
  
  export default Sidebar;