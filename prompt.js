const showAlert = () => {
    alert("Hello Jenifar");
}

const confirmPicnic = () => {
    const decision = confirm('Are you go to picnic?');
    if (decision === true) {
        const name = prompt("Write your name!");
        console.log(name);
        if (!!name) {
            console.log('Welcome ', name);
        }
    } else {
        alert('Tumi picnic a jete raji hou nai.');
    }
}