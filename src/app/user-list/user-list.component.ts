import { Component, OnInit } from '@angular/core';
import { ListService } from 'app/service/list.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  arrayList: any[] = [];
  id:number
  constructor(private _listService: ListService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.arrayList = this._listService.getList();
    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      });

  }
  
    
  

}
