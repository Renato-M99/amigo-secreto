let addFriends = document.querySelector(".added");
let addedFriends = Array.from(document.querySelectorAll("p"));
let out = document.querySelector(".out");
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




function restartFriends() {
    document.querySelector(".Reiniciar").addEventListener('click', () => {


    });

}

function sortear() {
    document.querySelector(".Sortear").addEventListener('click', (event) => {
        event.preventDefault();
        for (let i = addedFriends.length; i; i--) {
            let randomValue = Math.floor(Math.random() * i);
            [addedFriends[i], addedFriends[randomValue]] =
            [addedFriends[randomValue], addedFriends[i]];
        }
    });
}

/*  function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

// Used like so
let arr = [2, 11, 37, 42];
shuffle(arr);
console.log(arr); */