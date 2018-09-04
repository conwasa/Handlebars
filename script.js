window.onload = function () {
console.log('hello');
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
ourRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Action to be performed when the document is read;
	console.log('ready state good');
 	var data = JSON.parse(ourRequest.responseText);
	createHTML(data);
  } else {
	 console.log('readyState=' + this.readyState + ' status=' +this.status);
  }
};
ourRequest.onerror = function () {
  console.log('connection error');
}
ourRequest.send();

Handlebars.registerHelper("calculateAge", function(birthYear) {
	var age = new Date().getFullYear() - birthYear;
	if (age > 2) {
		return age + " years old";
	} else {
		return "Less than three years old";
	}
})

function createHTML (petsData) {
	var rawTemplate = document.getElementById("petsTemplate").innerHTML;
	var compiledTemplate = Handlebars.compile(rawTemplate);
	var ourGeneratedHTML = compiledTemplate(petsData);
	
	var petsContainer = document.getElementById("pets-container");
	petsContainer.innerHTML = ourGeneratedHTML;
}

}
