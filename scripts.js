document.getElementById('toggle-pink-mode').addEventListener('click', function () {
    document.body.classList.toggle('pink-mode');
    // Ensure dark mode is turned off when pink mode is on
    if (document.body.classList.contains('pink-mode')) {
        document.body.classList.remove('dark-mode');
    }
});

document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    // Ensure pink mode is turned off when dark mode is on
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('pink-mode');
    }
});
