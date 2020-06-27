$(document).ready(function () {
    $('.toggle__left').on('click',function (e) { 
        e.preventDefault();
        $('.toggle__left, .table__newsale, .table__managers').addClass('active')
        $('.toggle__right, .table__resubscription, .table__rg').removeClass('active')
    });
    $('.toggle__right').on('click',function (e) { 
        e.preventDefault();
        $('.toggle__right, .table__resubscription, .table__rg').addClass('active')
        $('.toggle__left, .table__newsale, .table__managers').removeClass('active')
    });        
});




let upButton = document.querySelector('.result__button');
let sectionRatingOffset = document.querySelector('.section__rating').offsetTop;
console.log(sectionRatingOffset);

window.onscroll = function () {
if(window.pageYOffset > 3000){
    upButton.classList.add('shown');
    } else{
        upButton.classList.remove('shown');
    }
};

upButton.onclick = function() {
    window.scrollTo(0, sectionRatingOffset);
}
