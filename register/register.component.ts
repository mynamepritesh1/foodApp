import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserRegister } from '../modal/IUserRegister';
import { PasswordMatchValidator } from '../modal/validators/password_match';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output()
 onClick = new EventEmitter();
 
  registerForm!: FormGroup;
  isSubmitted = false;

  returnUrl = '';


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:['',[Validators.required, Validators.minLength(5)]],
      email:['', [Validators.required,Validators.email]],
      password:['',Validators.required],
      confirmPassword: ['',[Validators.required]],
      address: ['',[Validators.required,Validators.minLength(10)]]

    },{
      Validators: PasswordMatchValidator('password','confirmPassword')
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;

  }

  get fc(){
    return this.registerForm.controls;
  }
  submit(){
    this.isSubmitted = true;
    if(this.registerForm.invalid) return;

   
    this.userService.register({
      name: this.fc.name.value,
      email: this.fc.email.value,
      password: this.fc.password.value,
      confirmPassword: this.fc.confirmPassword.value,
      address: this.fc.address.value,
    }).subscribe(()=>{
        this.router.navigateByUrl(this.returnUrl);
      });
  }

}

