import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';

//essa classe pode ser injetada em outras classes da aplicação
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://127.0.0.1:3001/products";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'Dispensar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  //o Observable é do tipo Product (interface modelo), pois os dados cadastrados possuem este tipo, deste modo a resposta também será deste tipo
  //ao executar este método os dados são gravados no arquivo *.json da API
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  //o Observable é um array do tipo Product (interface modelo)
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  readyById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }

  delete(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.delete<Product>(url, product)
  }

}
