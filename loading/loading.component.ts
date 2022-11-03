import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
 
   
  isLoading!: boolean
  constructor(loadingService: LoadingService) {
    loadingService.isLoading.subscribe((isLoading)=>{
      this.isLoading = isLoading;
    });
    // loadingService.showLoading();
   }

  ngOnInit(): void {
  }

}
