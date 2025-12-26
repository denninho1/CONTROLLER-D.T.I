// Seleciona o input de senha e o botão/span
const senhaInput = document.getElementById("pass");
const mostrarBtn = document.getElementById("hide_pass");

// Adiciona o evento de clique
mostrarBtn.addEventListener("click", () => {
    if (senhaInput.type === "password") {
        // Mostra a senha
        senhaInput.type = "text";
        mostrarBtn.textContent = "ESCONDER"; // muda o texto
    } else {
        // Volta a esconder
        senhaInput.type = "password";
        mostrarBtn.textContent = "MOSTRAR"; // volta o texto
    }
});