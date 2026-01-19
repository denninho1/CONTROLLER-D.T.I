// Logoff
const btnLogoff = document.getElementById('btn_logoff');

btnLogoff.addEventListener('click', async () => {
    const token = localStorage.getItem('token');

   if(!token) {
    window.location.href = 'login.html';
    return
   }

   await fetch('http://localhost:3000/auth/logout', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer &{token}`
    }
   });

   localStorage.removeItem('token');

   window.location.href = 'login.html'

})