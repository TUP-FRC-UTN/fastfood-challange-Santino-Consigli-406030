import { Component } from '@angular/core';
import { DeliverypointComponent } from "../deliverypoint/deliverypoint.component";
import { POSComponent } from "../pos/pos.component";
import { KitchenComponent } from "../kitchen/kitchen.component";
import { Pedido } from '../../models/pedido';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [DeliverypointComponent, POSComponent, KitchenComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

   pedidosIngresadosToSee: Pedido[] = [];

   constructor(private pedidoService: PedidoService){
   }

   ngOnInit(): void {
    this.loadPedidos();
  }

  loadPedidos(): void {
    this.pedidosIngresadosToSee = this.pedidoService.getAllPedidosIngresados();
  }

}
