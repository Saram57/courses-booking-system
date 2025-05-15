import { NgClass, NgIf } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [NgClass, NgIf, ReactiveFormsModule, CommonModule, FormsModule],
  providers: [ToastrService],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class SignInComponent {
  private readonly router = inject(Router);
  private readonly toastrService = inject(ToastrService);

  emailModel: string = '';
  mgError: string = '';
  isSuccess: string = '';
  emailNotFoundError: string = '';

  RegisterForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/)
    ]),
    userName: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{3,20}$/)])
  });

  submitForm(): void {
    if (this.RegisterForm.valid) {
      // هنا مجرد رسالة للتجربة بدل استدعاء API
      this.toastrService.success('تم التسجيل بنجاح! (محلي فقط)', 'نجاح');
      console.log('Register Data:', this.RegisterForm.value);
      this.RegisterForm.reset();
      this.isSignUpMode = false;
    } else {
      this.RegisterForm.markAllAsTouched();
      this.toastrService.error('يرجى تصحيح الأخطاء في النموذج', 'خطأ');
    }
  }

  LoginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/)
    ]),
  });

  submitLoginForm(): void {
    if (this.LoginForm.valid) {
      this.toastrService.success('تم تسجيل الدخول بنجاح! (محلي فقط)', 'نجاح');
      console.log('Login Data:', this.LoginForm.value);
      this.LoginForm.reset();
    } else {
      this.LoginForm.markAllAsTouched();
      this.toastrService.error('يرجى تصحيح الأخطاء في نموذج الدخول', 'خطأ');
    }
  }

  isSignUpMode = false;

  toggleSignUp() {
    this.isSignUpMode = true;
  }

  toggleSignIn() {
    this.isSignUpMode = false;
  }
}
