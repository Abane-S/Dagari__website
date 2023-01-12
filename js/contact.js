document.addEventListener('DOMContentLoaded', () =>{


    /* Contact Button */
    let flèche = document.querySelector('form .material-symbols-outlined');
    let button__hover = document.querySelector('form .valider');
    
    button__hover.addEventListener('mouseover', () =>{
        flèche.setAttribute('id', 'hover');
    })
    button__hover.addEventListener('mouseleave', () =>{
        flèche.removeAttribute('id');
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