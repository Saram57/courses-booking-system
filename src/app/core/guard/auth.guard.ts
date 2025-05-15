// import { CanActivateFn, Router } from '@angular/router';
// import { isPlatformBrowser } from '@angular/common';
// import { inject, PLATFORM_ID } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';

// export const authGuard: CanActivateFn = (route, state) => {
//   const toastrService = inject(ToastrService);
//   const router = inject(Router);
//   const platformId = inject(PLATFORM_ID);

//   function isTokenValid(token: string): boolean {
//     if (!token) return false;
//     try {
//       const payload = JSON.parse(atob(token.split('.')[1]));
//       const expiry = payload.exp;
//       const now = Math.floor(Date.now() / 1000);
//       return expiry > now;
//     } catch {
//       return false;
//     }
//   }

//   if (isPlatformBrowser(platformId)) {
//     const token = localStorage.getItem('token');
//     if (token && isTokenValid(token)) {
//       return true;
//     } else {
//       localStorage.removeItem('token');
//       toastrService.error("لا يمكنك الدخول على هذه الصفحة", "خطأ!");
//       router.navigate(['/login']);
//       return false;
//     }
//   }
//   return false;
// };
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const toastrService = inject(ToastrService);
  const router = inject(Router);

  // يمكنك إضافة الشروط التي تريدها هنا بدون تحقق من التوكن

  return true; // السماح بالدخول دائمًا
};
