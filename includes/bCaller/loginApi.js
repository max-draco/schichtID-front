import axios from "axios";
import { wrapper } from "../../index";
import { emailGroup, email, password, result, middleInputsHolder, loginButton, loader } from "../../index";
const setCookie = (name, value, hours, domain = '') => {
  let expires = "";
  if (hours) {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  
  // Construct the cookie string
  document.cookie = `${name}=${encodeURIComponent(value || "")}${expires}; path=/;${domain ? ` domain=${domain};` : ""} Secure; SameSite=Lax`;
};

export const handleLogin = (payload) => {
  loginButton.disabled = true;
  loginButton.innerText = "";
  loginButton.appendChild(loader);
  axios.post('https://api.cashly.me/login/', payload)
    .then(response => {
      const data = response.data;
      if (data.response.code === 1) {
        const jwt = data.response.payload.resource;
        result.innerText = data.response.payload.message;
        result.style.color = '';
        setCookie('token',jwt, 4, '.cashly.me');
 const contactInfo = payload.email || payload.whatsappnumber;
        window.location.href = `/otp?token=${encodeURIComponent(jwt)}&email=${encodeURIComponent(contactInfo)}`;
      } else {
        result.innerText = data.response.payload.message;
        result.style.color = 'red';
        result.style.fontSize = 'large';
        middleInputsHolder.insertBefore(result, emailGroup);
        setTimeout(() => {
          result.innerText = "";
          result.style.color = '';
          middleInputsHolder.removeChild(result);
        }, 5000);
      }
    })
    .catch(error => {
      console.error('There was a problem with the login operation:', error);
    })
    .finally(() => {
      loginButton.disabled = false;
      loginButton.innerHTML = 'Login';
    });
};
