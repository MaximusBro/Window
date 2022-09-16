import checkNumInputs from "./checkNumInputs";
const changeModalState = (state) => {
	const windowForm = document.querySelectorAll(".balcon_icons_img"),
		windowWidth = document.querySelectorAll("#width"),
		windowHeight = document.querySelectorAll("#height"),
		windowType = document.querySelectorAll("#view_type"),
		windowProfile = document.querySelectorAll(".checkbox");

	checkNumInputs("#width");
	checkNumInputs("#height");
	function bindActionToElems(event, elem, prop) {

		function clearValidation(nodeName) {
			elem.forEach(item => {
				if (item.nodeName === nodeName)
					item.style.border = "";
			});
		};

		elem.forEach((item, i) => {
			if (item.value == "" && item.getAttribute("type") === "text") {
				item.style.border = "1px solid red";
			}
			if (item.nodeName === "SPAN") {
				item.style.border = "1px solid red";
			}

			item.addEventListener(event, () => {

				switch (item.nodeName) {
					case "SPAN":
						state[prop] = i;
						clearValidation("SPAN");
						break;
					case "INPUT":
						if (item.getAttribute("type") === "checkbox") {
							i === 0 ? state[prop] = "Холодне" : state[prop] = "Тепле";
							elem.forEach((box, j) => {
								box.checked = false;
								if (i === j) {
									box.checked = true;
								}
							});
						} else {
							state[prop] = item.value;
							item.style.border = "";
						}
						if (item.value == "") {
							item.style.border = "1px solid red";
						}
						break;
					case "SELECT":
						state[prop] = item.value;
						break;
				}
				console.log(state);
			})
		});
	}
	bindActionToElems("click", windowForm, "form");
	bindActionToElems("input", windowHeight, "height");
	bindActionToElems("input", windowWidth, "width");
	bindActionToElems("change", windowType, "type");
	bindActionToElems("change", windowProfile, "profile");

};

export default changeModalState;