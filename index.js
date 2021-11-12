
//1 ͦ Checkpoint de Programação Imperativa!
//Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

//- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//1 - Pipoca – 10 segundos (padrão);
//2 - Macarrão – 8 segundos (padrão);
//3 - Carne – 15 segundos (padrão);
//4 - Feijão – 12 segundos (padrão);
//5 - Brigadeiro – 8 segundos (padrão); 

//- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
//- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
//- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
//- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
//- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".//

let pronto = 'Pi...pi...pi, Bom Apetite!!!';
function microondas(prato, tempo) {
    switch (prato) {
        
        case 'macarrao':
            mensagem(tempo, 18)
            break;
        case 'carne':
            mensagem(tempo, 15)
            break;
        case 'pipoca':
            mensagem(tempo, 10);
            break;    
        case 'feijao':
            mensagem(tempo, 12)
            break;
        case 'brigadeiro':
            mensagem(tempo, 8)
            break;
        default:
            console.log('prato inexiste\n' + pronto);
    }
    function mensagem(tempo, tempoIdeal) {
        tempo >= tempoIdeal * 3 ? console.log("KABRUMMM\n" + pronto) :
            tempo < tempoIdeal ? console.log("Tempo Insuficiente\n" + pronto) :
                tempo >= tempoIdeal * 2 ? console.log("Comida Queimou\n" + pronto) :
                    console.log(pronto)
    }
}
microondas('pipoca', 10)
microondas('macarrao', 15)
microondas('carne', 30)
microondas('feijao', 45)
microondas('brigadeiro', 45)
microondas('arroz', 45)