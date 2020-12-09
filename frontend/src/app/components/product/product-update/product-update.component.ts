import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product | undefined

  constructor(
    private productService: ProductService,
    private router: Router,
    //retorna a rota atual
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //ao inicializar o componente, realiza uma consulta para preencher o formulário de atualização de produtos
    //pega o valor do parâmetro id da url
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readyById(id).subscribe(product => {
      this.product = product
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() =>{
      this.productService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
