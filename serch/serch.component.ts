import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.scss']
})
export class SerchComponent implements OnInit {
  searchItem: string = '';
  constructor(private route : ActivatedRoute,private router: Router) { }
//  search item available in our list
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.searchItem = params['searchItem'];
    })
  }
  search(): void{
    if(this.searchItem)
    this.router.navigateByUrl('/search/'+this.searchItem)
  }

}
