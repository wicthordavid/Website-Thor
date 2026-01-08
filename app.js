const searchIcon = document.getElementById("search-icon");
const searchInput = document.querySelector(".search-input");

// Abrir / fechar ao clicar na lupa
searchIcon.addEventListener("click", (e) => {
    e.stopPropagation(); // impede fechar imediatamente
    searchInput.classList.toggle("active");

    if (searchInput.classList.contains("active")) {
        searchInput.focus();
    }
});

// Impede fechar ao clicar dentro do input
searchInput.addEventListener("click", (e) => {
    e.stopPropagation();
});

// Fechar ao clicar fora
document.addEventListener("click", () => {
    searchInput.classList.remove("active");
});

// BUSCA SIMPLES NA PÁGINA (ENTER)
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();

        const termo = searchInput.value.trim().toLowerCase();
        if (!termo) return;

        const textoPagina = document.body.innerText.toLowerCase();

        if (textoPagina.includes(termo)) {
            window.find(termo);
        } else {
            alert(`Nenhum resultado encontrado para: "${termo}"`);
        }
    }
});

