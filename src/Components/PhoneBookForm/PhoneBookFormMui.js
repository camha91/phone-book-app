import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { addNewContactAction } from "../../redux/Actions/PhoneBookActions";

const regexPhoneNumber = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

const formSchema = yup.object().shape({
  firstName: yup.string().max(40).required(),
  lastName: yup.string().max(40).required(),
  phoneNumber: yup
    .string()
    .matches(regexPhoneNumber, "Phone number is not valid!")
    .required(),
});

export default function PhoneBookFormMui() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
  });

  const dispatch = useDispatch();

  const handleAddContact = (data) => {
    const newContact = {
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
    };

    dispatch(addNewContactAction(newContact));
    reset();
  };

  return (
    <div>
      <Typography gutterBottom variant="h3" align="center">
        Phone Book Form
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit(handleAddContact)}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      label="First Name"
                      fullWidth
                      type="text"
                      error={!!errors.firstName}
                      helperText={
                        errors.firstName ? errors.firstName?.message : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      label="Last Name"
                      fullWidth
                      type="text"
                      error={!!errors.lastName}
                      helperText={
                        errors.lastName ? errors.lastName?.message : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      label="Phone Number"
                      fullWidth
                      type="tel"
                      error={!!errors.phoneNumber}
                      helperText={
                        errors.phoneNumber ? errors.phoneNumber?.message : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  fullWidth
                >
                  Add Contact
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
