import { NgModule } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PersonaComponent } from './persona/persona.component';
import { ProductosComponent } from './productos/productos.component';
import { TamanoComponent } from './tamano/tamano.component';
import { BarTamanoComponent } from './bar-tamano/bar-tamano.component';
import { PersonaListarComponent } from './persona/persona-listar.component';
import { BarUsuarioComponent } from './bar-usuario/bar-usuario.component';
import { PersonaEliminarComponent } from './persona/persona-eliminar.component';
import { PersonaActualizarComponent } from './persona/persona-actualizar.component';
import { BarProductoGeneralComponent } from './bar-producto-general/bar-producto-general.component';
import { TamanoListarComponent } from './tamano/tamano-listar.component';
import { TamanoEliminarComponent } from './tamano/tamano-eliminar.component';
import { TamanoActualizarComponent } from './tamano/tamano-actualizar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'usuarios', component: PersonaComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'Creartamanos', component: TamanoComponent},
  {path: 'barraCreacion', component: BarProductoGeneralComponent},
  {path : 'listarUsuario', component: PersonaListarComponent},
  {path: 'barraUsuario', component: BarUsuarioComponent},
  {path: 'EliminarUsuario', component: PersonaEliminarComponent},
  {path: 'ActualizarUsuario', component: PersonaActualizarComponent},
  {path: 'barraTamano', component: BarTamanoComponent},
  {path: 'Listartamanos', component: TamanoListarComponent},
  {path: 'Eliminartamanos', component: TamanoEliminarComponent},
  {path: 'Actualizartamanos', component: TamanoActualizarComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
