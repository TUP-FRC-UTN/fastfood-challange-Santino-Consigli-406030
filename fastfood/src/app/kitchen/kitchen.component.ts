import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../models/pedido';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  pedidosPendientes: Pedido[]=[]
  
  pedidosToCoccion : Pedido[]=[]


  constructor(private pedidoService:PedidoService){

    this.pedidosPendientes = pedidoService.pedidosPendientes
    this.pedidosToCoccion = pedidoService.pedidosToCoccion
  }


  pedidoToCoccion(pedidoToCoccion: Pedido) {

    this.pedidoService.addPedidoToCoccion(pedidoToCoccion)
    
  }
  pedidoToEntregar(pedido: Pedido) {
    this.pedidoService.addPedidoToEntregar(pedido)
   }
  
  
}
