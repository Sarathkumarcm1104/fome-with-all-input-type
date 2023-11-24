function togglePasswordVisibility(inputId, buttonId) {
    var passwordInput = document.getElementById(inputId);
    var showPasswordButton = document.getElementById(buttonId);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordButton.textContent = 'Hide Password';
        passwordInput.style.width = '95%';
        passwordInput.style.padding = '10px';
        passwordInput.style.marginTop = '5px';
        passwordInput.style.border = '1px solid #ccc';
        passwordInput.style.borderRadius = '5px';
    } else {
        passwordInput.type = 'password';
        showPasswordButton.textContent = 'Show Password';
    }
}

document.getElementById('showPasswordButton').addEventListener('click', function () {
    togglePasswordVisibility('inps', 'showPasswordButton');
});
document.getElementById('showConfirmPasswordButton').addEventListener('click', function () {
    togglePasswordVisibility('icps', 'showConfirmPasswordButton');
});

document.getElementById('addAddressButton').addEventListener('click', function () {

    var newTextarea = document.createElement('textarea');
    newTextarea.placeholder = 'Enter the address';
    newTextarea.rows = '10';
    newTextarea.cols = '30';
    newTextarea.style.height = '150px';
    newTextarea.style.width = '400px';

    var form = document.getElementById('formsi');
    form.insertBefore(newTextarea, document.getElementById('addAddressButton'));
});

function validateFirstName() {
    var firstNameInput = document.getElementById('ifname');
    var firstNameError = document.getElementById('firstnameerror');
    var firstNamePattern = /^[A-Za-z\w\s]+$/;

    if (firstNameInput.value === '') {
        firstNameError.innerHTML = 'First Name is required.';
        firstNameError.style.color='red'
        firstNameInput.classList.add('error');
        return false;
    }else if (!firstNamePattern.test(firstNameInput.value)) {
        firstNameError.innerHTML = 'First name must contain only letters.';
        firstNameError.style.color='red'
        firstNameInput.classList.add('error');
        return false;
    } else {
        firstNameError.innerHTML = '';
        firstNameInput.classList.remove('error');
        return true;
    }
}

// var firstNameInput = document.getElementById('ifname');
// firstNameInput.addEventListener('input', validateFirstName);

function validateLastName() {
    var lastNameInput = document.getElementById('ilname');
    var lastNameError = document.getElementById('lastnameerror');
    var lastNamePattern = /^[A-Za-z\w\s]+$/; 

    if (lastNameInput.value === '') {
        lastNameError.innerHTML = 'Last Name is required.';
        lastNameErrorNameError.style.color='red'
        lastNameInputNameInput.classList.add('error');
        return false;
    }else if (!lastNamePattern.test(lastNameInput.value)) {
        lastNameError.innerHTML = 'Last name must contain only letters.';
        lastNameError.style.color='red'
        lastNameInput.classList.add('error');
        return false;
    } else {
        lastNameError.innerHTML = '';
        lastNameInput.classList.remove('error');
        return true;
    }
}

// var lastNameInput = document.getElementById('ilname');
// lastNameInput.addEventListener('input', validateLastName);

function validateGmail() {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailerror');
    var emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; 

    if (!emailPattern.test(emailInput.value)) {
        emailError.innerHTML = 'Please enter a valid Gmail address.';
        emailError.style.color='red';
        emailInput.classList.add('error'); 
        return false;
    } else {
        emailError.innerHTML = '';
        emailInput.classList.remove('error');
        return true;
    }
}

// var emailInput = document.getElementById('email');
// emailInput.addEventListener('input', validateGmail);

function validatePhoneNumber() {
    var phoneNumberInput = document.getElementById('pnumber');
    var phoneError = document.getElementById('phoneerror');
    var phonePattern = /^\+[0-9]{2}-[0-9]{10}$/; 

    if (!phonePattern.test(phoneNumberInput.value)) {
        phoneError.innerHTML = 'Please enter a valid phone number in the format +91-0000000000.';
        phoneError.style.color='red';
        phoneNumberInput.classList.add('error'); 
        return false;
    } else {
        phoneError.innerHTML = '';
        phoneNumberInput.classList.remove('error');
        return true;
    }
}

// var phoneNumberInput = document.getElementById('pnumber');
// phoneNumberInput.addEventListener('input', validatePhoneNumber);

function validatePassword() {
    var passwordInput = document.getElementById('inps');
    var confirmPasswordInput = document.getElementById('icps');
    var passError = document.getElementById('passerror');
    var cpassError = document.getElementById('cpasserror');
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password criteria

    if (!passwordPattern.test(passwordInput.value)) {
        passError.innerHTML = 'Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character.';
        passError.style.color='red';
        passwordInput.classList.add('error');
        return false;
    } else {
        passError.innerHTML = '';
        passwordInput.classList.remove('error');
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        cpassError.innerHTML = 'Passwords do not match.';
        cpassError.style.color='red';
        confirmPasswordInput.classList.add('error'); 
        return false;
    } else {
        cpassError.innerHTML = '';
        confirmPasswordInput.classList.remove('error');
    }

    return true;
}

var passwordInput = document.getElementById('inps');
var confirmPasswordInput = document.getElementById('icps');
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validatePassword);

function validateDateOfBirth() {
    var dobInput = document.getElementById('dateob');
    var dobError = document.getElementById('doberror');
    var currentDate = new Date();
    var dob = new Date(dobInput.value);

    var age = currentDate.getFullYear() - dob.getFullYear();

    if (age < 18 || age > 110) {
        dobError.innerHTML = 'Age must be between 18 and 110 years.';
        dobError.style.color='red';
        dobInput.classList.add('error');
        return false;
    } else {
        dobError.innerHTML = '';
        dobInput.classList.remove('error');
        return true;
    }
}

// var dobInput = document.getElementById('dateob');
// dobInput.addEventListener('input', validateDateOfBirth);

function validateNationality() {
    var countrySelect = document.getElementById('country');
    var nationalityError = document.getElementById('natierror');

    if (countrySelect.value === 'op') {
        nationalityError.innerHTML = 'Please select a nationality.';
        nationalityError.style.color = 'red';
        countrySelect.classList.add('error'); 
        return false;
    } else {
        nationalityError.innerHTML = '';
        countrySelect.classList.remove('error');
        return true;
    }
}

// var countrySelect = document.getElementById('country');
// countrySelect.addEventListener('change', validateNationality);

function validateHobbies() {
    var hobbySelect = document.getElementById('hob');
    var hobbiesError = document.getElementById('hobbierror');
    var selectedHobbies = Array.from(hobbySelect.selectedOptions).map(option => option.value);

    if (selectedHobbies.length === 0) {
        hobbiesError.innerHTML = 'Please select at least one hobby.';
        hobbiesError.style.color = 'red';
        hobbySelect.classList.add('error'); 
        return false;
    } else {
        hobbiesError.innerHTML = '';
        hobbySelect.classList.remove('error');
        return true;
    }
}

// var hobbySelect = document.getElementById('hob');
// hobbySelect.addEventListener('change', validateHobbies);

function validateState() {
    var stateInput = document.getElementById('state');
    var stateError = document.getElementById('stateerror');

    if (stateInput.value.trim() === '') {
        stateError.innerHTML = 'Please select a state.';
        stateError.style.color='red';
        stateInput.classList.add('error'); 
        return false;
    } else {
        stateError.innerHTML = '';
        stateInput.classList.remove('error');
        return true;
    }
}

// var stateInput = document.getElementById('state');
// stateInput.addEventListener('input', validateState);

function validateAadhaarFileType() {
    var aadhaarInput = document.getElementById('iadh');
    var aadhaarError = document.getElementById('adhaarerror');
    
    var fileName = aadhaarInput.value;
    
    if (!/\.pdf$/i.test(fileName)) {
        aadhaarError.innerHTML = 'Please upload a PDF file for Aadhaar.';
        aadhaarError.style.color='red';
        aadhaarInput.classList.add('error'); 
        return false;
    } else {
        aadhaarError.innerHTML = '';
        aadhaarInput.classList.remove('error');
        return true;
    }
}

// var aadhaarInput = document.getElementById('iadh');
// aadhaarInput.addEventListener('change', validateAadhaarFileType);

function validateGender() {
    var genderInputs = document.querySelectorAll('input[name="gender"]');
    var genderError = document.getElementById('genderror');
    var selectedGender = Array.from(genderInputs).some(input => input.checked);

    if (!selectedGender) {
        genderError.innerHTML = 'Please select a gender.';
        genderError.style.color='red';
        return false;
    } else {
        genderError.innerHTML = '';
        return true;
    }
}

// var genderInputs = document.querySelectorAll('input[name="gender"]');
// genderInputs.forEach(input => input.addEventListener('change', validateGender));

function validateLanguages() {
    var languageCheckboxes = document.querySelectorAll('input[name="lang"]');
    var langError = document.getElementById('langerror');
    var selectedLanguages = Array.from(languageCheckboxes).filter(checkbox => checkbox.checked);

    if (selectedLanguages.length < 2) {
        langError.innerHTML = 'Please select at least two languages.';
        langError.style.color='red';
        return false;
    } else {
        langError.innerHTML = '';
        return true;
    }
}

// var languageCheckboxes = document.querySelectorAll('input[name="lang"]');
// languageCheckboxes.forEach(checkbox => checkbox.addEventListener('change', validateLanguages));

function validateVerification() {
    var verificationCheckbox = document.getElementById('iver');
    var verificationError = document.getElementById('vererror');

    if (!verificationCheckbox.checked) {
        verificationError.innerHTML = 'Please check the verification box to confirm your details.';
        verificationError.style.color='red';
        return false;
    } else {
        verificationError.innerHTML = '';
        return true;
    }
}

var verificationCheckbox = document.getElementById('iver');
verificationCheckbox.addEventListener('change', validateVerification);

function validateForm() {
    var isFirstNameValid = validateFirstName();
    var isEmailValid = validateGmail();
    var isPhoneNumberValid = validatePhoneNumber();
    var isPasswordValid = validatePassword();
    var isConfirmPasswordValid = validatePassword(); 
    var isDateOfBirthValid = validateDateOfBirth();
    var isNationalityValid = validateNationality();
    var isHobbiesValid = validateHobbies();
    var isStateValid = validateState();
    var isAadhaarFileTypeValid = validateAadhaarFileType();
    var isGenderValid = validateGender();
    var isLanguagesValid = validateLanguages();
    var isVerificationValid = validateVerification();

    if (
        isFirstNameValid &&
        isEmailValid &&
        isPhoneNumberValid &&
        isPasswordValid &&
        isConfirmPasswordValid &&
        isDateOfBirthValid &&
        isNationalityValid &&
        isHobbiesValid &&
        isStateValid &&
        isAadhaarFileTypeValid &&
        isGenderValid &&
        isLanguagesValid &&
        isVerificationValid
    ) {
       
        alert('Form is valid. Submitting...');}
    // } else {
        
    //     alert('Form validation failed. Please correct the errors.');
    // }
}

var submitButton = document.getElementById('sub');
submitButton.addEventListener('click', validateForm);

// function storeData() {
//     // Get form values
//     var firstName = document.getElementById('ifname').value;
//     var lastName = document.getElementById('ilname').value;
//     var email = document.getElementById('email').value;
//     var phoneNumber = document.getElementById('pnumber').value;
//     var password = document.getElementById('inps').value;
//     var confirmPassword = document.getElementById('icps').value;
//     var dob = document.getElementById('dateob').value;
//     var country = document.getElementById('country').value;
//     var hobbies=document.getElementById('hob').value;
//     var state = document.getElementById('state').value;
//     var address = document.getElementById('iadd').value;
//     var gender = document.querySelector('input[name="gender"]:checked').value;
//     var language = document.querySelector('input[name="lang"]:checked').value;

//     // Create an object to store the user data
//     var userData = {
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//         phoneNumber: phoneNumber,
//         password: password,
//         dob: dob,
//         country: country,
//         hobbies: hobbies,
//         state: state,
//         address: address,
//         gender: gender,
//         language: language
//     };

    
//     // Convert the object to a JSON string
//     // var userDataJSON = JSON.stringify(userData);

//     // Store the data in localStorage
//     localStorage.setItem('userData', JSON.stringify(userData));

//     // Display a success message
//     alert('Data saved successfully');
// }

// Add an event listener to the form submit button
// var submitButton = document.getElementById('sub');
// submitButton.addEventListener('click', storeData);
