import { useState } from "react";
import Sidebar from "./components/Sidebar";
import RegistrationForm from "./components/RegistrationForm";
import AdmissionForm from "./components/AdmissionForm";

function App() {
  const [page, setPage] = useState("registration");

  return (
    <div className="flex">
      <Sidebar setPage={setPage} />

      <div className="flex-1 p-8">
        {page === "registration" && <RegistrationForm />}
        {page === "admission" && <AdmissionForm />}
      </div>
    </div>
  );
}

export default App;