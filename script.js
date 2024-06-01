// Sidebar

const body = document.body;
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

document.addEventListener('click', (e) => {
    // Sidebar management
    if (sidebar.classList.contains('open') && !e.target.closest('.sidebar')) {
        body.classList.remove('blur');
        menuBtn.classList.remove('active');
        sidebar.classList.remove('open');
    } else if (!sidebar.classList.contains('open') && e.target.closest('.menu-btn')) {
        body.classList.add('blur');
        menuBtn.classList.add('active');
        sidebar.classList.add('open');
    }
});

// Header
const DELTA = 5;
let lastScrollTop = 0;
const headerHeight = header.offsetHeight;
let didScroll = false;

document.addEventListener('scroll', (e) => {
    didScroll = true;
});

setInterval(() => {
    if (didScroll) {
        checkScroll();
        didScroll = false;
    }
}, 300);

function checkScroll() {
    const currentScroll = window.scrollY;

    if (Math.abs(currentScroll - lastScrollTop) < DELTA) {
        return;
    }

    if (currentScroll < headerHeight) {
        header.classList.remove('show');
        header.classList.remove('hide');
    } else if (currentScroll > headerHeight && currentScroll > lastScrollTop) {
        header.classList.remove('show');
        header.classList.add('hide');
    } else if (Math.abs(currentScroll - lastScrollTop) > DELTA) {
        header.classList.remove('hide');
        header.classList.add('show')
    }

    lastScrollTop = currentScroll;
}

// Link highlight
const links = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            links.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
            activeLink.classList.add('active');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});