import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatSnackBar,
  MatSnackBarModule,
} from '@angular/material/snack-bar';

import { Router } from '@angular/router';

import { Auth } from '../../services/auth';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './auth.html',
  styleUrls: ['./auth.scss'],
})
export class AuthComponent {

  isLogin = signal(true);
  hidePassword = signal(true);

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: Auth
  ) {

    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ],
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
        ],
      ],
    });

    this.registerForm = this.fb.group({
      nome: ['', Validators.required],

      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ],
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
        ],
      ],
    });
  }

  toggleMode(): void {
    this.isLogin.set(!this.isLogin());
  }

  login(): void {

    if (this.loginForm.invalid) {

      this.loginForm.markAllAsTouched();

      this.snackBar.open(
        'Preencha os campos corretamente',
        'Fechar',
        {
          duration: 3000,
        }
      );

      return;
    }

    const { email, password } =
      this.loginForm.value;

    this.authService
      .getUsers()
      .subscribe((users: any[]) => {

        const user = users.find(
          (u) =>
            u.email === email &&
            u.password === password
        );

        if (!user) {

          this.snackBar.open(
            'Credenciais inválidas',
            'Fechar',
            {
              duration: 3000,
            }
          );

          return;
        }

        localStorage.setItem(
          'logged',
          'true'
        );

        this.snackBar.open(
          'Login realizado com sucesso!',
          'OK',
          {
            duration: 2000,
          }
        );

        this.router.navigate([
          '/dashboard',
        ]);
      });
  }

  register(): void {

    if (this.registerForm.invalid) {

      this.registerForm.markAllAsTouched();

      this.snackBar.open(
        'A senha deve possuir no mínimo 6 caracteres',
        'Fechar',
        {
          duration: 3000,
        }
      );

      return;
    }

    this.authService
      .register(this.registerForm.value)
      .subscribe({

        next: () => {

          this.snackBar.open(
            'Conta criada com sucesso!',
            'OK',
            {
              duration: 3000,
            }
          );

          this.isLogin.set(true);

          this.registerForm.reset();
        },

        error: () => {

          this.snackBar.open(
            'Erro ao criar conta',
            'Fechar',
            {
              duration: 3000,
            }
          );
        },
      });
  }
}