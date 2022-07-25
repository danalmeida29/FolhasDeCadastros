import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddClienteComponent } from './Pages/add-cliente/add-cliente.component';
import { ListClienteComponent } from './Pages/list-cliente/list-cliente.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HeaderComponent } from './Shared/header/header.component';
import { SidenavComponent } from './Shared/sidenav/sidenav.component';
import { materialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from './Shared/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    AddClienteComponent,
    ListClienteComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    materialModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
