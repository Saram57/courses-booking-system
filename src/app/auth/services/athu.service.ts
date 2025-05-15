import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ResetPasswordRequest {
  email: string;
  otpCode: string;
  newPassword: string;
}
@Injectable({
  providedIn: 'root'
})
export class AthuService {
 
}
