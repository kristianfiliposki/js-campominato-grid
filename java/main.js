let boxes="";

/* function GenBox(){
    document.getElementById("container").innerHTML="";
    let newDiv = document.createElement("div");
    newDiv.innerHTML=(n)
    container.append(newDiv);
    newDiv.classList.add("box-facile");
    newDiv.addEventListener("click",function(){
    newDiv.classList.toggle('highlight');
    })
}    */

/* clicco la modalita */

/* facile */
document.getElementById("facile").addEventListener("click",function(){
    boxes=parseInt(100);
})

/* medio */
document.getElementById("medio").addEventListener("click",function(){
    boxes=parseInt(81);
    console.log(`ciao le caselle sono ${boxes}`)
})

/* difficile */
document.getElementById("difficile").addEventListener("click",function(){
    boxes=parseInt(49);
    console.log(boxes) 
})


/* play */
document.getElementById("play").addEventListener("click",function(){
    
    console.log(boxes)

    if(boxes==100){
        const container=document.getElementById("container");
        let box=document.querySelector("#container div")
        let newDiv = document.createElement("div");
        container.innerHTML="";
    
    
        let n = 0    
        while(  n < boxes) {
            const numbers=n;
            n++;
            GenBox(n);          
        }

        function GenBox(){
            let newDiv = document.createElement("div");
            newDiv.innerHTML+=(n)
            container.append(newDiv);
            newDiv.classList.add("box-facile");
            newDiv.addEventListener("click",function(){
            newDiv.classList.toggle('highlight');
            })
        }    
    }

    else if(boxes==81){
        const container=document.getElementById("container");
        let box=document.querySelector("#container div")
        let newDiv = document.createElement("div");
        container.innerHTML="";

        
        boxes=81;
        let n = 0    
        while(  n < boxes) {
            const numbers=n;
            n++;
            GenBox(n);
        }

        function GenBox(){
            let newDiv = document.createElement("div");
            newDiv.innerHTML+=(n)
            container.append(newDiv);
            newDiv.classList.add("box-medio");
            newDiv.addEventListener("click",function(){
            newDiv.classList.toggle('highlight');
            })
        }   

    }

    else if(boxes==49){
        const container=document.getElementById("container");
        let box=document.querySelector("#container div")
        let newDiv = document.createElement("div");
        container.innerHTML="";
        
        
        
        boxes=49;
        let n = 0    
        while(  n < boxes) {
            const numbers=n;
            n++;
            GenBox(n)
        }

        function GenBox(){
            let newDiv = document.createElement("div");
            newDiv.innerHTML+=(n)
            container.append(newDiv);
            newDiv.classList.add("box-difficile");
            newDiv.addEventListener("click",function(){
            newDiv.classList.toggle('highlight');
            })
        }   

    }
    
})


