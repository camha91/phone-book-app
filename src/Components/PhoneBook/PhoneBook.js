import React, { useState } from "react";
import { useSelector } from "react-redux";
import PhoneBookForm from "../PhoneBookForm/PhoneBookForm";
import PhoneBookList from "../PhoneBookList/PhoneBookList";
import Search from "../Search/Search";

export default function PhoneBook() {
  const { contactList } = useSelector((state) => state.PhoneBookReducer);

  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = !setSearchText
    ? contactList
    : contactList.filter((contact) => {
        return Object.keys(contact).some((key) => {
          return contact[key]
            .toString()
            .toLowerCase()
            .includes(searchText.toLowerCase());
        });
      });

  return (
    <div className="container-fluid">
      <PhoneBookForm />
      <Search value={searchText} handleSearch={handleSearch} />
      <PhoneBookList displayList={filteredData} />
    </div>
  );
}
