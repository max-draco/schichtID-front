//external
import * as styles from './assets/css/login.module.css';
import { handleLogin } from './includes/bCaller/loginApi';
import { jwtVerify } from 'jose';
import loaderNewGif from './assets/images/loaderNew.gif';
import loginIco from './assets/images/logo.svg';
import themeIco from './assets/images/themeIco.png';
import qrImgSrc from './assets/images/qr.png';
import loginRightImgSrc from './assets/images/sus.jpg';
// // import '../../../../../manifest.json';
// //cloudflare turnstile
// const cloudRecapcha = document.createElement('div');// Assign class
// cloudRecapcha.className = 'cf-turnstile';

// // Assign attributes
// cloudRecapcha.setAttribute('data-sitekey', '0x4AAAAAAAw65at_XTmUV7qj');
// // cloudRecapcha.setAttribute('data-callback', 'javascriptCallback');

// //
//themes 

//cookie check and route protection ,firewall pg
const themeDropDownHolder = document.createElement('div');
const qrHolder = document.createElement('div');
const loginRightImgHolder = document.createElement('div');
loginRightImgHolder.classList.add(styles.loginRightImgHolder);
const loginRightImg = document.createElement('img');
loginRightImg.src = loginRightImgSrc;
loginRightImg.classList.add(styles.loginRightImg);
loginRightImgHolder.appendChild(loginRightImg);
const qrImg = document.createElement('img');
qrImg.src = qrImgSrc;
qrImg.classList.add(styles.qrImg);
qrHolder.classList.add(styles.qrHolder);
qrHolder.appendChild(qrImg);
const themeImg = document.createElement('img');
themeImg.classList.add(styles.themeImg);
themeDropDownHolder.classList.add(styles.themeDropDownHolder);
themeImg.src = themeIco;



export const wrapper = document.createElement('form');
    const wrapperTop = document.createElement('div');
    const wrapperBottom = document.createElement('div');
    wrapperTop.classList.add(styles.wrapperTop);
    wrapperBottom.classList.add(styles.wrapperBottom);
    const header = document.createElement('div');
    const headerTop = document.createElement('div');
    const headerBottom = document.createElement('div');
    export const middleInputsHolder = document.createElement('div');
    const bottomInputsHolder = document.createElement('div');
    const signupHolder = document.createElement('a');
   export  const emailGroup = document.createElement('div');
    const pwdGroup = document.createElement('div');
    const emailLabel = document.createElement('label');
    const passwordLabel = document.createElement('label');
    const logoImg = document.createElement('img');
    const infoText = document.createElement('p');
    const simpleNota = document.createElement('p');
    const versionNumber = document.createElement('p');
    versionNumber.innerText = "v0.0.1-alpha";
    const loginH1 = document.createElement('h1');
    const titleMain = document.createElement('h1');
    titleMain.innerText = "schichtID";
   export  const email = document.createElement('input');
   export  const password = document.createElement('input');
    export const loginButton = document.createElement('button');
    const forgotPwd = document.createElement('a');
    const signupText = document.createElement('p');
    const signupLink = document.createElement('a');
    const Eplaceholder_label = document.createElement('label');
    const Pplaceholder_label = document.createElement('label');
    export const result = document.createElement('p');
    export const loader = document.createElement('span');
    const loaderImg = document.createElement('img');
    // const themeChangeBtn = document.createElement('')
    loaderImg.src = loaderNewGif;
    loaderImg.classList.add(styles.loaderImg);
    loader.appendChild(loaderImg);
    loader.classList.add(styles.loader);
    wrapper.classList.add(styles.wrapper);
    header.classList.add(styles.header);
    middleInputsHolder.classList.add(styles.middleInputsHolder);
    bottomInputsHolder.classList.add(styles.bottomInputsHolder);
    signupHolder.classList.add(styles.signupHolder);
    logoImg.classList.add(styles.logoImg);
    infoText.classList.add(styles.infoText);
    simpleNota.classList.add(styles.simpleNota);
    email.classList.add(styles.commonInput);
    password.classList.add(styles.commonInput);
    loginButton.classList.add(styles.loginButton);
    forgotPwd.classList.add(styles.forgotPwd);
    signupLink.classList.add(styles.signupLink);
    signupText.classList.add(styles.signupText);
    loginH1.classList.add(styles.loginH1);
    emailGroup.classList.add(styles.emailGroup);
    pwdGroup.classList.add(styles.pwdGroup);
    emailLabel.classList.add(styles.emailLabel);
    passwordLabel.classList.add(styles.passwordLabel);
    headerTop.classList.add(styles.headerTop);
    headerBottom.classList.add(styles.headerBottom);
    email.placeholder = "";
    email.type = "text";
    email.id = "email";
    email.autocomplete = "off";
    email.required = true;
    password.placeholder = "";
    password.type = "password";
    password.autocomplete = "off";
    password.id = "password";
    password.required = true;
    logoImg.src = 'https://i0.wp.com/blog.theschicht.com/wp-content/uploads/2025/09/logo.png?ssl=1' //loginIco;
    loginButton.innerText = "Login";
    loginButton.disabled = false;
    loginH1.innerText = "Login";
    signupLink.innerText = "Sign Up";
    signupLink.href = "/signup";
    signupText.innerText = "Don't have an account?";
    forgotPwd.innerText = "Forgot Password?";
    forgotPwd.href = "/forgot";
    infoText.innerText = "Please login to access schichtID";
    emailLabel.setAttribute('for', 'email');
    passwordLabel.setAttribute('for', 'email');
    emailLabel.innerText  = "Email or Whatsapp number +xx";
    passwordLabel.innerText = "Password";
    headerTop.appendChild(logoImg);
    headerTop.appendChild(titleMain);
    headerBottom.appendChild(qrHolder);
    headerBottom.appendChild(loginH1);
    header.appendChild(headerTop);
    header.appendChild(headerBottom);
    // header.appendChild(infoText);
    emailGroup.appendChild(email);
    emailGroup.appendChild(emailLabel);
    pwdGroup.appendChild(password);
    pwdGroup.appendChild(passwordLabel);
    middleInputsHolder.appendChild(emailGroup);
    middleInputsHolder.appendChild(pwdGroup);
    middleInputsHolder.appendChild(forgotPwd);
    signupHolder.appendChild(signupText);
    signupHolder.appendChild(signupLink);
    bottomInputsHolder.appendChild(loginButton);
    bottomInputsHolder.appendChild(signupHolder);
    bottomInputsHolder.appendChild(versionNumber);
    wrapperTop.appendChild(themeDropDownHolder);
    wrapperTop.appendChild(header);
    wrapperTop.appendChild(middleInputsHolder);
    wrapperTop.appendChild(bottomInputsHolder);
    wrapperBottom.appendChild(loginRightImgHolder);
    wrapper.appendChild(wrapperTop);
    wrapper.appendChild(wrapperBottom);
    // wrapper.appendChild(cloudRecapcha);
   

    document.body.appendChild(wrapper);
//append 2fa page after login button click
// Validation function
   // Construct the payload dynamically based on the input provided

// Main validation function
const payload = {}; // Initialize payload object
export function validateForm() {
    // Get trimmed values from input fields
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    let valid = true;
    let tempEmail = null;
    let tempWhatsApp = null;

    // Clear previous result messages
    result.innerText = '';
    result.style.color = 'red';

    // Regular expressions for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    const whatsappPattern = /^\+?[1-9]\d{1,14}$/;

    // Validate email or WhatsApp number
    if (!emailValue) {
        displayErrorMessage('Email or WhatsApp number required');
        valid = false;
        return valid; // Return immediately if there's an error
    }

    // Check if the input is a valid email or WhatsApp number
    if (emailPattern.test(emailValue)) {
        tempEmail = emailValue; // Set the temp constant for email
    } else if (whatsappPattern.test(emailValue)) {
        tempWhatsApp = emailValue; // Set the temp constant for WhatsApp number
    } else {
        displayErrorMessage('Please enter a valid email address or WhatsApp number.');
        valid = false;
        return valid; // Return immediately if there's an error
    }

    // Validate password
    if (!passwordValue) {
        displayErrorMessage('Password required');
        valid = false;
        return valid; // Return immediately if there's an error
    }

    if (passwordValue.length < 6) {
        displayErrorMessage('Password must be at least 6 characters long.');
        valid = false;
        return valid; // Return immediately if there's an error
    }

    // Prepare payload based on validated input
  

    if (tempEmail) {
        // Convert the email to lowercase and assign to payload
        payload.email = tempEmail.toLowerCase();
    } else if (tempWhatsApp) {
        // Remove preceding + and spaces from the WhatsApp number and assign to payload
        payload.whatsappnumber = tempWhatsApp.replace(/\+/g, "").replace(/\s+/g, "");
    }

    // Assign the password to the payload
    payload.password = passwordValue;

    // Log or use the payload as needed
    // console.log('Payload:', payload);

    // Set success message
    result.innerText = 'Validation successful!';
    result.style.color = 'green';

    // Return the validation status
    return valid;
}

// Function to display the error message and remove it after a delay
function displayErrorMessage(message) {
    result.innerText = message;
    middleInputsHolder.insertBefore(result, emailGroup); // Show the result message

    // Set a timeout to clear the error message after 3 seconds
    setTimeout(() => {
        result.innerText = ''; // Clear the message
    }, 3000);
}

loginButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    result.innerText = ''; // Clear previous messages
if(validateForm()){
    handleLogin(payload); 
}    
});


    async function verifyJWT(token) {
      const secretKey = new TextEncoder().encode("G$8a9Zq5@dR3^yX!7wKj*Ue2#fH6%tLp"); // Replace with your actual secret key
  
      try {
          // Verifying the token with the secret key
          const { payload } = await jwtVerify(token, secretKey);
  
          console.log('Token is valid:', payload);
  
          // If verification is successful, continue loading the dashboard
          return true;
      } catch (error) {
          console.error('Token verification failed:', error);
  
          // If the token is invalid, redirect to the login page
          return false;
      }
  }
  
  // Function to get token from cookies
  function getTokenFromCookie() {
      const name = 'token=';
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(';');
  
      for (let cookie of cookieArray) {
          cookie = cookie.trim();
          if (cookie.startsWith(name)) {
              return cookie.substring(name.length);
          }
      }
      return null; // Return null if no token is found
  }
  
  // Main function to check the token and verify it
  async function checkAndVerifyToken() {
      const token = getTokenFromCookie();
      if (token) {
          const isTokenValid = await verifyJWT(token);
  
          if (!isTokenValid) {
              // Redirect to login page handled inside the verifyJWT function
              return;
          }
          
          // If the token is valid, you can proceed with loading the dashboard
          console.log('Token verified, loading dashboard...');
          window.location.href = 'https://id.theschicht.com/dashboard/'; // Replace with your login URL
      } else {
          // If no token is found, redirect to login
          
      }
  }
  
  // Call the function on page load
  checkAndVerifyToken();
  // Turnstile success callback
// function onTurnstileSuccess(token) {
//     console.log('Turnstile completed successfully. Token:', token);
//     loginButton.disabled = false; // Enable the login button after reCAPTCHA is solved
// }
const styleDropdown = document.createElement('select');
styleDropdown.className = styles.styleDropdown;

// Define the theme options
const themeOptions = [
    { value: 'default', text: 'Defaultus' },
    { value: 'theme-dark', text: 'Wonderland' },
    { value: 'theme-light', text: 'Lollipop' },
  ];
  
  // Populate the dropdown with theme options
  themeOptions.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.text = option.text;
    styleDropdown.appendChild(opt);
  });
  
  // Function to set a cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  }
  // Load saved theme from cookie and apply it immediately

  
  // Apply the saved theme when the page loads
  applySavedTheme();
  // Function to get a cookie by name
  function getCookie(name) {
    const nameEQ = `${name}=`;
    const cookiesArray = document.cookie.split(';');
    for (let cookie of cookiesArray) {
      cookie = cookie.trim();
      if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length);
    }
    return null;
  }
  
  // Apply the selected theme and update the cookie
  styleDropdown.addEventListener('change', (event) => {
    const selectedTheme = event.target.value;
    document.body.className = selectedTheme; // Apply theme to body
    setCookie('selectedTheme', selectedTheme, 7); // Update cookie with new theme
  });
  
  // Load saved theme from cookie on page load
  const savedTheme = getCookie('selectedTheme');
  if (savedTheme) {
    document.body.className = savedTheme; // Apply saved theme
    styleDropdown.value = savedTheme; // Set dropdown to saved theme
  }
  
themeDropDownHolder.appendChild(themeImg);
themeDropDownHolder.appendChild(styleDropdown);

// // Populate the dropdown with theme options
// themeOptions.forEach((option) => {
//     const optionElement = document.createElement('option');
//     optionElement.value = option.value;
//     optionElement.textContent = option.text;
//     styleDropdown.appendChild(optionElement);
//   });
  

// Function to apply the theme styles
const applyTheme = (theme) => {
    document.body.classList.remove('theme-dark', 'theme-light');
    if (theme === 'theme-dark') {
        document.body.style.backgroundColor = "grey";
         wrapper.style.backgroundImage = "none";
        wrapper.style.backgroundColor = "#e6e6e6"
        document.body.style.filter = "invert(0.9)";
        loginRightImg.style.filter = "invert(1)";
        logoImg.style.filter = "invert(1)";
    } else if (theme === 'theme-light') {
        document.body.style.backgroundColor = "#424242";
        document.body.style.filter = "hue-rotate(51deg)";
        loginRightImg.style.filter = "invert(0) hue-rotate(300deg)";
        logoImg.style.filter = "invert(0) hue-rotate(300deg)";
        wrapper.style.backgroundImage = "linear-gradient(175deg, #ae86ff, #7890fb, #ff7ac099, transparent)";
        
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.filter = "none";
        loginRightImg.style.filter = "invert(0)";
        logoImg.style.filter = "invert(0)";
        wrapper.style.backgroundImage = "none";
        wrapper.style.backgroundColor = "#e6e6e6"

    }
};

// Listen for final theme selection change
styleDropdown.addEventListener('change', (event) => {
    const selectedTheme = event.target.value;
    applyTheme(selectedTheme); // Apply the chosen theme permanently
});
  
function applySavedTheme() {
    const savedTheme = getCookie('selectedTheme');
    
    if (savedTheme) {
        
    //   document.body.className = savedTheme; // Apply saved theme to body
      styleDropdown.value = savedTheme; // Set dropdown to saved theme
    //   applyTheme(); // Apply the saved theme to the document body
      
    }
  }
  const selectedTheme = styleDropdown.value;
  applyTheme(selectedTheme);
// Add preview on hover
styleDropdown.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'OPTION') {
        const previewTheme = event.target.value;
        applyTheme(previewTheme); // Apply the preview theme temporarily
    }
});

// Reset to selected theme on mouseout
styleDropdown.addEventListener('mouseout', () => {
    const selectedTheme = styleDropdown.value;
    applyTheme(selectedTheme); // Reset to currently selected theme
});
// themeDropDownHolder.addEventListener('mouseover', () => {
//     // Insert dropdown and add show class
//     themeDropDownHolder.insertBefore(styleDropdown, themeImg);    

//     setTimeout(() => {
        
//     styleDropdown.classList.add(styles.show); // Show dropdown with transition
//     }, 1000); // Delay before hiding

// });

// themeDropDownHolder.addEventListener('mouseout', () => {
//     // Remove show class with a timeout to allow transition
//     styleDropdown.classList.remove(styles.show); // Hide dropdown with transition
//     setTimeout(() => {
//         themeDropDownHolder.removeChild(styleDropdown);
    
//     }, 1000); // Delay before hiding
// });