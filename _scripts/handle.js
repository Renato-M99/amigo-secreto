let addFriends = document.querySelector(".added");
let addedFriends = Array.from(document.querySelectorAll("p"));
let friendCount = 0;
let span = document.querySelector("span");
let retorno = Array.from(span);
let error = document.createElement('p');


addFriend(); // add button
restartFriends(); //reset


function addFriend() {
    document.querySelector(".Adicionar").addEventListener('click', (event) => {
        event.preventDefault();

        let addBtn = document.querySelector(".in").value;

        if (addBtn != '' && !addedFriends.includes(addBtn)) {
            friendCount++;
            let p = document.createElement('p');
            addFriends.append(p);

            if (friendCount == 1) {
                p.innerHTML = `${addBtn}`;
            } else {
                p.innerHTML = `, ${addBtn}`;
            }
            addedFriends.push(addBtn);
            document.querySelector("input").value = '';
            error.textContent = '';
        }
        else if (addedFriends.includes(addBtn)) {
            span.append(error);
            error.innerHTML = "Já existe alguém com esse nome";
            error.style.color = "red";
            error.style.textAlign = "center";
            document.querySelector("input").value = '';
        }
        else {
            span.append(error);
            error.innerHTML = "Erro, campo vazio!";
            error.style.color = "red";
            error.style.textAlign = "center";
        }


    });
}



function clearAll(){
    //limpa todos os campos e a contagem de amigos
    friendCount = 0;
    document.querySelector(".added").innerHTML = '';
    document.querySelector("input").value = '';
    error.textContent = '';
}




function restartFriends() {
    //Reiniciar o sorteio: apaga todos os elementos do array e usa a função clear all para limpar os campos.
    document.querySelector(".Reiniciar").addEventListener('click', (event) => {
        event.preventDefault();
        while (addedFriends.length != 0) {
            addedFriends.pop();
        }

       clearAll();


    });

}