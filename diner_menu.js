const menuPrimero = [
    ensalada = {
        plato : "plato de ensalada", 
        comentario : "ligera ensalada de lechuga y tomate", 
        precio : 10
    },
    pasta = {
        plato : "plato de pasta", 
        comentario : "gratinado de canelones con tomate",
        precio : 10
    }
];
const menuSegundo = [
    carne = {
        plato : "plato de carne", 
        comentario : "deliciosa carne a la brasa",
        precio : 20
    },
    pescado = {
        plato : "plato de pescado", 
        comentario : "pescado fresco a la plancha",
        precio : 20
    }
];

function mostrarMenu(tipoMenus) {
    let headMenu = tipoMenus === menuPrimero ? "Primeros Platos :" : "Segundos Platos :";
    console.log(`Estos son los ${headMenu}`);

    for(item in tipoMenus) {
        console.log(`${tipoMenus[item]["plato"]}`);
    };
}

function seleccionarMenu() {
    let primeraEleccion = prompt("Cual es su opcion de primer plato ¿ ensalada o pasta ?");
    let segundaEleccion = prompt("Cual es su opcion de segundo plato ¿ carne o pescado ?");
    seleccion = [primeraEleccion, segundaEleccion];
    return{
        valorMenu : function () {
            let primero = seleccion[0];
            let segundo = seleccion[1];

            console.log("Su eleccion es :");

            if (primero === "ensalada") {
                primerPlato =`${menuPrimero[0]["plato"]}, ${menuPrimero[0]["comentario"]}`;
                numPrimero = 0
            } else if (primero === "pasta") {
                primerPlato =`${menuPrimero[1]["plato"]}, ${menuPrimero[1]["comentario"]}`;
                numPrimero = 1
            }
            if (segundo === "carne") {
                segundoPlato =`${menuSegundo[0]["plato"]}, ${menuSegundo[0]["comentario"]}`;
                numSegundo = 0
            } else if (segundo === "pescado") {
                segundoPlato =`${menuSegundo[1]["plato"]}, ${menuSegundo[1]["comentario"]}`;
                numSegundo = 1
            }
            console.log(`${primerPlato}, ${menuPrimero[numPrimero]["precio"]}€`);
            console.log(`${segundoPlato}, ${menuSegundo[numSegundo]["precio"]}€`);
            console.log("El total de su pedido es " + (menuPrimero[1]["precio"] + menuSegundo[1]["precio"]) + " €");
        }
    }
}

mostrarMenu(menuPrimero);
mostrarMenu(menuSegundo);
let pedido = seleccionarMenu();
console.log(pedido.valorMenu());


