let count = 0;
tiles = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

function check() {
    for (let i = 0; i <= 2; i++) {
        if (tiles[i][0] === tiles[i][1] && tiles[i][0] === tiles[i][2] && tiles[i][0] !== 0) {
            alert('won')
        }

    }

    for (let i = 0; i <= 2; i++) {
        if (tiles[0][i] === tiles[1][i] && tiles[0][i] === tiles[2][i] && tiles[0][i] !== 0) {
            alert('won')
        }

    }
}


function clicker(index) {
    count += 1
    var svgns = "http://www.w3.org/2000/svg";
    var rect = document.createElementNS(svgns, 'rect');
    let color = ''
    if (count % 2 === 0) {
        color = '#202020';
        tiles[index[1] - 1][index[0] - 1] = 1;

    } else {
        color = '#E8E8E8';
        tiles[index[1] - 1][index[0] - 1] = 2;

    }
    console.log(tiles);


    rect.setAttributeNS(null, 'x', 300 * (index[0] - 1));
    rect.setAttributeNS(null, 'y', 300 * (index[1] - 1));
    rect.setAttributeNS(null, 'width', '32.5%');
    rect.setAttributeNS(null, 'height', '32.5%');
    rect.setAttributeNS(null, 'fill', color);


    let svg = document.getElementById("gemu")
    svg.appendChild(rect)

    console.log(index)

}