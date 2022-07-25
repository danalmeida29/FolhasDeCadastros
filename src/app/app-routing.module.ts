import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClienteComponent } from './Pages/add-cliente/add-cliente.component';
import { ListClienteComponent } from './Pages/list-cliente/list-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: AddClienteComponent,
  },
  {
    path: 'clientes-cadastrados',
    component: ListClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
