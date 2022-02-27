document.getElementById('login-submit').addEventListener('click', function(){
    //Get user email
    const usersEmail = document.getElementById('user-email').value;
    
    // Get user password
    const usersPassword = document.getElementById('user-password').value;

    //Check email and password
    if(usersEmail === 'ekram@mail.com' && usersPassword === '1234'){
        window.location.href = 'banking-page.html';
    }
})