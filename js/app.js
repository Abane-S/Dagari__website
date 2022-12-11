document.addEventListener('DOMContentLoaded', () => {


    /* Home button */
    


    /* Contact Button */
    let flèche = document.querySelector('form .abane .valider-before');
    let button__hover = document.querySelector('form .valider');
    
        button__hover.addEventListener('mouseenter', () =>{
            flèche.classList.add('hover');
        })
        button__hover.addEventListener('mouseleave', () =>{
            flèche.classList.remove('hover')
        })




    /* Question accordion */
    const accordionItems = document.querySelectorAll('.question__item')

    accordionItems.forEach((item) =>{
        const accordionHeader = item.querySelector('.question__header')
    
        accordionHeader.addEventListener('click', () =>{
            const openItem = document.querySelector('.accordion-open')
    
            toggleItem(item)
    
            if(openItem !== '.accordion-open'){
                toggleItem(openItem)
            }
        })
    })
    
    const toggleItem = (item) =>{
        const accordionContent = item.querySelector('.question__content')
    
        if(item.classList.contains('accordion-open')){
            item.classList.remove('accordion-open')
        }else{
            item.classList.add('accordion-open')
        }

    }    

})

