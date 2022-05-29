import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MaterialExampleModule} from './material.module';
import { GlobalErrorHandler } from './global-error-handler';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { ProductosComponent } from './productos/productos.component';
import { ComponentBoardComponent } from './component-board/component-board.component';
import { InicioComponent } from './inicio/inicio.component';
import { OcultamientoPipe } from './ocultamiento.pipe';
import { TamanoComponent } from './tamano/tamano.component';
import { BarTamanoComponent } from './bar-tamano/bar-tamano.component';
import { CaracteristicaComponent } from './caracteristica/caracteristica.component';
import { BarUsuarioComponent } from './bar-usuario/bar-usuario.component';
import { PersonaListarComponent } from './persona/persona-listar.component';
import { PersonaEliminarComponent } from './persona/persona-eliminar.component';
import { PersonaActualizarComponent } from './persona/persona-actualizar.component';
import { BarProductoGeneralComponent } from './bar-producto-general/bar-producto-general.component';
import { TamanoListarComponent } from './tamano/tamano-listar.component';
import { TamanoEliminarComponent } from './tamano/tamano-eliminar.component';
import { TamanoActualizarComponent } from './tamano/tamano-actualizar.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './jwt.interceptor';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutorizacionGuard } from './autorizacion.guard';
import { BarNegocioComponent } from './bar-negocio/bar-negocio.component';
import { CaracteristicaListarComponent } from './caracteristica/caracteristica-listar.component';
import { ProductoListarComponent } from './productos/producto-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ProductosComponent,
    ComponentBoardComponent,
    InicioComponent,
    OcultamientoPipe,
    TamanoComponent,
    BarTamanoComponent,
    CaracteristicaComponent,
    BarUsuarioComponent,
    PersonaListarComponent,
    PersonaEliminarComponent,
    PersonaActualizarComponent,
    BarProductoGeneralComponent,
    TamanoListarComponent,
    TamanoEliminarComponent,
    TamanoActualizarComponent,
    LoginComponent,
    BarNegocioComponent,
    CaracteristicaListarComponent,
    ProductoListarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    MatToolbarModule, 
    MatTableModule,
    MatButtonModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler,
  },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  AutorizacionGuard,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
