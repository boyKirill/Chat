document.addEventListener("DOMContentLoaded", () => {
	document.addEventListener("click", function (e) {
		let elem = e.target;
		let nameClass = elem.getAttribute('class');
		let firstPartClass = nameClass.split("__")[0];
		
		if (nameClass == `${firstPartClass}__link` ) {
			document.querySelector(`.${nameClass}.active`).classList.remove('active');
			elem.classList.add('active');
		}
	});
});