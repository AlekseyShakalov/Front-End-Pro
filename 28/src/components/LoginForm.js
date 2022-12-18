import { useForm, Controller } from "react-hook-form";
import { useContext } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import AuthContext from "../contexts/auth/AuthContext";

const LoginForm = ({ handleCloseForm }) => {
  const { loginUser } = useContext(AuthContext);
  const { handleSubmit, control, register } = useForm();

  const onSubmit = (credentials) => {
    loginUser(credentials);
    handleCloseForm();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          py={2}
        >
          <Grid item xs={12} mb={2}>
            <Controller
              control={control}
              name="login"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  {...register("username", { required: true })}
                  label="Login*"
                  variant="outlined"
                  error={!!error}
                  helperText={error?.message}
                  sx={{ width: 400 }}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              control={control}
              name="password"
              rules={{ required: "The field is required" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Password*"
                  variant="outlined"
                  type="password"
                  error={!!error}
                  helperText={error?.message}
                  sx={{ width: 400 }}
                />
              )}
            />
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center" }}>
          <Button type="submit" variant="contained" sx={{ mr: 3 }}>
            Login
          </Button>
          <Button variant="outlined" onClick={handleCloseForm}>
            Cancel
          </Button>
        </Box>
      </form>
    </>
  );
};

export default LoginForm;
