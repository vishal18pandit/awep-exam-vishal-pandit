function display() {
    let username = document.querySelector("#name").value;
    let password = document.querySelector("#pass").value;

    newele = document.querySelector("#refer").cloneNode(true);

    newele.removeAttribute("id");


    newele.child[0].innerHTML = username;
    newele.child[1].innerHTML = password;

    const commentbox = document.querySelector("#commentbox");

    commentbox.appendChild(newele);
    document.querySelector("#name").value = "";
    document.querySelector("#pass").value = "";

}