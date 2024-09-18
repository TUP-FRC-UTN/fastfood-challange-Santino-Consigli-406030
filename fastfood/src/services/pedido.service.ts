import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {


  pedidosIngresados : Pedido[]=[]
  pedidosPendientes : Pedido[]=[]
  pedidosToCoccion : Pedido[]=[]
  pedidosToEntregar : Pedido[]=[]
  constructor() { }

  addPedido(newPedidoToAddListPedido: Pedido)
  {
    newPedidoToAddListPedido.number= this.numberRandom()
    this.pedidosIngresados.push(newPedidoToAddListPedido)
    this.pedidosPendientes.push(newPedidoToAddListPedido)
  }
  getAllPedidosIngresados() : Pedido[]
  {
    return this.pedidosIngresados
  }
  numberRandom(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
  addPedidoToCoccion(pedidoToCoccion: Pedido) {
    if(this.pedidosToCoccion.length>0)
    {
      alert('No puedes cocinar mas de 1 pedido a la vez')
      return
    }
    this.pedidosToCoccion.push(pedidoToCoccion)
    this.deletePedidos(pedidoToCoccion,this.pedidosPendientes)
  }
  addPedidoToEntregar(pedido: Pedido) {
    this.pedidosToEntregar.push(pedido)
    this.deletePedidos(pedido, this.pedidosToCoccion)
  }
  deletePedidos(pedido: Pedido, pedidos: Pedido[]) {
    const index = pedidos.findIndex(p=>p.number===pedido.number)
    if(index!==-1)
    {
     pedidos.splice(index,1)
    }
  }

}
