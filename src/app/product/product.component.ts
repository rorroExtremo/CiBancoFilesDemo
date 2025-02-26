import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product?:string;

  constructor(private route: ActivatedRoute) {
    // this.route.params.subscribe(params => {
    //   console.log(params['product']);
    //   this.product = params['product'];
    // });
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      console.log(params['product']);
      this.product = params['product'];
    });
  }
}
