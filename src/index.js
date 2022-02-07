function component() {
    const element = document.createElement('div');
    element.innerHTML = "Application runs!";
    return element;
}

document.body.appendChild(component());