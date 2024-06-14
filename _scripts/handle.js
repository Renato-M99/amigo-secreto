let addFriends = document.querySelector(".added");
let addedFriends = document.querySelectorAll("p");
let friendCount = 0;


addFriend(); // add button



function addFriend() {
    document.querySelector(".Adicionar").addEventListener('click', (event) => {
        event.preventDefault();
        let addBtn = document.querySelector(".in").value;
        if (addBtn != '') {
            friendCount++;
            let p = document.createElement('p');
            addFriends.append(p);

            if (friendCount == 1) {
                p.innerHTML = `${addBtn}`;
            } else {
                p.innerHTML = `, ${addBtn}`;
            }
            document.querySelector("input").value = '';

        }
        else {
            let span = document.querySelector("span");
            let p = document.createElement('p');

            span.append(p);
            p.innerHTML = "Erro, campo vazio!";
            span.style.display = "block";
            span.style.justifyContent = "center"
            p.style.color = "red";
          
        }


    });
}


