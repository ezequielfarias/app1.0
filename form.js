// Função de cadastro
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Verificação se as senhas coincidem
  if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
  }

  // Simulando o armazenamento do usuário no localStorage (pode ser substituído por um backend real)
  const user = {
      name: name,
      email: email,
      password: password
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Cadastro realizado com sucesso!");

  // Redirecionando para a página de login
  window.location.href = "paginaLogin.html";
});

// Função de login (atualizada para comparar com o cadastro salvo)
document.getElementById("form.html").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Recuperando o usuário do localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
      window.location.href = "paginaLogin.html"; // Redireciona para a página de dashboard
  } else {
      alert("Email ou senha incorretos!");
  }
});
