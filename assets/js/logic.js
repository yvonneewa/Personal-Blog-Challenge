document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#toggle");
  const body = document.querySelector("body");


  const savedTheme = localStorage.getItem("currentTheme");
  if (savedTheme) {
      body.setAttribute("class", savedTheme);
  }

  toggle.addEventListener("click", () => {
      const currentTheme = body.classList.contains("darkMode") ? "lightMode" : "darkMode";
      body.setAttribute("class", currentTheme);
      localStorage.setItem("currentTheme", currentTheme);
  });

  try {
      
  } catch (error) {
      console.error('Error accessing localStorage:', error);
  }
});
