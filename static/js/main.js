
let MOBILE_FILTER = document.querySelector('.mobile-nav-toggle')

MOBILE_FILTER.addEventListener('click',()=>{
    if(MOBILE_FILTER.classList.contains('bi-filter-right')){
        document.querySelector('.nav-links').classList.add('navbar-mobile')
        MOBILE_FILTER.classList.remove('bi-filter-right')
        MOBILE_FILTER.classList.add('bi-x')
    }
    else{
        document.querySelector('.nav-links').classList.remove('navbar-mobile')
        MOBILE_FILTER.classList.add('bi-filter-right')
        MOBILE_FILTER.classList.remove('bi-x')   

    }
})

let GET_DATE = () => {
    let date_now = Date().split(' ').splice(0,3)
    console.log(date_now)
    document.querySelector('.date').innerHTML = `${date_now[0]}, ${date_now[1]} ${date_now[2]}`;
}