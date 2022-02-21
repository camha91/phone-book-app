import "./App.css";
import React from "react";
import PhoneBookForm from "./Components/PhoneBookForm/PhoneBookForm";
import PhoneBookList from "./Components/PhoneBookList/PhoneBookList";

function App() {
  return (
    <div className="container-fluid">
      <PhoneBookForm />
      <PhoneBookList />
    </div>
  );
}

export default App;
