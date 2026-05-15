export interface Produtointerface {
  id: number;
  nome: string;
  preco: number;
  validade: string;
  estoque: number;
  imagem?: string;
  status: 'Em estoque' | 'Baixo estoque' | 'Sem estoque';
}