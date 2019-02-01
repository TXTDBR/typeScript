abstract class Hero{

    constructor(public codeNome: string, public identidadeSecreta: string){}

    //metodo
    getIdentidade():void{
        console.log(`Aa identidade secreta do(a) ${this.codeNome} é ${this.identidadeSecreta}`);
    }
}
class Batman extends Hero{
    constructor(){
        super('Batman', 'Bruce wayne');
    }

}
let darkKnight = new Batman();
//darkKnight.getIdentidade();