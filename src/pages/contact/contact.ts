import { Component } from '@angular/core';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor() {

  }

  callCMHA(){
    window.alert("Canadian Mental Health Association's number: 1-866-531-2600");
  }

  callCSP(){
    window.alert("Centre for Suicide Prevention's number: \n1-833-456-4566");
  }

  callKHP(){
    window.alert("Kids Help Phone number: \n1-800-668-6868");
  }

  callEmail(){
    window.alert("Canadian Mental Health Association's Email: \ninfo@cmha.ca");
  }
}
