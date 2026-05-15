import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Produtointerface } from '../../models/produto.interface/produto.interface-module';

import { MatDialog } from '@angular/material/dialog';

import { ProductDialogComponent } from './components/product-dialog/product-dialog';

import { ProductTableComponent } from './components/product-table/product-table';
import { ProductFormComponent } from './components/product-form/product-form';
import { ProductCardComponent } from './components/product-card/product-card';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ProductTableComponent, ProductFormComponent, ProductCardComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class DashboardComponent {
  produtos = signal<Produtointerface[]>([

  {
    id: 1,

    nome: 'Notebook Gamer',

    preco: 4599.90,

    validade: '2027-12-10',

    estoque: 15,

    status: 'Em estoque',

  },

  {
    id: 2,

    nome: 'Manto Flamengo',

    preco: 89.90,

    validade: '2027-08-20',

    estoque: 8,

    status: 'Em estoque',

  },

  {
    id: 3,

    nome: 'Controle Xbox',

    preco: 349.90,

    validade: '2028-01-15',

    estoque: 3,

    status: 'Baixo estoque',
  },
]);

  deleteProduto(id: number): void {
    this.produtos.update((lista) => lista.filter((produto) => produto.id !== id));
  }

  produtoEmEdicao = signal<Produtointerface | null>(null);

  addProduto(produto: Produtointerface): void {
    const existe = this.produtos().find(p => p.id === produto.id);

    if (existe) {
      this.produtos.update(lista =>
        lista.map(item =>
          item.id === produto.id ? produto : item
        )
      );
      return;
    }

    this.produtos.update(lista => [...lista, produto]);
  }

  editProduto(produto: Produtointerface): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '900px',

      data: produto,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      this.produtos.update((lista) => lista.map((item) => (item.id === result.id ? result : item)));
    });
  }

  constructor(private dialog: MatDialog) {}

}