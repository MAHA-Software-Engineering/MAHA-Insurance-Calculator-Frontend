import React, { useState} from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import { Auth } from "aws-amplify"

function RegisterPage() {
  return (
    <BaseLayout>
      <h1 className="text-black">RegisterPage</h1>
    </BaseLayout>
  );
}

const User = {
  email: string,
  password: string
};
const RegisterPage = () => {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const result = await Auth.signUp({
        username: user.email,
        password: user.password,
        // if custom attribute is added
        attributes: {
          "custom:role": "user",
        },
      })
      return result
    } catch (error) {
      console.error("Error registering user:", error)
    }
    console.log("User registered:", user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
