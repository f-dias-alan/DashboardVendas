# Dashboard de Vendas

## Sobre o Projeto

O Dashboard de Vendas é uma aplicação desenvolvida em Angular com Angular Material que permite o gerenciamento de produtos de forma simples e moderna.

O sistema possui funcionalidades de autenticação, cadastro de produtos, edição, remoção, upload de imagens e controle de estoque.

O objetivo do projeto foi aplicar conceitos modernos vistos em sala de aula utilizando Angular 21.

---

# Tecnologias Utilizadas

* Angular 21
* Angular Material
* TypeScript
* SCSS
* JSON Server
* Signals
* Standalone Components

---

# Funcionalidades

## Autenticação

* Cadastro de usuários
* Login de usuários
* Validação de formulário
* Redirecionamento para dashboard
* Feedback visual com SnackBar

---

## Dashboard

* Listagem de produtos
* Cadastro de produtos
* Edição de produtos
* Exclusão de produtos
* Controle de estoque
* Upload de imagens
* Preview de imagens
* Status automático de estoque

---

# Estrutura do Projeto

```text
src/
 ├── app/
 │   ├── pages/
 │   │   ├── auth/
 │   │   └── dashboard/
 │   │
 │   ├── services/
 │   ├── pipes/
 │   ├── guards/
 │   └── models/
 │
 │   └── components/
 │
 ├── assets/
 │   └── products/
 │
 └── material-theme.scss
```

---

# Componentização

A interface foi dividida em componentes reutilizáveis:

* Product Form
* Product Table
* Product Card
* Product Dialog

Isso melhora organização, manutenção e reutilização do código.

---

# Signals

Signals foram utilizados para gerenciamento reativo de estados.

Exemplo:

```ts
produtos = signal<Produtointerface[]>([])
```

Os signals atualizam automaticamente a interface quando os dados mudam.

---

# Input e Output

A comunicação entre componentes foi feita utilizando Input e Output.

## Input

```ts
produtos = input.required<Produtointerface[]>()
```

## Output

```ts
save = output<Produtointerface>()
```

---

# Pipes

O projeto utiliza pipes nativos e personalizados.

## Currency Pipe

```html
{{ produto.preco | currency:'BRL' }}
```

## Pipe Personalizado

```ts
StatusEstoquePipe
```

Responsável por transformar a quantidade em status de estoque.

---

# Control Flow

Foi utilizado o novo Control Flow do Angular.

Exemplo:

```html
@if(produtos().length === 0)
```

---

# CSS Estático e Dinâmico

## CSS Estático

Utilizado para layout e estilização geral.

## CSS Dinâmico

Utilizado para alterar cores conforme status do estoque.

Exemplo:

```html
[class.success]="produto.status === 'Em estoque'"
```

---

# Angular Material

A estilização foi feita utilizando Angular Material.

Componentes utilizados:

* MatCard
* MatTable
* MatDialog
* MatSnackBar
* MatButton
* MatIcon
* MatInput
* MatChip

---

# Upload de Imagem

O sistema permite upload de imagens utilizando FileReader.

Exemplo:

```ts
const reader = new FileReader()
```

As imagens possuem preview antes do salvamento.

---

# Banco de Dados

Foi utilizado JSON Server para simular uma API REST.

## Instalação

```bash
npm install -g json-server
```

## Executar servidor

```bash
npx json-server --watch db.json
```

API:

```text
http://localhost:3000/users
```

---

# Como Executar o Projeto

## Instalar dependências

```bash
npm install
```

---

## Executar Angular

```bash
ng serve
```

Aplicação:

```text
http://localhost:4200
```

---

## Executar JSON Server

```bash
npx json-server --watch db.json
```

---

# Requisitos Aplicados

## Requisitos Mínimos

* Componentização da interface
* Utilização de signal
* Utilização de input e output
* Utilização e criação de pipes
* Utilização de control flow
* Utilização de CSS estático e dinâmico
* Estilização utilizando Angular Material

---

# Funcionalidades Extras

* CRUD completo
* Upload de imagens
* Preview de imagens
* Modal de edição
* Login e cadastro
* Tema dark
* Responsividade

---

# Autor

Projeto desenvolvido para aplicação prática dos conteúdos de Angular vistos em sala de aula.
