const ratingNumbers = document.querySelectorAll('.numberBtn');

const submitBtn = document.querySelector('.submit-btn');

const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thankYou-card');


let ratingThankText = document.querySelector('#textC');

let currentBt = null,btvalue = 0;

ratingNumbers.forEach((btnNumber, index) =>{
    btnNumber.addEventListener('click', () => {
        // console.log("Now" + currentBt);
        if(currentBt !== null && currentBt !== index){
            ratingNumbers[currentBt].classList.remove('toggle');
            // console.log("Blax" + currentBt);
        }
        // console.log(ratingNumbers[index]);
        btnNumber.classList.toggle('toggle');
        currentBt = index;
        btvalue = ratingNumbers[index].textContent;
    });
});

submitBtn.addEventListener('click', () =>{
    if(btvalue === 0){
        alert("Select a number");
    }
    else{
        console.log(btvalue);
        console.log(ratingCard);
        ratingThankText.innerHTML = btvalue;
        ratingCard.classList.add('disable-card');    
        thankYouCard.classList.remove('disable-card');
    
    }
});