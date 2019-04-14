import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getCardTotal(){
    let fake = "10";
    return Observable.create(
      observable => {
        setTimeout(() => {
          observable.next(fake)
        }, 2000);
      }
    )
  }

  getUserStatus(){
    let fake = true;
    return Observable.create(
      observable => {
        setTimeout(() => {
          observable.next(fake)
        }, 2000);
      }
    )
  }


  getProducts(callType){
    let fake = [{
      'category': "test",
      'scategory': "test",
      'name': "test",
      'price': "123",
      '_id': "545"
    }];
    return Observable.create(
      observable => {
        setTimeout(() => {
          observable.next(fake)
        }, 2000);
      }
    )
  }

  getFilterProducts(callType, filter){
    let fake = [{
      'category': "test",
      'scategory': "test",
      'name': "test",
      'price': "123",
      '_id': "545"
    }];
    return Observable.create(
      observable => {
        setTimeout(() => {
          observable.next(fake)
        }, 2000);
      }
    )
  }
  
  setProducts(filter, formdata){
    let fake = true;
    return Observable.create(
      observable => {
        setTimeout(() => {
          observable.next(fake)
        }, 2000);
      }
    )
  }

  updateProducts(formdata){
    let fake = true;
    return Observable.create(
      observable => {
        setTimeout(() => {
          observable.next(fake)
        }, 2000);
      }
    )
  }

  getOneProductDoc(docId){
    let fake = {
      'category': "test",
      'scategory': "test",
      'name': "test",
      'price': "123",
      '_id': "545"
    };
    return Observable.create(
      observable => {
        setTimeout(() => {
          observable.next(fake)
        }, 2000);
      }
    )
  }



  delOneProductDoc(docId){
    let fake = true;
    return Observable.create(
      observable => {
        setTimeout(() => {
          observable.next(fake)
        }, 2000);
      }
    )
  }



  updateShoppingInterest(callType, data){
    let fake = true;
    return Observable.create(
      observable => {
        setTimeout(() => {
          observable.next(fake)
        }, 2000);
      }
    )
  }

  updateShoppingCart(callType, data){
    let fake = true;
    return Observable.create(
      observable => {
        setTimeout(() => {
          observable.next(fake)
        }, 2000);
      }
    )
  }


  
}
