import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteHttpService {

  //private readonly httpClientVar = inject(HttpClient);
   constructor(private httpClientVar:HttpClient) { }
  

  getPdf():Observable<any>{
    console.log("Antes de enviar a pdf");
    return this.httpClientVar.get('http://127.0.0.1/SpringBootTest/controller/getPdf');

  }


}
