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

// Variavel do formulario
const formLogin = document.querySelector('#system_login');

// Evento de submit para realizer o login
formLogin.addEventListener("submit", async function (e) {
    e.preventDefault();

    const user = document.querySelector('#user').value;
    const pass = document.querySelector('#pass').value;

    const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario: user, pass: pass })
    });

    const text = await res.text();
    console.log("STATUS:", res.status);
    console.log("RESPOSTA:", text);

    if (!res.ok) {
        document.getElementById("msg_error").innerText = text;
        return;
    }

    const data = JSON.parse(text);
    localStorage.setItem("token", data.token);
    window.location.href = "main.html";
});


/* if (userValue != userTemp && passValue != passTemp) {
        const msgError = document.getElementById('msg_error');
        msgError.innerText = 'Usuário não cadastrado';
        msgError.classList.remove('notify');
        void msgError.offsetWidth;
        msgError.classList.add('notify');
        return
    }  */