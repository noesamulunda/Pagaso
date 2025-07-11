window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const main = document.querySelector("main");

  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      preloader.style.display = 'none';
      main.style.display = 'block';
    }, 500);
  }, 1200); // você pode ajustar esse tempo
});
