// js/include.js
document.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll("[data-include]");
  
    includes.forEach(el => {
      const file = el.getAttribute("data-include");
      fetch(file)
        .then(res => {
          if (!res.ok) throw new Error(file + " não encontrado");
          return res.text();
        })
        .then(html => el.innerHTML = html)
        .catch(err => console.error("Erro:", err));
    });
  });
  