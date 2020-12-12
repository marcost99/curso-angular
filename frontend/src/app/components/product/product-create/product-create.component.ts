import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  //cria um atributo do tipo da interface do Produto (contida no arquivo de modelo)
  product: Product = {
    name: '',
    price: undefined
  }

  constructor(
    //há uma injeção de dependência para as classes referentes ao serviço e à rota
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  //é acionado pelo click do botão na arquivo *.html do componente
  createProduct(): void {
    //utiliza a instância do serviço para executar o método de criação do produto quando a resposta do post for retornada. O subject é o método subscribe() e o Observable é do tipo da interface modelo
    //o serviço é responsável por fazer as interações com a API (backend), enquanto que esta classe (arquivo *.ts do componente) é reponsável pela parte visual
    this.productService.create(this.product).subscribe(() => {
      //exibe a mensagem
      this.productService.showMessage('Produto criado!')
      //redireciona para a tela de exibição dos produtos
      this.router.navigate(['/products'])
    })
  }

  //é acionado pelo click do botão na arquivo *.html do componente
  cancel(): void {
    this.router.navigate(['/products'])
  }

  //teste diretivas
  propLegal = "qualquer"

  fazerAlgo(): void {
    console.log('Fazendo algo!')
  }

}
