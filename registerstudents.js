const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const ageinput = document.getElementById("Age")
const saveBtn = document.getElementById('save');
const tableBody = document.getElementById('tableBody');



const getElementValue = (element) => {
    return element.value;
}

saveBtn.addEventListener("click", (event)  => {
    event.preventDefault();

const firstNameValue = getElementValue(firstNameInput);
const lastNameValue = getElementValue(lastNameInput);
const emailValue = getElementValue(emailInput);
const ageValue = getElementValue(ageinput);

    const tableRow = document.createElement("tr");
    
    const firstNameTd = document.createElement("td");
    firstNameTd.innerHTML = firstNameValue;
    tableRow.appendChild(firstNameTd)

    

    const lastNameTd = document.createElement("td");
    lastNameTd.innerHTML = lastNameValue;
    tableRow.appendChild(lastNameTd)

    const emailTd = document.createElement("td");
    emailTd.innerHTML = emailValue;
    tableRow.appendChild(emailTd)

    const ageTd =document.createElement("td");
    ageTd.innerHTML = ageValue;
    tableRow.appendChild(ageTd)

    tableBody.appendChild(tableRow);
    firstNameInput= "";

})
