import { useForm, Controller } from "react-hook-form";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const PassengerInformationForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Container maxWidth="md" sx={{ pt: 3 }}>
        <Box sx={{ width: 685, pb: 4.5 }}>
          <Typography
            variant="h1"
            sx={{ fontWeight: 700, fontSize: 24, color: "#605DEC", mb: 2 }}
          >
            Passenger information
          </Typography>
          <Typography
            variant="p"
            sx={{ fontWeight: 400, fontSize: 18, color: "#7C8DB0" }}
          >
            Enter the required information for each traveler and be sure that it
            exactly matches the government-issued ID presented at the airport.
          </Typography>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 600, fontSize: 18, color: "#6E7491", pb: 3 }}
          >
            Passenger 1 (Adult)
          </Typography>

          <Grid container maxWidth={650}>
            <Grid item xs={4}>
              <Controller
                control={control}
                name="firstName"
                rules={{ required: "The field is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="First name*"
                    variant="outlined"
                    error={!!error}
                    helperText={error?.message}
                    sx={{ width: 200 }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={4}>
              <Controller
                control={control}
                name="middle"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Middle"
                    variant="outlined"
                    sx={{ width: 200 }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={4}>
              <Controller
                control={control}
                name="lastName"
                rules={{ required: "The field is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Last name*"
                    variant="outlined"
                    error={!!error}
                    helperText={error?.message}
                    sx={{ width: 200 }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={4}>
              <Controller
                control={control}
                name="suffix"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Suffix"
                    variant="outlined"
                    sx={{ width: 200 }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={8}>
              <Controller
                control={control}
                name="dateOfBirth"
                rules={{ required: "The field is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Date of birth*"
                    variant="outlined"
                    type="date"
                    error={!!error}
                    helperText="MM/DD/YY"
                    InputLabelProps={{ shrink: true }}
                    sx={{ width: 252 }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                control={control}
                name="email"
                rules={{ required: "The field is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Email address*"
                    variant="outlined"
                    error={!!error}
                    helperText={error?.message}
                    sx={{ width: 300 }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                control={control}
                name="phoneNumber"
                rules={{ required: "The field is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Phone number*"
                    variant="outlined"
                    type="tel"
                    error={!!error}
                    helperText={error?.message}
                    sx={{ width: 300 }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                control={control}
                name="redressNumber"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Redress number"
                    variant="outlined"
                    sx={{ width: 300 }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                control={control}
                name="travellNumber"
                rules={{ required: "The field is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Known traveller number*"
                    variant="outlined"
                    type="tel"
                    error={!!error}
                    helperText={error?.message}
                    sx={{ width: 300 }}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Button type="submit" variant="outlined" sx={{ py: 1.5, px: 2.5 }}>
            Save
          </Button>
        </form>
      </Container>
    </>
  );
};

export default PassengerInformationForm;
