


export const getRowChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
export const getChars = [1, 2, 3, 4, 5, 6, 7, 8]

export const setFigurePlace = (coordinates, image) => {
    const getSquare = document.getElementsByClassName('square-'+ coordinates[0] + coordinates[1])[0]
    const shellImg = document.createElement('div')
    shellImg.classList.add('piece-img')
    const img = document.createElement('img')
    img.src = image

    shellImg.append(img)

    getSquare.append(shellImg)
}