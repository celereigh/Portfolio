let slideIndexes = [
    [1,1],
    [1,1],
];



function plusSlides(inc, item) {
    console.log("IT WAS CKICEJD", inc, item)
  let found = false
  document.querySelectorAll('.'+item)
  .forEach(slide => {
    if (found) return
    let slideIndex = slide.getAttribute("slide")
    if(slide.style.display == "block"){
        //this slide is active
        found = true
        slide.style.display = 'none'
        let find = '.'+item+`[slide='${parseInt(slideIndex)+inc}']`
        let element = document.querySelector(find)

        if (!element) {
            if (inc < 0) find = '.'+item+`[slide='${findMaxSlide(item)}']`
            else find = '.'+item+`[slide='1']`
            element = document.querySelector(find)
        }

        element.style.display='block' 
    }
  })
}

function findMaxSlide(classname){
    let max = 0
    document.querySelectorAll('.'+classname)
    .forEach(slide => {
        let slideIndex = slide.getAttribute("slide")
        max = Math.max(max, parseInt(slideIndex))
    })
    return max
}

