import ListCards from "./components/ListCards.js";
import axios from "axios";
import React, { useState,useEffect } from 'react';

function App() {
const [users, setUsers] = useState([]);
  const getUsers = () => axios.get("https://raw.githubusercontent.com/srijanDubey/chitkara-test-api-mock/main/data.json").then((response) => {
    setUsers(response.data.data);
    console.log(response.data.data);
  });
  useEffect(() => getUsers(), []);
  return (
    <div className="container my-5">
      <ListCards users={users} />
    </div>
  );
}

export default App;
