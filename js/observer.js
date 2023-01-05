// let header = document.querySelector(".container");

// document.addEventListener('scroll',()=>{
//     let scrollTop = window.scrollY;
//     if(scrollTop >200 ){
//         header.style.backgroundColor = 'wh';
//     }else{
//         header.style.backgroundColor = 'transparent'
//     }

// })

// Tab

const tabButtons = [...document.querySelectorAll(".easy-steps-tab > button")];
const tabContent = [
	...document.querySelectorAll(".easy-steps-tab-container > p"),
];

let activeIndex = 0;

function showCurrentTab() {
	tabContent.forEach((tab, i, arr) => {
		tab.style.display = "none";
		arr[activeIndex].style.display = "block";
	});
}

window.addEventListener("load", () => {
	tabContent.forEach((tab) => {
		tab.style.display = "none";
	});
	tabButtons.forEach((btn, i) => {
		btn.setAttribute("data-index", i);
	});
	showCurrentTab();
});

tabButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		activeIndex = btn.dataset.index;
		showCurrentTab();
		console.log(activeIndex);
	});
});
