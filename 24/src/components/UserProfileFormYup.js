import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstname: yup
    .string()
    .trim()
    .required("Firstname is required")
    .min(3, "Min length of firstname is 3"),
  lastname: yup
    .string()
    .trim()
    .required("Lastname is required")
    .min(3, "Min length of lastname is 3"),
  country: yup.string().required("Please, select your country"),
});

const UserProfileFormYup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>User Profile Form</h2>

      <label>
        Firstname: <input type="text" {...register("firstname")} />
        {errors.firstname && (
          <div className="error">{errors.firstname.message}</div>
        )}
      </label>

      <label>
        Lastname: <input type="text" {...register("lastname")} />
        {errors.lastname && (
          <div className="error">{errors.lastname.message}</div>
        )}
      </label>

      <label>
        Country:{" "}
        <select {...register("country")}>
          <option value=""></option>
          <option value="ua">Ukraine</option>
          <option value="uk">United Kingdom</option>
          <option value="usa">USA</option>
        </select>
        {errors.country && (
          <div className="error">{errors.country.message}</div>
        )}
      </label>

      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default UserProfileFormYup;
