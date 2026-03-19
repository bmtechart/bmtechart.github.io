
/* 
const nav = document.querySelector('.nav-background');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const headerBottom = header.offsetHeight;
    if (window.scrollY >= headerBottom - nav.offsetHeight) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

*/

const slides = document.querySelectorAll('.hero-slide');
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.target;

    slides.forEach(slide => {
      if (slide.id === target) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  });
});

// Open Modal

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const items = document.querySelectorAll(".portfolio-item");

items.forEach(item => {
	item.addEventListener("click", async () => {
		const url = item.getAttribute("data-url");

        
		try {
			const response = await fetch(url);
			const html = await response.text();

			modalContent.innerHTML = html;
			modal.classList.add("show");
		} catch (err) {
			modalContent.innerHTML = "<p>Failed to load content.</p>";
            modal.classList.add("show");
		}
            
	});
});

// Close Modal

const closeBtn = document.querySelector(".modal-close");

closeBtn.addEventListener("click", () => {
	modal.classList.remove("show");
	modalContent.innerHTML = "";
});

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("modal-close")) {
		modal.classList.remove("show");
		modalContent.innerHTML = "";
	}
});

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		modal.classList.remove("show");
		modalContent.innerHTML = "";
	}
});

/*
modal.addEventListener("click", (e) => {
	if (e.target === modal) {
		modal.classList.remove("show");
		//modalContent.innerHTML = "";
	}
});
*/