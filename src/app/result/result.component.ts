import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
@Input() result: any;




  constructor() {

  }


  ngOnInit(): void {
    this.showMessageSuccess()
  }
  showMessageSuccess(){

    setTimeout(()=>{
      document.getElementById("lds-roller")!.style.display="none";
      document.getElementById("test")!.style.display="";
      document.getElementById("test1")!.style.display="";
      document.getElementById("box")!.classList.add("cyberpunk");


    },3000);

  }


}
