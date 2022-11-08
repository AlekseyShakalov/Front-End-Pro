import { useForm } from "react-hook-form";

const UserProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>User Profile Form</h2>

      <label>
        Firstname:{" "}
        <input
          type="text"
          {...register("firstname", {
            required: "Firstname is required",
            minLength: { value: 3, message: "Min length of firstname is 3" },
          })}
        />
        {errors.firstname && (
          <div className="error">{errors.firstname.message}</div>
        )}
      </label>

      <label>
        Lastname:{" "}
        <input
          type="text"
          {...register("lastname", {
            required: "Lastname is required",
            minLength: { value: 3, message: "Min length of lastname is 3" },
          })}
        />
        {errors.lastname && (
          <div className="error">{errors.lastname.message}</div>
        )}
      </label>

      <label>
        Country:{" "}
        <select
          {...register("country", { required: "Please, select your country" })}
        >
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

export default UserProfileForm;
