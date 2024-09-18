import { Component } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-deliverypoint',
  standalone: true,
  imports: [],
  templateUrl: './deliverypoint.component.html',
  styleUrl: './deliverypoint.component.css'
})
export class DeliverypointComponent {


   pedidosToEntregar : Pedido[]=[]

   constructor(private pedidoService: PedidoService) {
    
    this.pedidosToEntregar=pedidoService.pedidosToEntregar
   }
 
   pedidoEntregado(pedido: Pedido) {
    
    this.pedidoService.deletePedidos(pedido,this.pedidosToEntregar)
    }



   
}
