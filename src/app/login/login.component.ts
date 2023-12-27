import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  loginFrm!:FormGroup
  constructor ( private fb:FormBuilder){}

  ngOnInit(): void {
    this.loginFrm = this.fb.group({
      username:['' ,Validators.required],
      password:['' ,Validators.required],
    })

  }
  submit(){
    console.log(this.loginFrm.value , this.loginFrm.controls['username'].value , )
    if(this.loginFrm.controls['username'].value  == "222" && this.loginFrm.controls['password'].value  == "222"){
      Swal.fire({
        title: "لقد نجحت",
        icon: "success",
        confirmButtonText:'حسنا'
      }).then(()=>this.loginFrm.reset());
    }else{
      Swal.fire({
        title: "لقد فشلت",
        icon: "error",
        confirmButtonText:'حسنا'
      }).then(()=>this.loginFrm.reset());;

    }
  }
}
