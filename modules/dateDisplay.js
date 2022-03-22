import { DateTime } from '../node_modules/luxon/src/luxon.js';

const displayTime = () => {
  const display = document.getElementById('navbar-date');
  const now = DateTime.now();
  const dateFormat = now.toLocaleString(DateTime.DATETIME_MED);
  display.textContent = dateFormat;
};

export default displayTime;