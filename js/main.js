const backtotop = document.getElementById("backtotop");

function checkScroll() {
    const yoffset = window.scrollY;
    if(yoffset === 0) {
        backtotop.classList.remove("show");
    }
    else {
        backtotop.classList.add("show");
    }
 }

function backToTop() {
    window.scroll({
        top:0,
        behavior:"smooth"
    });
}

window.addEventListener("scroll", checkScroll);
backtotop.addEventListener("click", backToTop);
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//classList 이동
const transformPrev = (event) => {
    const leftbutton = event.target;
    const rightbutton = leftbutton.nextElementSibling;
    const classList = rightbutton.parentElement.parentElement.nextElementSibling;
    const liList = classList.getElementsByTagName('li');
    let leftHiddenSize = classList.getAttribute("data-position");

    leftHiddenSize = Number(leftHiddenSize) + 270;
    console.log(leftHiddenSize);
    classList.style.transition = '1s';
    classList.style.transform = `translateX(${leftHiddenSize}px)`;
    classList.setAttribute("data-position", leftHiddenSize);


    if(classList.clientWidth < liList.length * 270 + leftHiddenSize) {
        rightbutton.classList.add('active-button');
        rightbutton.addEventListener('click', transformNext);
    }
    if(leftHiddenSize >= 0) {
        leftbutton.classList.remove('active-button');
        leftbutton.removeEventListener('click', transformPrev);
    } 

}

const transformNext = (event) => {
    const rightbutton = event.target;
    console.log(rightbutton);
    const leftbutton = rightbutton.previousElementSibling;
    console.log(leftbutton);
    const classList = rightbutton.parentElement.parentElement.nextElementSibling;
    const liList = classList.getElementsByTagName('li');
    let leftHiddenSize = classList.getAttribute("data-position");

    leftHiddenSize = Number(leftHiddenSize) - 270;
    classList.style.transition = '1s';
    classList.style.transform = `translateX(${leftHiddenSize}px)`;
    classList.setAttribute("data-position", leftHiddenSize);

    console.log(classList.clientWidth, liList.length * 270 + leftHiddenSize);
    if(classList.clientWidth >= liList.length * 270 + leftHiddenSize) {
        rightbutton.classList.remove('active-button');
        rightbutton.removeEventListener('click', transformNext);
    }
    if(leftHiddenSize < 0) {
        leftbutton.classList.add('active-button');
        leftbutton.addEventListener('click', transformPrev);
    } 

}
//---------------------------------------------------------------------
//---------------------------------------------------------------------



//---------------------------------------------------------------------
//---------------------------------------------------------------------
//init
const slideNextList = document.getElementsByClassName('slide-next');

for (let i = 0; i < slideNextList.length; i++) {
    let classList = slideNextList[i].parentElement.parentElement.nextElementSibling;
    let liList = classList.getElementsByTagName('li');

    if (classList.clientWidth < liList.length * 270) {
        //버튼위에 올렸을때 활성화된 버튼은 반응한다.
        slideNextList[i].classList.add('slide-prev-hover');
        //버튼이 클릭할 수 있게끔 함수를 등록한다.
        slideNextList[i].addEventListener('click', transformNext);
        console.log("listen")
    } else {
        const arrowContainer = slideNextList[i].parentNode;
        arrowContainer.removeChild(slideNextList[i].previousElementSibling);
        arrowContainer.removeChild(slideNextList[i]);       
    }
}
//---------------------------------------------------------------------
//---------------------------------------------------------------------
