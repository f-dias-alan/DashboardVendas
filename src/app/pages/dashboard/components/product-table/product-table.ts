import {
  Component,
  input,
  output,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

import { Produtointerface } from '../../../../models/produto.interface/produto.interface-module';

@Component({
  selector: 'app-product-table',

  standalone: true,

  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
  ],

  templateUrl: './product-table.html',

  styleUrls: ['./product-table.scss'],
})
export class ProductTableComponent {

  produtos = input.required<Produtointerface[]>();

  delete = output<number>();

  edit = output<Produtointerface>();

  displayedColumns = [
    'imagem',
    'nome',
    'preco',
    'validade',
    'estoque',
    'status',
    'acoes',
  ];

  remove(id: number): void {

    this.delete.emit(id);
  }

  editar(produto: Produtointerface): void {

    this.edit.emit(produto);
  }
}