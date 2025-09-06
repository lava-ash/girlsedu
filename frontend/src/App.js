import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/hello")   // <-- calls backend
      .then(res => res.json())
      .then(data => setMessage(data.msg));
  }, []);

  return (
    <div>
      <h1>Frontend + Backend Connected 🚀</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
