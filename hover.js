// mouseover effect

document.getElementById('mover_over')
    .addEventListener('mouseover',
        function () {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white'
        }
    )
document.getElementById('mover_over')
    .addEventListener('mouseout',
        function () {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black'
        }
    )