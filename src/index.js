import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// JavaScript function to get the current year
function getCurrentYear() {
  return new Date().getFullYear();
}

// Set the current year in the HTML
document.getElementById("currentYear").innerText = getCurrentYear();
