let addFriends = document.querySelector(".added");
let addedFriends =  Array.from(document.querySelectorAll("p"));
let friendCount = 0;
let span = document.querySelector("span");
let retorno = Array.from(span);
let error = document.createElement('p');
let prize = document.querySelector('.addedOut');


addFriend(); // add button
restartFriends(); //reset
executePrize(addedFriends);//prize

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
        else if(addedFriends.includes(addBtn)){
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



function clearAll() {
    //limpa todos os campos e a contagem de amigos
    friendCount = 0;
    document.querySelector(".added").innerHTML = '';
    document.querySelector(".addedOut").innerHTML = '';
    document.querySelector("input").value = '';
    error.textContent = '';
}




function restartFriends() {
    //Reiniciar o sorteio: apaga todos os elementos do array e usa a função clear all para limpar os campos.
    document.querySelector(".Reiniciar").addEventListener('click', (event) => {
        event.preventDefault();
        while (addedFriends.length != 0) {
            addedFriends.pop();
            prize.pop();
        }

        clearAll();


    });

}

function executePrize(addedFriends) {
    document.querySelector(".Sortear").addEventListener("click", (event) => {
        event.preventDefault();

        if (addedFriends.length >= 4) {

            const prizeResult = Array.from(randomFriends(addedFriends));

            error.textContent = '';
            let index = 0;

            while (index < prizeResult.length) {
                index++;
                let friendNext = index + 1;
                if(index >= prizeResult.length - 1){
                    friendNext = 0;
                }

                let resultItem = document.createElement('p');
                prize.append(resultItem);

                resultItem.textContent = `${prizeResult[index]} => ${prizeResult[friendNext]}`;


            }

            /*  resultItem.style.display = "block"; */

        }

        else {
            span.append(error);
            error.innerHTML = "Você precisa ter pelo menos 4 pessoas adicionadas.";
            error.style.color = "red";
            error.style.textAlign = "center";
        }

    })
}

function randomFriends(addedFriends) {
    // Loop em todos os elementos
    for (let i = addedFriends.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i));
        // Reposicionando elemento
        [addedFriends[i], addedFriends[j]] = [addedFriends[j], addedFriends[i]];
    }
    // Retornando array com aleatoriedade
    return addedFriends;
}

