let emailCollectorForm = document.getElementById('EmailCollector');
emailCollectorForm.addEventListener('submit', event => {
event.preventDefault();


console.log('the event is firing');

let ourFormData = new FormData(event.target);

let userFirstName = ourFormData.get("firstName");

let userLastName = ourFormData.get("lastName");

let userEmail = ourFormData.get("emailAddress");

let updatedHtmlContent = `
<h2>Good luck, ${userFirstName + " " + userLastName} </h2>

<p> We doubt we'll be seeing you at the finish line!</p>

<p class="fine-print">An instruction guide on last rites and living-will finalization will be sent to ${userEmail}</p> `

let ourMainContent = document.getElementById('MainContent');
ourMainContent.innerHTML = updatedHtmlContent;
    
});