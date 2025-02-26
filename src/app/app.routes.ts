import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';



export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'catalogo/:product',component:ProductComponent},
    {path:'usuarios',component:UsuariosComponent},
    {
        path: 'pedidos', component: PedidosComponent,
        children: [
                    {path:'devoluciones',component:DevolucionesComponent}
                ]
    },
    {path:'about',component:AboutComponent}
];
