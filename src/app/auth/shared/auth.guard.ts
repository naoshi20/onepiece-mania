import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Router } from '@angular/router';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard {

        constructor(private authService: AuthService, private router: Router) {
        }

        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
                if (this.authService.isAuthenticated()) return true;
                this.router.navigate(['/login'])
                return false
        }
}