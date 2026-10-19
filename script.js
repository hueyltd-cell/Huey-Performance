const menuButton = document.querySelector('.menu-btn');
const navigation = document.querySelector('#main-nav');
const servicesMenu = document.querySelector('.services-menu');
const closeServices = () => { if (servicesMenu) servicesMenu.open = false; };
document.addEventListener('click', (event) => {
  if (!servicesMenu?.contains(event.target)) closeServices();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && servicesMenu?.open) {
    closeServices();
    servicesMenu.querySelector('summary').focus();
  }
});
servicesMenu?.addEventListener('focusout', (event) => {
  if (!servicesMenu.contains(event.relatedTarget)) closeServices();
});

menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  if (!open) closeServices();
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    closeServices();
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#ecu-enquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = (id) => document.querySelector(id)?.value.trim() || 'Not supplied';
  const message = [
    'Hi Huey Performance, I have an ECU enquiry.',
    '',
    `Name: ${value('#customer-name')}`,
    `Phone: ${value('#customer-phone')}`,
    `Vehicle / machine: ${value('#machine-type')}`,
    `Service needed: ${value('#service-needed')}`,
    `Make, model and year: ${value('#vehicle-details')}`,
    `ECU / part number: ${value('#ecu-number')}`,
    `Fault or work required: ${value('#fault-details')}`
  ].join('\n');

  window.open(`https://wa.me/447702795955?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
