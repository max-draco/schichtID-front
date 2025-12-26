const changeThemeDrop = document.createElement('select');
const lightOption = document.createElement('option');
const darkOption = document.createElement('option');

// Set the text and values for the options
lightOption.text = 'Light Mode';
lightOption.value = 'light';
darkOption.text = 'Dark Mode';
darkOption.value = 'dark';

// Append options to the dropdown
changeThemeDrop.appendChild(lightOption);
changeThemeDrop.appendChild(darkOption);

// Add classes
changeThemeDrop.classList.add(styles.changeThemeDrop);

// Insert the dropdown into your form (you can place it wherever you want)
headerTop.appendChild(changeThemeDrop);
