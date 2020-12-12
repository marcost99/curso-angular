import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  //Injeção de Dependência
  //o Angular vai instanciar essa classe apenas uma vez e ao executar o método navigateToProductCreate()
  //será setado um valor do tipo Router para o atributo router sem a necessidade de criar o objeto novamente
  constructor(private router: Router, private headerService: HeaderService) {
    /*
    HeaderService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
    */
    
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['products/create'])
  }

}
