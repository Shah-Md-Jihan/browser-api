document.getElementById('add-ls-button').addEventListener('click', function () {
    const nameField = document.getElementById('input-field');
    const nameValue = nameField.value;
    console.log(nameValue);
    localStorage.setItem('name', nameValue);
});
document.getElementById('remove-ls-button').addEventListener('click', function () {

    localStorage.removeItem('name');
});
document.getElementById('clear-ls-button').addEventListener('click', function () {

    localStorage.clear();
});