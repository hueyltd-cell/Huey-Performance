const menuButton = document.querySelector('.menu-btn');
const navigation = document.querySelector('#main-nav');

menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
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
