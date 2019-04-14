import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BackendService } from './../../services/backend.service'

@Component({
  selector: 'adminorders',
  templateUrl: './adminorders.component.html',
  styleUrls: ['./adminorders.component.css']
})
export class AdminordersComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
    if(this.querySubscription){
      this.querySubscription.unSubscribe();
    }
  }

  myDocData: any[];
  members: any[];
  toggleField: string;
  dataSource: MatTableDataSource<any>;
  savedChanges = false;
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['category', 'userid', 'name', 'price', '_id'];

  constructor(private _backendService: BackendService) { }

  ngOnInit() {
    this.toggleField = "searchMode";
    this.dataSource = new MatTableDataSource(this.members)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   
  }

  toggle(filter?){
    if(!filter) { filter = "searchMode"}
    else {filter = filter;}
    this.toggleField =filter;
  }

  getData() {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getProducts('orders')
        .subscribe(res => {
            this.members = res;
            this.dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        },
        (err) =>{
          this.error = true;
          this.errorMessage = err.errorMessage;
          this.dataLoading = false;
        },
        ()=>{
          this.error = false;
          this.dataLoading = false;
        }
        
        );
  }

  getFilterData(filters){
    this.dataLoading = true;
    this.querySubscription = this._backendService.getFilterProducts('orders',filters)
        .subscribe(members => {
            this.members = members;
            this.dataSource = new MatTableDataSource(members);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.dataLoading = false;
        });
}

setData(formData){
  this.dataLoading = true;
  this.querySubscription = this._backendService.setProducts('orders',formData)
      .subscribe(members => {
        this.savedChanges = true;
        this.dataLoading = true;
      });
}

updateData(formData){
  this.querySubscription = this._backendService.updateProducts(formData)
      .subscribe(members => {
        this.savedChanges = true;
      });

}

getDoc(docId){
  this.dataLoading = true;
  this.querySubscription = this._backendService.getOneProductDoc(docId)
      .subscribe(members => {
        if(members){
          this.myDocData = members;
          this.toggle('editMode');
          this.dataLoading = false;
        }
      });
}


deleteDoc(docId){
  if(confirm("Are you sure")){
  this.dataLoading = true;
  this.querySubscription = this._backendService.delOneProductDoc(docId)
      .subscribe(members => {
        if(members){
          this.toggle('editMode');
        }
      });
    }
}



}
