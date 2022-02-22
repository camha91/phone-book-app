import { ADD_CONTACT } from "../Types/PhoneBookTypes";

export const addNewContactAction = (newContact) => ({
  type: ADD_CONTACT,
  newContact,
});
