import {Component, OnInit, Output} from '@angular/core';
import { NgForm } from '@angular/forms';

import {HttpClient} from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  isResultTrue = false;
  result:any ={};
  data: undefined;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {}


  registerData(form: NgForm) {
    let errorList: any[];
    errorList = [];
    function testData(){
      if(!("number" == typeof (form.value.age))) {
        errorList.push("Veuillez indiquer un age valide");
      }
      if(!("number" == typeof (form.value.taille))) {
        errorList.push("Veuillez indiquer un taille valide");
      }
      if(!("number" == typeof (form.value.poid))) {
        errorList.push("Veuillez indiquer un poid valide");
      }
      if(!("number" == typeof (form.value.duration))) {
        errorList.push("Veuillez indiquer un durée valide");
      }
      if(form.value.aeration==""){
        errorList.push("Veuillez indiquer le lieu");
      }

    }
    testData();
    console.log(errorList);

    if(errorList.length== 0) {
      this.isResultTrue = true;

      if (form.value.distance == "") {
        form.value.distance = 0;
        console.log(form.value.distance);
      }
      if (form.value.pulmonaire == "") {
        form.value.pulmonaire = false;
      }
      if (form.value.cardio == "") {
        form.value.cardio = false;
      }
      if (form.value.fatigue == "") {
        form.value.fatigue = false;
      }
      if (form.value.thrombose == "") {
        form.value.thrombose = false;
      }
      if (form.value.diabete == "") {
        form.value.diabete = false;
      }
      if (form.value.omasque == "") {
        form.value.omasque = false;
      }
      if (form.value.umasque == "") {
        form.value.umasque = false;
      }
      if (form.value.contact == "") {
        form.value.contact = false;
      }
      if (form.value.vaccin == "") {
        form.value.vaccin = false;
      }
      console.log(form.value);
      this.httpClient.get('http://localhost:5000/api/calcul', {
        params: {
          "age": form.value.age,
          "taille": form.value.taille,
          "poids": form.value.poid,
          "pulmonaire": form.value.Pulmo,
          "fatigue": form.value.Fatigue,
          "cardio": form.value.Cardio,
          "thrombose": form.value.Thrombose,
          "diabete": form.value.Diabete,
          "duree": form.value.duration,
          "lieu": form.value.aeration,
          "user-masque": form.value.usermasque,
          "other-masque": form.value.othermasque,
          "contact": form.value.contact,
          "vaccin": form.value.vaccination,
          "distance": form.value.distance

        },
        observe: 'response'
      })
        .toPromise()
        .then(response => {
          console.log(response.body);
          this.result = response.body;
        })
        .catch(console.log);
    }

      setInterval(function (){
        window.scrollTo(0,1000);

      },2);
      console.log(form.value);
    }
  }
