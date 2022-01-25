let lista = [];
let prices=[];
let art="";

let total = document.getElementById("total");
let selectElement2 = document.getElementById("nuevo-articulo");
selectElement2.addEventListener("focus", dis, false);
selectElement2.addEventListener("focusout", appr, false);

const add1 = () => {
    let price = document.getElementById("precio").value;

    if (!lista.includes(art.toUpperCase())) {
        lista.push(art.toUpperCase());
        prices.push(Number(price));
        document.getElementById("precio").value= "";
    }
    else {
        document.getElementById("info").innerText = `Ya tienes ${art} en la lista`;
        setTimeout(() => {
            document.getElementById("info").innerText = "";
        }, 2000);
        return;
    }

    document.getElementById("oculta").style.opacity = "1";
    document.getElementById("reload").style.opacity = "1";
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let tdprice = document.createElement("td");
    td.textContent = lista[lista.length - 1];
    td.id = lista.length;
    td.addEventListener("click", del, false);
    tdprice.textContent = price;
    document.getElementById("lista").appendChild(tr);
    document.getElementById("lista").appendChild(td);
    document.getElementById("lista").appendChild(tdprice);
    total.innerText = prices.reduce((a, b) => (a + b)) + " €";
}

const add2 = () => {
    art = selectElement2.value;
    let price = document.getElementById("precio").value;

    if (art === "") {
        document.getElementById("info2").innerText = "Escriba un articulo";
        setTimeout(() => {
            document.getElementById("info2").innerText = "";
        }, 2000);
        return;
    }
    else if (!lista.includes(art.toUpperCase())) {
        lista.push(art.toUpperCase());
        prices.push(Number(price));
        document.getElementById("precio").value = "";
        document.getElementById("nuevo-articulo").value = "";
    }
    else {
        document.getElementById("info2").innerText = `Ya tienes ${art} en la lista`;
        document.getElementById("nuevo-articulo").value = "";
        setTimeout(() => {
            document.getElementById("info2").innerText = "";
        }, 2000);
        return;
    }

    document.getElementById("oculta").style.opacity = "1";
    document.getElementById("reload").style.opacity = "1";
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let tdprice = document.createElement("td");
    td.textContent = lista[lista.length - 1];
    td.id = lista.length;
    td.addEventListener("click", del, false);
    tdprice.textContent = price;
    document.getElementById("lista").appendChild(tr);
    document.getElementById("lista").appendChild(td);
    document.getElementById("lista").appendChild(tdprice);
    total.innerText = prices.reduce((a, b) => (a + b)) + " €";
}

function addArt(prod) {
    art = prod;
    add1();
}

function del() {
    let el = document.getElementById(this.id);
    el.classList.toggle("tachado");
}

function dis() {
    document.getElementById("price").style.visibility = "hidden";
}

function appr() {
    setTimeout(() => {
        document.getElementById("price").style.visibility = "visible";
    }, 1000);
}

// const del = (art) => {
//     if (lista.includes(art)) {
//         lista.splice(lista.indexOf(art), 1);
//     }
//     else console.log("no existe el articulo");
//     return lista;
// };