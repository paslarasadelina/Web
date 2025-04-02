function toggleMenu(){
    let el = document.getElementsByClassName('menu')[0];
    if(el.style.left == '0px'){
        el.style.left = '-400px';
        el.style.boxShadow = 'none';
    } else {
        el.style.left = '0px';
        el.style.boxShadow = '0px 0px 500px black';
    }
}

window.onload = function() {
    salesRotation();
    rRotation();
}

function salesRotation(){
    let next_el = 4;
    let index = 1;
    setInterval(() => {
        
        let el = document.getElementById('sales');

        let new_el = document.createElement("div");
        new_el.classList.add("mini_container2");
        new_el.id = next_el;
        new_el.innerHTML = `<img src="./Photos/sale.png" style="width: 50px; transform: translate(-10px, -10px); position: absolute"><img src="./Photos/Rotation/${next_el}.png" class="rotation_imgs">`;

        el.appendChild(new_el);

        document.getElementById(index).remove();

        next_el==5?next_el=1:next_el++;
        index==5?index=1:index++;
    }, 2000);
}

function rRotation(){
    let next_el = 4;
    let index = 1;
    setInterval(() => {
        
        let el = document.getElementById('rec');

        let new_el = document.createElement("div");
        new_el.classList.add("mini_container2");
        new_el.id = "r"+next_el;
        new_el.innerHTML = `<img src="./Photos/Rotation/r${next_el}.png" class="rotation_imgs">`;

        el.appendChild(new_el);

        document.getElementById("r"+index).remove();

        next_el==5?next_el=1:next_el++;
        index==5?index=1:index++;
    }, 2000);
}

let global_index = 1;

function leftClick(){
    global_index==1?global_index=5:global_index--;
    document.getElementById("gal_main").innerHTML = `<img src="./Photos/Rotation/${global_index}.png" class="rotation_imgs">`;
}

function rightClick(){
    global_index==5?global_index=1:global_index++;
    document.getElementById("gal_main").innerHTML = `<img src="./Photos/Rotation/${global_index}.png" class="rotation_imgs">`;
}