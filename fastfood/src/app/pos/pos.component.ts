import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {


  constructor(private pedidoService: PedidoService)
  {

  }
  @Output() onSavePedido = new EventEmitter<void>
   newPedido : Pedido = {
    number :0,
    name:'',
    description:'',
    date: new Date
   }
   saveNewPedido(form: NgForm) {
    if (form.invalid) {
      alert("Formulario invalido");
      return;
    }
    const newPedidoToAddListPedido = {...this.newPedido}
    this.pedidoService.addPedido(newPedidoToAddListPedido)
    this.onSavePedido.emit()
   }
    

}


