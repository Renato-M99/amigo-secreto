let addFriends = document.querySelector(".added");
let addedFriends = document.querySelectorAll("p");
let friendCount = 0;


addFriend(); // add button
restartFriends();


function addFriend(){
    document.querySelector(".Adicionar").addEventListener('click', (event) => {
        event.preventDefault(); 
        let addBtn = document.querySelector(".in").value;
        if (addBtn != '' ) {
            friendCount++;
            let p = document.createElement('p');
            addFriends.append(p);
            
            if (friendCount == 1) {
                p.innerHTML = `${addBtn}`;
            } else {
                p.innerHTML = `, ${addBtn}`;
            }
        }
        else {
            alert("vazio!");
        }

     
    });
}


