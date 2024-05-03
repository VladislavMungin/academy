const swiper = new Swiper('.swiper', {
	slidesPerView: 'auto',
	freeMode: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		dragSize: 420,
	},
});

if (window.innerWidth <= 900) {
	const slideHidden = document.querySelector('.hidden');
	slideHidden.remove();
	const cite = document.querySelector('.director__box-cite');
	console.log(cite);
	const directorBox = document.querySelector('.director__box');
	directorBox.append(cite);
}
