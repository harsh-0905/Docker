import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const API = "https://<your-backend-url>";

  useEffect(() => {
    fetch(`${API}/users`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const addUser = () => {
    fetch(`${API}/add`).then(() => {
      fetch(`${API}/users`)
        .then(res => res.json())
        .then(data => setUsers(data));
    });
  };

  return (
    <div>
      <h1>Docker App 🚀</h1>
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;