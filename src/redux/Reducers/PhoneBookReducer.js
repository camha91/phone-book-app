import { ADD_CONTACT } from "../Types/PhoneBookTypes";

const initialState = {
  contactList: [
    {
      id: 1,
      firstName: "Mark",
      lastName: "Otto",
      phoneNumber: "123-456-7891",
    },
    {
      id: 2,
      firstName: "Jacob",
      lastName: "Thornton",
      phoneNumber: "345-678-1239",
    },
    {
      id: 3,
      firstName: "Larry",
      lastName: "Bird",
      phoneNumber: "456-789-4567",
    },
  ],
};

const PhoneBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      const phoneListUpdate = [...state.contactList];
      const index = phoneListUpdate.findIndex(
        (contact) => contact.phoneNumber === action.newContact.phoneNumber
      );

      // If the phone number already exist in the phone book
      if (index !== -1) {
        alert("Phone number is already exist!");
        return { ...state };
      }

      // Phone number is not in the phone book, add new contact in the list
      state.contactList = [...phoneListUpdate, action.newContact];
      alert("New contact successfully added!");

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default PhoneBookReducer;
