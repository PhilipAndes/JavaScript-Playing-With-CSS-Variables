// Select all inputs from the DOM:
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // const suffix = the dataset with the name sizing
  // We also have to say or nothing because some dont have a sizing, like the color one
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Loop over the inputs
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));