import React from "react";
import { useSelector } from "react-redux";

export default function PhoneBookList() {
  const { contactList } = useSelector((state) => state.PhoneBookReducer);

  const renderContactList = () => {
    return contactList.map((contact, index) => {
      return (
        <tr key={index}>
          <td>{contact.id}</td>
          <td>{contact.firstName}</td>
          <td>{contact.lastName}</td>
          <td>{contact.phoneNumber}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h2 className="text-center">Contact List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>{renderContactList()}</tbody>
      </table>
    </div>
  );
}
