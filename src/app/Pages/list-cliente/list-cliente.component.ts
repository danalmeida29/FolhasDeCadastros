import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/Core/cliente.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss'],
})
export class ListClienteComponent implements OnInit {
  @ViewChild('filterInput') filterInput!: ElementRef;
  @ViewChild('filterInput') filterInputPj!: ElementRef;

  formGroupPesquisa!: FormGroup;
  clienteSelecionado: any;
  // labelPosition: 'before' | 'after' = 'after';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private formBuilder: FormBuilder
  ) {}

  clientesModel: any;
  clientesPjModel: any;
  Error: any;
  filteredList: any[] = [];
  filteredListPj: any[] = [];

  ngOnInit(): void {
    this.formGroupPesquisa = this.formBuilder.group({
      name: [null],
    });
    this.getListCliente();
    this.getListClientePJ();
  }

  ngAfterViewInit() {
    this.filterClienteList();
  }

  onNavigateTo(pageName: any) {
    this.router.navigate([`/${pageName}`]);
  }

  //pesquisaPF-----------------------------------------------------
  getListCliente() {
    this.clienteService.getListCliente().subscribe(
      (res: any) => {
        this.clientesModel = res;
        this.filteredList = this.clientesModel;
        console.log(res);
      },

      (error: any) => {
        this.Error = error;
      }
    );
  }

  filterClienteList() {
    let filterValue = this.filterInput.nativeElement.value;
    this.filteredList = this.clientesModel;
    this.filteredList = this.clientesModel.filter(
      (
        cliente: any //---erro----//
      ) => cliente.name.trim().toLowerCase().includes(filterValue)
    );
    this.filteredList = this.clientesModel.filter((cliente: any) =>
      cliente.name.trim().toLowerCase().includes(filterValue)
    );
    console.log(this.filterInput.nativeElement.value);
  }

  //pesquisaPJ-----------------------------------------------------

  getListClientePJ() {
    this.clienteService.getListClientePJ().subscribe(
      (res: any) => {
        this.clientesModel = res;
        this.filteredList = this.clientesModel;
        console.log(res);
      },

      (error: any) => {
        this.Error = error;
      }
    );
  }

  //------------------------------------------------------------------------------------------------------------------------

  onEdit(pageName: any, id?: any) {
    this.router.navigate([`${pageName}/${id}`], { relativeTo: this.route });
  }

  //---------------------------------------------------delete---------------------------------------------------------------
  onDeletar(id: any) {
    this.clienteService.deletarCliente(id).subscribe((res: any) => {
      this.getListCliente();
      console.log(this.clientesModel);
    });
  }
  //---------------------------------------------------deletePj-------------------------------------------------------------
  onDelete(id: any) {
    this.clienteService.deletarClientePj(id).subscribe((res: any) => {
      this.getListClientePJ();
      console.log(this.clientesModel);
    });
  }
}
