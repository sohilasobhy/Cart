document.getElementById('fullscreenToggle').addEventListener('click', function () {
    const modalDialog = document.getElementById('modalDialog');
    modalDialog.classList.toggle('modal-fullscreen');
});
document.getElementById('fullscreenToggle2').addEventListener('click', function () {
    const modalDialog = document.getElementById('modalDialog2');
    modalDialog.classList.toggle('modal-fullscreen');
});
document.getElementById("btn-close1").addEventListener('click', function () {
    const modalDialog = document.getElementById('modalDialog');
    modalDialog.classList.remove('modal-fullscreen');
})
document.getElementById("btn-close2").addEventListener('click', function () {
    const modalDialog = document.getElementById('modalDialog2');
    modalDialog.classList.remove('modal-fullscreen');
})