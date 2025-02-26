export class TestJavaScriptPadre{

    nombrePadre:string = 'Rodrigo';

    testJavaScriptPadre(apodo:string){
        return this.nombrePadre + " su apodo es::"+ apodo;
    }

    sobreescritura(){
        console.log('Sobreescritura sobre padre');
    }
}