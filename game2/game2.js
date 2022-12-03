function printMousePos(event) {
    console.log(event.clientX, event.clientY)
}

document.addEventListener("click", printMousePos);

let count = 0;
tiles = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]

function check(x_pos) {
    console.log(x_pos)
    for (let i = tiles.length - 1; i >= 0; i--) {
        if (tiles[i][x_pos] === 0) {
            console.log(i, x_pos, tiles[i][x_pos])
            return i
        }

        // if(tiles[i][x_pos] === 0){
        //     return i
        // }
    }

    return -1
}

function allEqual(arr) {
    if (arr[0] !== 0) {
        return new Set(arr).size === 1;
    }
    return false
}

function check_win() {
    for (let i = 0; i < tiles.length; i++) {
        for (let offset = 0; offset <= 3; offset++) {
            slc = (tiles[i]).slice(offset, 4 + offset)
            if (allEqual(slc)) {
                alert('you won')
                return true
            }
        }
    }

    const arrayColumn = (arr, n) => arr.map(x => x[n]);


    for (let i = 0; i < tiles[0].length; i++) {
        console.log(arrayColumn(tiles,i))

    }


}


function clicker(index) {

    let free = check(index)
    console.log(free)
    var svgns = "http://www.w3.org/2000/svg";
    let color = ''
    if (free !== -1) {
        count += 1

        if (count % 2 === 0) {
            color = '#50FF7F';
            tiles[free][index] = 1;

        } else {
            color = '#7F50FF';
            tiles[free][index] = 2;
        }

    }
    console.log(tiles);
    var rect = document.createElementNS(svgns, 'circle');
    let unit = document.getElementsByClassName('block')[0]
    let offset = unit.getBoundingClientRect()

    rect.setAttributeNS(null, 'cx', (900 * 0.14 * (index)) + (offset.width / 2));
    rect.setAttributeNS(null, 'cy', 900 * 0.15 * (free) + (offset.height / 2));
    rect.setAttributeNS(null, 'r', offset.height / 2.3);
    rect.setAttributeNS(null, 'fill', color)

    let svg = document.getElementById("gm")
    svg.appendChild(rect)
    check_win()


}