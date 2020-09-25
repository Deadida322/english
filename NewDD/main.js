function parallax(event){
    this.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('speeds');
        let pos = pageYOffset;
        layer.style.transform = `translateY(${pos*speed/-100}px)`


    });
}
function parallax2(event){
    this.querySelectorAll('.layer1').forEach(layer1 => {
        let speed = layer1.getAttribute('speeds');
        let pos = pageYOffset;
        let tpos = speed/pos*25
        layer1.style.width = `${tpos}%`
        if (tpos < 5){
            layer1.style.width = `${0}%`
        }
        if (tpos > 30){
            layer1.style.width = `${30}%`
        }
    });
}

document.addEventListener('scroll', parallax2);
document.addEventListener('scroll', parallax);
