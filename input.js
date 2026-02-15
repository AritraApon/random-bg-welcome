
//    <!-- Hello , your Name , Welcome massage  -->


document.getElementById('Submit_btn').addEventListener('click',
    function () {
        const userName = document.getElementById('input_userName');
        const yourName = userName.value;
        // console.log('Hello',yourName,'👋','Welcome')
        const welcomeContainer = document.getElementById("welcome_container")
        // new p tag add
        const containerP = document.createElement('p')
        containerP.classList.add("text-xl", "font-bold", "text-left" ,"mt-[30px]","ml-[30px]")
        containerP.innerText ='Hello'+ ' ' + yourName +' ' +'👋Welcome' ;


        // append child connect
        welcomeContainer.appendChild(containerP)

        // clean name :
        userName.value = '';

        if(yourName === ''){
            alert('Please Enter Your User Name')
            containerP.style.display='none'
        }

    }
)


