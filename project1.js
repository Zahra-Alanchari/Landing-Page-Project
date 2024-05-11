let list = document.getElementById('feature-nav-list')
let post = document.getElementById('feature-post')

//switch post in Feature part

list.addEventListener('click', showcontent)

function showcontent(event){
   let btnselect=  event.target

   //select simple Bookmarking element part
    let listSimple = list.firstElementChild
    let btnSimple = listSimple.firstElementChild
    let postSimple = post.firstElementChild

   // select speedy Searching element part
   let listSpeedy = listSimple.nextElementSibling
   let btnSpeedy = listSpeedy.firstElementChild
   let postSpeedy = post.firstElementChild.nextElementSibling
    // select easy Sharing element part
   let listEasy = listSpeedy.nextElementSibling
   let btnEasy = listEasy.firstElementChild 
   let postEasy = postSpeedy.nextElementSibling


   if(btnselect === btnSimple){    //if simple Bookmarkin selected


    btnSimple.classList.add('selected')
    btnSpeedy.classList.remove('selected')
    btnEasy.classList.remove('selected')
    postEasy.classList.add('hidden')
    postSpeedy.classList.add('hidden')
    postSimple.classList.remove('hidden')




   }else if(btnselect === btnSpeedy){ //if speedy Searching selected

    btnSimple.classList.remove('selected')
    btnSpeedy.classList.add('selected')
    btnEasy.classList.remove('selected')
    postEasy.classList.add('hidden')
    postSimple.classList.add('hidden')
    postSpeedy.classList.remove('hidden')

   }else if(btnselect ===btnEasy){   //if easy Sharing selected

    btnSimple.classList.remove('selected')
    btnSpeedy.classList.remove('selected')
    btnEasy.classList.add('selected')
    postSimple.classList.add('hidden')
    postSpeedy.classList.add('hidden')
    postEasy.classList.remove('hidden')
   }

}

//show detail of questions in Frequently Asked Questions part


let questions = document.getElementById('questions')

questions.addEventListener('click',getdetail);


function getdetail(event){
    let questionSelected= event.target

    let firstQuestion = questions.firstElementChild;
    let icon1 = firstQuestion.firstElementChild;
    let detailOne = firstQuestion.nextElementSibling;

    let secondQuestion = detailOne.nextElementSibling;
    let icon2 = secondQuestion.firstElementChild;
    let detailTwo = secondQuestion.nextElementSibling;

    let thirdQuestion = detailTwo.nextElementSibling;
    let icon3 = thirdQuestion.firstElementChild;
    let detailThree = thirdQuestion.nextElementSibling;

    let forthQuestion = detailThree.nextElementSibling;
    let icon4 = forthQuestion.firstElementChild;
    let detailfour = forthQuestion.nextElementSibling;


    if(questionSelected === firstQuestion){
        detailOne.classList.toggle('hidden')
        firstQuestion.classList.toggle('left')

        if(detailOne.classList.contains('hidden')){
            icon1.classList.remove('filter')
        }else{
            icon1.classList.add('filter') 
        }
        
    }else if(questionSelected===secondQuestion){
        detailTwo.classList.toggle('hidden')
        secondQuestion.classList.toggle('left')

        if(detailTwo.classList.contains('hidden')){
            icon2.classList.remove('filter')
        }else{
            icon2.classList.add('filter')
        }

    }else if(questionSelected===thirdQuestion){
        detailThree.classList.toggle('hidden')
        thirdQuestion.classList.toggle('left')

        if(detailThree.classList.contains('hidden')){
            icon3.classList.remove('filter')
        }else{
            icon3.classList.add('filter')
        }

    }else if(questionSelected===forthQuestion){
        detailfour.classList.toggle('hidden')
        forthQuestion.classList.toggle('left')
        if(detailfour.classList.contains('hidden')){
            icon4.classList.remove('filter')
        }else{
            icon4.classList.add('filter')
        }
    }



}

//show hamburger navigationBar with click and exit

const hamburgerIcon = document.getElementById('icon-hamburger')
const hamburgerShow = document.querySelector('.show')
const navbar =document.getElementById('login')
const exit = document.getElementById('close')


hamburgerIcon.addEventListener('click', showBurger);
exit.addEventListener('click', exitBurger)


function showBurger(){
    hamburgerShow.classList.remove('show')
    navbar.style.display="none"
    hamburgerShow.classList.add('hamburger')
}


function exitBurger(){
    hamburgerShow.classList.add('show')
    hamburgerShow.classList.remove('hamburger')
    navbar.style.display=""

}

//email validation in footer

const emailForm = document.getElementById('form'); 
emailBox = document.getElementById('emailbox')



emailForm.addEventListener('submit', handlSubmit);

function handlSubmit(e){
    validateEmail(e)
}

function validateEmail(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = document.getElementById('email').value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (regex.test(email)) {
        console.log(event.target[0].value)
    } else {
        emailBox.setAttribute('class', "backColor")
        let imgError =  document.querySelector('.errorimg')
        let contextError =  document.querySelector('.results')
        imgError.classList.remove('hidden')
        contextError.classList.remove('hidden')
    }
}






