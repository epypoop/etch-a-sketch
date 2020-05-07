function setGrid(noOfSquares) {
    let boxHeight = 512 / noOfSquares;
    container.style.gridTemplateColumns = `repeat(${noOfSquares}, ${boxHeight}px)`;

    for (i = 0; i < noOfSquares; i++) {
        for (j = 0; j < noOfSquares; j++) {
            const square = document.createElement('div');
            square.style.width = `${boxHeight}px`;
            square.style.height = `${boxHeight}px`;
            square.style.backgroundColor = 'lightgray';
            // set some sorta property to know if a color has been set already, data-key?
    
            square.addEventListener('mouseover', () => {
                const randomHexColor = Math.floor(Math.random()*16777215).toString(16);
                square.style.backgroundColor = `#${randomHexColor}`;
                
                
            });
        
            container.appendChild(square);
        }
    }
}

function setNewGrid() {
    userSquares = prompt("How many squares should the side have?", "");
    container.textContent = "";
    setGrid(userSquares);
}

setGrid(16);

