function anoDeNascimento(nome: string, idade: number, mesDenascimento: number):void{
    var anoDenascimento = 2019 - idade;
    var mesAtual = 3;
    if(mesAtual >= mesDenascimento){
        console.log(nome +" nasceu em " + anoDenascimento);
    }else{
        console.log(nome +" nasceu em " + --anoDenascimento);
    }
    
}

anoDeNascimento("jean", 23, 3);