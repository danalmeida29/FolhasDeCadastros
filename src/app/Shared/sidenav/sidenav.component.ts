import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  opened: boolean = false;

  @Output() public exibirMenuHamburgue: EventEmitter<boolean> = new EventEmitter<boolean>()
   
  constructor() { }
 
   ngOnInit(): void {
     this.opened = !this.opened;
   }
 
   public exibirMenu(): void{
     this.exibirMenuHamburgue.emit()
   }
 
}
