const initialState = {
  contactList: [
    {
      id: 1,
      firstName: "Mark",
      lastName: "Otto",
      phoneNumber: 1234567891,
    },
    {
      id: 2,
      firstName: "Jacob",
      lastName: "Thornton",
      phoneNumber: 3456781239,
    },
    {
      id: 3,
      firstName: "Larry",
      lastName: "Bird",
      phoneNumber: 4567894567,
    },
  ],
};

const PhoneBookReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default PhoneBookReducer;
