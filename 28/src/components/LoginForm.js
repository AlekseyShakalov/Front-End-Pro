import { useForm, Controller } from "react-hook-form";
import { useContext, useState } from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import AuthContext from "../contexts/auth/AuthContext";

const LoginForm = () => {
  const { loginUser } = useContext(AuthContext);
  const { handleSubmit, control, register } = useForm();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const onSubmit = (credentials) => {
    loginUser(credentials);
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          For authorization enter your login and password
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              pt={2}
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

            <DialogActions>
              <Button type="submit" variant="contained">
                Login
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginForm;
