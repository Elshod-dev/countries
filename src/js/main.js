import "../css/main.css";
import { createCountry } from "./updateUI";
import "./filter";
import "./mode";
import { request } from "./request";
const API = "https://restcountries.com/v3.1/all";
request(API)
  .then((data) => {
    createCountry(data);
  })
  .catch((err) => {
    alert(err.message);
  });
