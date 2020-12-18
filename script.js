const logo = document.getElementById('logo');
const sidebar = document.getElementById('sidebar');

logo.onclick = () => {
	showSidebar();
	showLinks();
	activateLogo();
};
function activateLogo() {
	// logo.classList.remove('fa-comment-alt');
	if (logo.classList.contains('logo-active')) {
		logo.classList.remove('logo-active');
		logo.classList.add('fa-comment-alt');
	} else {
		logo.classList.remove('fa-comment-alt');
		logo.classList.add('logo-active');
	}
}

function showSidebar() {
	if (sidebar.classList.contains('sidebar-active')) {
		sidebar.classList.remove('sidebar-active');
	} else {
		sidebar.classList.add('sidebar-active');
	}
}
function showhideElement(elem) {
	if (elem.classList.contains('dn')) {
		elem.classList.remove('dn');
	} else {
		elem.classList.add('dn');
	}
}

function showLinks() {
	const links = document.querySelectorAll('.some-link');
	const icons = document.querySelectorAll('.header-icon');

	console.log(links);
	links.forEach((link) => {
		showhideElement(link);
	});
	icons.forEach((icon) => {
		showhideElement(icon);
	});
}
