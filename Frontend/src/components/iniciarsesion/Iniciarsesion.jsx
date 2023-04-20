import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import classes from "../iniciarsesion/Iniciarsesion.module.css";

const Iniciarsesion = () => {
  const [loginForm, setLoginForm] = useState();
  const url = "http://localhost:5000/users/login";
  const url2 = "http://localhost:5000/users/me";
  const navigation = useNavigate();

  const handleSubmit = () => {
    axios.post(url, loginForm).then(async (res) => {
      console.log("Login: ", res);
      return axios
        .get(url2, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${res.data.token}`,
          },
          params: {
            id: res.data.id,
          },
        })
        .then(async (response) => {
          console.log(response);
          navigation("/productoindividualpago");
        });
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  return (
    <>
      <Header />
      <section className={classes.formlogin}>
        <h5>Login</h5>
        <input
          className={classes.controls}
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className={classes.controls}
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Contraseña"
        />
        <button className={classes.buttons} onClick={() => handleSubmit()}>
          Enviar
        </button>
        <p>
          <a href="./registrarse">¿Olvidastes tu Contraseña?</a>
        </p>
      </section>
      <Footer />
    </>
  );
};
export default Iniciarsesion;
