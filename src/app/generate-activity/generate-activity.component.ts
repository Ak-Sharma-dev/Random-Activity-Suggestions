import { Component, OnInit } from '@angular/core';
import { DisplayActivityService } from '../service/display-activity.service';

@Component({
  selector: 'app-generate-activity',
  templateUrl: './generate-activity.component.html',
  styleUrls: ['./generate-activity.component.css']
})
export class GenerateActivityComponent implements OnInit {

  activity : string = '';
  type : string = '';

  constructor(private service : DisplayActivityService) { }

  ngOnInit(): void {
  }

  generateRandomActvity(){
    this.service.getActivity().subscribe(
      response => {
        return this.handleSuccessfullResponse(response);
      },
      error => {
        return this.handleErrorResponse(error);
      }
    )
  }

  handleSuccessfullResponse(response : any){
    this.activity = response.activity;
    this.type = response.type;
  }

  handleErrorResponse(error : any){
    alert(error.message);
  }

}


