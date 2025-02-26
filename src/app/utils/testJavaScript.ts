import { TestJavaScriptPadre } from "./testJavaScriptPadre";

type Users = {
    usuario: string;
    perfil: string;
    grupo: string;
    nombre: string;
    status: string;
    alta: string;
  };

  function functionOutside1(){
    console.log("Dentro del functionOutside1");
  }

//   functionOutside2(){
//     console.log()
//   }
export class TestJavaScript extends TestJavaScriptPadre{

    testObjects(){
        const ages = [32, 33, 16, 40];
        var checkAdult = (age:number) => age >=33;
        const filterResult = ages.filter((checkAdult));
        
        console.log("filterResult arrowFunction:: " + filterResult);
        console.log("filterResult normalFunction:: " + ages.filter((this.filterAge)));
      }

    filterAge(age:number):boolean{
        return age >=32;
    }

    testOutsideObjects(user:Users){
        console.log("El objeto user tiene:: "+JSON.stringify(user));
        functionOutside1();
    }

    apodo: string;

    constructor(apodo:string){
        super();
        this.apodo = apodo;
    }


    testVariablesJSHijo(){        
        console.log("Llamando al padre - dentro metodo Hijo con super:: " + super.testJavaScriptPadre('somali'));
        
    }

    override sobreescritura(){
        console.log('Sobreescritura sobre hijo');
    }

    arrowFunctionBasic = (x: number) => x * x;

    functionBasic(x: number):number{
        return x * x;
    }

    nestedFunction(x:number){
        var y:number =2;
        var arrowFunctionBasic = () => x * y;

        // functionBasic2(){
        //     // return 2 * 2;
        // }
        return arrowFunctionBasic();
    }




    

}