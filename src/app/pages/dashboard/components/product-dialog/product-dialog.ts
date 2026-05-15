import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import { ProductFormComponent } from '../product-form/product-form';

import { Produtointerface } from '../../../../models/produto.interface/produto.interface-module';

@Component({
  selector: 'app-product-dialog',

  standalone: true,

  imports: [
    ProductFormComponent,
  ],

  templateUrl: './product-dialog.html',
})
export class ProductDialogComponent {

  data = inject<Produtointerface>(MAT_DIALOG_DATA);

  dialogRef = inject(MatDialogRef<ProductDialogComponent>);

  save(produto: Produtointerface): void {

    this.dialogRef.close(produto);
  }
}