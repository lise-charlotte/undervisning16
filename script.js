// Submit knappen
const submitBtn = document.querySelector('#submit-btn');

// Konvertering knapp

const konverteringButton = document.querySelector('#konverter-btn')

// Number input

const numberInput = document.querySelector('#number')

// Personalia elementer
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');

// Country element
const countryInput = document.querySelector('#country');

function submit (event) {
    event.preventDefault();

    const name = nameInput.value; 
    const surname = surnameInput.value;
    const country = countryInput.value;

    const hobbyArray = [];

    if (fiskeElement.checked === true) {
        hobbyArray.push(fiskeElement.value)
    }

    if (gamingElement.checked === true) {
        hobbyArray.push(gaming.Element.value)
    }

    if (kodingElement.checked === true) {
        hobbyArray.push(kodingElement.value)
    }

    console.log(name)
    console.log(surname)
    console.log(country)
    console.log(hobbyArray)
}

function konvertering (event) {
    event.preventDefault()

    const number = numberInput.value

    const feet = number * 3.2

    konverteringButton.textContent = number + " meter = " + feet + " feet"

}

konverteringButton.addEventListener('click', konvertering);
submitBtn.addEventListener('click', submit);