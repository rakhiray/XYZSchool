import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css'],
})
export class AdmissionComponent {
  userData: any = {};
  getData(data: NgForm) {
    alert('registered successfully');
    this.userData = data;
  }
}
