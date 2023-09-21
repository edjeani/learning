const enter= document.querySelector('#enter');
const userInput=document.querySelector('#userInput');
const ul= document.querySelector('#ull');
const li= document.querySelectorAll('li');


// function to create list items
function createLi(){
    const lii = document.createElement('li');
            lii.appendChild(document.createTextNode(userInput.value));
            ul.appendChild(lii);
            userInput.value="";
            //ADDING DELETE BUTTON TO THE LIST ITEMS
            const btn= document.createElement('button');
        btn.classList.add("del");
        btn.appendChild(document.createTextNode("Delete"));
        btn.onclick=deleteItems;
        lii.appendChild(btn);

       
    

}
// eventer listener to listen for a click and create new list items
enter.addEventListener("click",function(){
    if(userInput.value.length > 0){
        createLi();
       
        
    }
    
    
});
//adding event listener to listen for a key press and create new list items
userInput.addEventListener("keypress",function(evt){
    if(userInput.value.length > 0 && evt.keyCode===13){
        createLi();
    }
    
    
});

//add button to the 6 list items already there

function addBtn(){
    for(let i=0; i<li.length; i++){
        const btn= document.createElement('button');
        btn.classList.add("del");
        btn.appendChild(document.createTextNode("Delete"));
        li[i].appendChild(btn)
        btn.onclick=deleteItems;


    }
}

//captured event target go to parent and remove
function deleteItems(event){
    //event.target.removeEventListener("click", deleteItems, false);
    
    // captured event target go to parent and remove
    event.target.parentNode.remove();
    


}



addBtn();