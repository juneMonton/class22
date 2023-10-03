//Create a mouse object that has four properties and three methods
let mouse={}

mouse.brand="logitech"
mouse.color='grey'
mouse.price=12.9
mouse.type='wireless'

mouse.showBrand=function(brand){
    console.log(`Mouse brand is ${brand}`)
}

mouse.showBrand(mouse.brand)

mouse.leftClick=function(){
    console.log('LEFT CLICKKKK')
}
mouse.rightClick=function(){
    console.log('RIGHT CLICKKKK')
}

mouse.scroll=function(){
    console.log('SCROLLLLL')
}