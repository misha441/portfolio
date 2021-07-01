
const cardElement = document.querySelectorAll('.card__links-link')

cardElement.forEach((el)=> {
    el.onfocus = function(event){
        document.querySelectorAll('.card-links').forEach((elem)=>{
            elem.classList.add('active')
        })
    }

    el.onblur = function(event){
        document.querySelectorAll('.card-links').forEach((elem)=>{
            elem.classList.remove('active')
        })
    }

})