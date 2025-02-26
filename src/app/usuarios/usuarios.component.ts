import { CommonModule } from '@angular/common';
import { inject,Component } from '@angular/core';
import { ClienteHttpService } from '../service/cliente-http.service';
import { Observable } from 'rxjs';
import generatePDF from '../service/pdf';
import {MatTableModule} from '@angular/material/table'; 
import { PeriodicElement } from '../Interface/table';
import {MatButtonModule} from '@angular/material/button'; 
import { MatTableExporterModule } from 'mat-table-exporter';


@Component({
  selector: 'app-usuarios',
  imports: [CommonModule,MatTableModule,MatButtonModule,MatTableExporterModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  

  users = [
    {'usuario':'User1','perfil':'Administrado1','grupo':'Grupo1','nombre':'Rodrigo1','status':'rewtgregtrtgew','alta':'01/01/2000'},
    {'usuario':'User2','perfil':'Administrado2','grupo':'Grupo2','nombre':'Rodrigo2','status':'Activo1','alta':'01/01/2000'},
    {'usuario':'User3','perfil':'Administrado3','grupo':'Grupo3','nombre':'Rodrigo3','status':'Activo1','alta':'01/01/2000'},
    {'usuario':'User4','perfil':'Administrado4','grupo':'Grupo4','nombre':'Rodrigo4','status':'Activo1','alta':'01/01/2000'},
    {'usuario':'User5','perfil':'Administrado5','grupo':'Grupo5','nombre':'Rodrigo5','status':'Activo1','alta':'01/01/2000'},
    {'usuario':'User6','perfil':'Administrado6','grupo':'Grupo6','nombre':'Rodrigo6','status':'Activo1','alta':'01/01/2000'},
  ]

  displayedColumns: string[] = ['usuario', 'perfil', 'grupo', 'nombre', 'status', 'alta'];
  dataSource = this.users;

  getPdfAngular(){
    console.log("Getting pdf angular")

    var masiveUsers = {'usuario':'UserMasive','perfil':'Administrado1','grupo':'Grupo1','nombre':'Rodrigo1','status':'13152','alta':'01/01/2000'};

    for (let index = 0; index < 1000; index++) {
      this.users.push(masiveUsers);
      // console.log("Users:: "+this.users.length)
    }

    var reciboNo = '123456'

    var fecha = new Date

    generatePDF(this.users,fecha.toString());


  }
  

  constructor(private clienteHttpServiceVar:ClienteHttpService) { }
  // private readonly clienteHttpService = inject(ClienteHttpService);
  pdf$?:Observable<any>;
  getPdfSpring(){
    this.pdf$ = this.clienteHttpServiceVar.getPdf();
  }



  




  



  
  

}
