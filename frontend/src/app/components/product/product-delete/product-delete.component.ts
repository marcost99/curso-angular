import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

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

  deleteProduct(): void {
    this.productService.delete(this.product).subscribe(() =>{
      this.productService.showMessage('Produto excluído com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
