// Função para redirecionar dependendo da escolha de login social
function loginWith(provider) {
  if (provider === 'LinkedIn') {
      window.location.href = "https://www.linkedin.com/oauth/v2/authorization";
  } else if (provider === 'Gmail') {
      window.location.href = "https://accounts.google.com/signin/oauth";
  }
}

// Validação simples de login via formulário
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Aqui você pode adicionar a lógica de autenticação (Ex: requisição à API)
  if (email === "admin.master@gmail.com" && password === "master12345678") {
      window.location.href = "index.html"; // Redireciona para a página de dashboard
  } else {
      alert("Email ou senha incorretos!");
  }
});


