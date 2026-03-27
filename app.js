// Mobile menu toggle
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_items = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
  const expanded = hamburger.classList.contains('active');
  hamburger.setAttribute('aria-expanded', expanded);
});

menu_items.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobile_menu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Service details functionality
const serviceItems = document.querySelectorAll('.service-item');
const detailSections = document.querySelectorAll('.service-detail');

function hideAllDetails() {
  detailSections.forEach(detail => {
    detail.classList.remove('active');
  });
}

function showDetail(detailId) {
  hideAllDetails();
  const targetDetail = document.getElementById(detailId);
  if (targetDetail) {
    targetDetail.classList.add('active');
    targetDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

serviceItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const serviceType = item.getAttribute('data-service');
    if (serviceType) {
      showDetail(`detail-${serviceType}`);
    }
  });
});

const closeButtons = document.querySelectorAll('.close-detail');
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    hideAllDetails();
  });
});

const offerButtons = document.querySelectorAll('.offer-btn');
offerButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});