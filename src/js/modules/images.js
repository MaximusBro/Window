const images = () => {
	const imgPopup = document.createElement("div"),
		workSection = document.querySelector(".works"),
		bigImage = document.createElement("img"),
		body = document.querySelector("body");

	imgPopup.classList.add("popup_img");
	workSection.appendChild(imgPopup);

	imgPopup.style.justifyContent = "center";
	imgPopup.style.alignItems = "center";
	imgPopup.style.display = "none";


	imgPopup.appendChild(bigImage);

	workSection.addEventListener("click", (e) => {
		e.preventDefault();

		let target = e.target;
		if (target && target.classList.contains("preview")) {
			imgPopup.style.display = "flex";
			body.style.overflow = "hidden";
			const path = target.parentNode.getAttribute("href");
			bigImage.setAttribute("src", path);
			bigImage.style.cssText = "width:72%; height:50%;"

		}
		if (target && target.matches("div.popup_img")) {
			imgPopup.style.display = "none";
			body.style.overflow = "";
		}
	});
}
export default images;