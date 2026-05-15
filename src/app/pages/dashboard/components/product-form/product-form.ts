import {
  Component,
  effect,
  input,
  output,
  signal,
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';

import { Produtointerface } from '../../../../models/produto.interface/produto.interface-module';

@Component({
  selector: 'app-product-form',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],

  templateUrl: './product-form.html',

  styleUrls: ['./product-form.scss'],
})
export class ProductFormComponent {

  save = output<Produtointerface>();

  produtoEdicao =
    input<Produtointerface | null>(null);

  imagemPreview = signal('');

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {

    this.form = this.fb.group({

      id: [0],

      nome: [
        '',
        Validators.required,
      ],

      preco: [
        null,
        Validators.required,
      ],

      validade: [
        '',
        Validators.required,
      ],

      estoque: [
        null,
        Validators.required,
      ],

      imagem: [''],
    });

    effect(() => {

      const produto =
        this.produtoEdicao();

      if (!produto) {
        return;
      }

      this.form.patchValue(produto);

      this.imagemPreview.set(
        produto.imagem || ''
      );
    });
  }

  onFileSelected(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    if (
      !input.files ||
      input.files.length === 0
    ) {
      return;
    }

    const file = input.files[0];

    if (
      !file.type.startsWith('image/')
    ) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {

      const imageBase64 =
        reader.result as string;

      this.imagemPreview.set(
        imageBase64
      );

      this.form.patchValue({

        imagem: imageBase64,
      });
    };

    reader.readAsDataURL(file);
  }

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;
    }

    const estoque =
      this.form.value.estoque;

    let status:
      Produtointerface['status'];

    if (estoque === 0) {

      status = 'Sem estoque';

    } else if (estoque < 5) {

      status = 'Baixo estoque';

    } else {

      status = 'Em estoque';
    }

    this.save.emit({

      ...this.form.value,

      id:
        this.form.value.id ||
        Date.now(),

      status,
    });

    this.form.reset();

    Object.keys(this.form.controls)
      .forEach(key => {

        this.form
          .get(key)
          ?.setErrors(null);

        this.form
          .get(key)
          ?.markAsPristine();

        this.form
          .get(key)
          ?.markAsUntouched();
      });

    this.imagemPreview.set('');
  }
}