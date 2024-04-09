document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#toggle");
  const body = document.querySelector("body");

  // Set initial theme based on localStorage
  const savedTheme = localStorage.getItem("currentTheme");
  if (savedTheme) {
      body.setAttribute("class", savedTheme);
  }

  toggle.addEventListener("click", () => {
      const currentTheme = body.classList.contains("darkMode") ? "lightMode" : "darkMode";
      body.setAttribute("class", currentTheme);
      localStorage.setItem("currentTheme", currentTheme);
  });

  // Error handling for localStorage operations
  try {
      // Your localStorage operations here
  } catch (error) {
      console.error('Error accessing localStorage:', error);
  }
});
