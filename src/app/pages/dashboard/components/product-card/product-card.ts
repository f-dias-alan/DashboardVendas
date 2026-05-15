import { CommonModule } from '@angular/common';

import {
  Component,
  computed,
  input,
} from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { Produtointerface } from '../../../../models/produto.interface/produto.interface-module';

@Component({
  selector: 'app-product-card',
  standalone: true,

  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
  ],

  templateUrl: './product-card.html',

  styleUrls: ['./product-card.scss'],
})
export class ProductCardComponent {

  produtos = input.required<Produtointerface[]>();

  totalProdutos = computed(() =>
    this.produtos().length
  );

  totalEstoque = computed(() =>
    this.produtos().reduce(
      (total, item) =>
        total + item.estoque,
      0
    )
  );
}