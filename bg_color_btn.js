//    <!-- Red Color BUtton  -->
document.getElementById('red_btn')
    .addEventListener('click',
        function () {
            document.body.style.backgroundColor = 'red'
        }
    )
document.getElementById('red_btn')
    .addEventListener('dblclick',
        function () {
            document.body.style.backgroundColor = 'white'
        }
    )

// green_btn

document.getElementById('green_btn')
    .addEventListener('click',
        function () {
            document.body.style.backgroundColor = 'green'
        }
    )
document.getElementById('green_btn')
    .addEventListener('dblclick',
        function () {
            document.body.style.backgroundColor = 'white'
        }
    )


// blue_btn

document.getElementById('blue_btn')
    .addEventListener('click',
        function () {
            document.body.style.backgroundColor = 'blue'
        }
    )
document.getElementById('blue_btn')
    .addEventListener('dblclick',
        function () {
            document.body.style.backgroundColor = 'white'
        }
    )

// /purple_btn

document.getElementById('purple_btn')
    .addEventListener('click',
        function () {
            document.body.style.backgroundColor = 'purple'
        }
    )
document.getElementById('purple_btn')
    .addEventListener('dblclick',
        function () {
            document.body.style.backgroundColor = 'white'
        }
    )

// yellow_btn
document.getElementById('yellow_btn')
    .addEventListener('click',
        function () {
            document.body.style.backgroundColor = 'yellow'
        }
    )
document.getElementById('yellow_btn')
    .addEventListener('dblclick',
        function () {
            document.body.style.backgroundColor = 'white'
        }
    )

//pink_btn

document.getElementById('pink_btn')
    .addEventListener('click',
        function () {
            document.body.style.backgroundColor = 'pink'
        }
    )
document.getElementById('pink_btn')
    .addEventListener('dblclick',
        function () {
            document.body.style.backgroundColor = 'white'
        }
    )

//orange_btn
document.getElementById('orange_btn')
    .addEventListener('click',
        function () {
            document.body.style.backgroundColor = 'orange'
        }
    )
document.getElementById('orange_btn')
    .addEventListener('dblclick',
        function () {
            document.body.style.backgroundColor = 'white'
        }
    )

//black_btn

document.getElementById('black_btn')
    .addEventListener('click',
        function () {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white'
        }
    )
document.getElementById('black_btn')
    .addEventListener('dblclick',
        function () {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black'
        }
    )


//random color
function changeColor() {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${red}, ${green}, ${blue})`;

    document.body.style.backgroundColor = randomColor;
}

document.getElementById('random')
    .addEventListener('dblclick',
        function () {
            document.body.style.backgroundColor = 'white';

        }
    )
