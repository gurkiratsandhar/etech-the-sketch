const value=document.querySelector('.value')
const vert=document.querySelector('.vert')
const bar=document.querySelector('.bar')
bar.addEventListener('mouseup',slider)
const main=document.querySelector('.main')






function changeColor(w){
    w.target.classList.add('color')
}


function slider(e){
    value.textContent=e.target.value+" x "+e.target.value;
    if (main.children.length>0){
        const qwerty=document.querySelectorAll('.vert');
        qwerty.forEach((qw)=>{qw.remove()})
    }
    console.log(main.children)
    for(let i=1;i<=(e.target.value);i++){
        const column=document.createElement('div');
        column.classList.add('vert')
        main.appendChild(column)
    }
    for(let i=1;i<=(e.target.value);i++){
        const rows=document.querySelectorAll('.vert');
        rows.forEach((row)=>{
        const box=document.createElement('div');
        box.classList.add('child')
        //box.textContent="I m a box"
        row.appendChild(box)
        })
    }
    const boxes=document.querySelectorAll('.child')
    boxes.forEach((bo)=>{
        bo.addEventListener('mousemove',changeColor);
        
    })







    //console.log(main.children)

    //for(let i=1; i<=(e.target.value);i++){
       // const box=document.createElement('div');
       // box.classList.add('child')
      //  box.textContent="I m a box"
      //  vert.appendChild(box);}
   // for(let i=1; i<=(e.target.value);i++){
       // const hor=document.createElement('div');
      //  hor.classList.add('vert')
     //   main.appendChild(hor)
   // }
   // console.log(main.children.length)

    
}




