document.getElementById("credits-button").addEventListener("click", function() {
  document.querySelector('.contentFrame').src = "/credits.html";
  document.querySelector('.contentFrame').style.display = 'block';
  document.querySelector('.content').style.display = 'none';
});
