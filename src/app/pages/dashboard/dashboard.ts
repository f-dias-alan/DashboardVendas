import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

interface Produto {
  nome: string;
  preco: number;
  validade: string;
  estoque: number;
  status: 'Em estoque' | 'Baixo estoque' | 'Sem estoque';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class DashboardComponent {
  displayedColumns: string[] = [
    'nome',
    'preco',
    'validade',
    'estoque',
    'status',
    'acoes',
  ];

  produtos: Produto[] = [
    {
      nome: 'Notebook Gamer',
      preco: 4599.90,
      validade: '10/12/2026',
      estoque: 15,
      status: 'Em estoque',
    },
    {
      nome: 'Mouse RGB',
      preco: 149.90,
      validade: '01/08/2026',
      estoque: 4,
      status: 'Baixo estoque',
    },
    {
      nome: 'Teclado Mecânico',
      preco: 399.90,
      validade: '15/11/2026',
      estoque: 0,
      status: 'Sem estoque',
    },
    {
      nome: 'Monitor UltraWide',
      preco: 1899.99,
      validade: '22/09/2027',
      estoque: 8,
      status: 'Em estoque',
    },
  ];

  getTotalProdutos(): number {
    return this.produtos.length;
  }

  getTotalEstoque(): number {
    return this.produtos.reduce((total, item) => total + item.estoque, 0);
  }
}