const addFriend = document.querySelectorAll(".addFriend");

function addFriend(addFriend){
    document.querySelector(".Adicionar").addEventListener('click', (event)=> {
        event.preventDefault();
        let addBtn = document.querySelector(".in").value;
        if(addBtn != ''){
            alert("adicionado: " + addBtn);
            
        }
        else{
            alert("vazio!");
        }
     
    });
}

addFriend();
