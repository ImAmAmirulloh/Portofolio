const txtElement = ['Content Creator', 'Web Design Developer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik() {
	if (count == txtElement.length) {
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efekNgetik').textContent = words;

	if(words.length == currentTxt.length) {
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 105);
})();

function theme() {
  var element = document.body;
  element.classList.toggle("lightMode");
}