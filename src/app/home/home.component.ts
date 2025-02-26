import { Component } from '@angular/core';
import { TestJavaScript } from '../utils/testJavaScript';
import { TestJavaScriptPadre } from '../utils/testJavaScriptPadre';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  test:string = "Rodrigo";
  testJavaScript(){
    
     var testJavaScript:TestJavaScript = new TestJavaScript('Davalos');
     
     console.log("Llamando al padre - instancia Hijo:: " + testJavaScript.testJavaScriptPadre('yoyis'));
     testJavaScript.testVariablesJSHijo();
     
     var polimorfismo:TestJavaScriptPadre = new TestJavaScript('Davalos');     
     console.log("Llamando al padre - polimorfismo:: " + polimorfismo.testJavaScriptPadre('mueganito'));
     polimorfismo.sobreescritura();
     
     
     console.log("Clase TestJavaScript "+JSON.stringify(testJavaScript));
     console.log("Clase polimorfismo:TestJavaScriptPadre:: "+JSON.stringify(polimorfismo));
  }

  testArrowFunction(){
    var testJavaScript:TestJavaScript = new TestJavaScript('Davalos');
    
    console.log("testJavaScript.arrowFunctionBasic "+testJavaScript.arrowFunctionBasic(2));
    console.log("testJavaScript.functionBasic "+testJavaScript.functionBasic(3));
    console.log("testJavaScript.nestedFunction "+testJavaScript.nestedFunction(5));
  }

  testObjects(){
    var testJavaScript:TestJavaScript = new TestJavaScript('Davalos');
    // testJavaScript.testObjects();
    const user = {'usuario':'User2','perfil':'Administrado2','grupo':'Grupo2'
                  ,'nombre':'Rodrigo2','status':'Activo1','alta':'01/01/2000'}
                  
    // const user = {'usuario':'User2','perfil':'Administrado2','grupo':'Grupo2'
    //                 ,'nombre':'Rodrigo2','status':'Activo1'}                  
    testJavaScript.testOutsideObjects(user);
  }


}
