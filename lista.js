const consertos = require("./consertos");


function listaEmEspera() {

    console.log("PD em espera ");

    consertos.forEach(consertos => {
        if (consertos.pronto === false){        
            console.log(consertos.aparelho + ' - ' + consertos.pronto);            
        }
    });

    console.log("The end");
};

function listaProntos() {
    console.log("### PD pronto ###");

    consertos.forEach(consertos => {
        if (consertos.pronto === true){        
            console.log(`Aparelho ${consertos.aparelho} - Situação: ${consertos.pronto}`);
            
            consertos.itensConsertados.forEach(itens => {
                console.log(`# ${itens}`);
            })

            console.log (`Total R$ ${somaProdutos(consertos).toFixed(2)}`);
        }
    });

    console.log("The end");
};

function somaProdutos(aparelho)
{
    const total = aparelho.valores.reduce((total, valor) => total + valor);
    return total;
};

listaEmEspera();
listaProntos();