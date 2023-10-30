import { useForm } from "react-hook-form";

 

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email" 
          id="email-input"
          placeholder="Enter email"
          {...register("email")}
        />
        <input
          type="password" 
          id="password-input"
          placeholder="Enter Password"
          {...register("password")}
        />
        <button type="submit">Log In</button>
      </form>
    </main>
  );
};

export default Login;