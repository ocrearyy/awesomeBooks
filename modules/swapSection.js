const swapSection = (newActiveSection) => {
  const oldActiveSection = document.querySelector('section.active');
  oldActiveSection.classList.toggle('active');
  newActiveSection.classList.add('active');
};

export default swapSection;