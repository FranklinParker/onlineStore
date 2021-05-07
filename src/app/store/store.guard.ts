import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {StoreComponent} from './components/store-home/store.component';

@Injectable({
  providedIn: 'root'
})
export class StoreGuard implements CanActivate {
  firstNav = true;

  constructor(private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.firstNav) {
      this.firstNav = false;
      if (route.component !== StoreComponent) {
        this.router.navigate(['']);
        return false;
      }
    }
    return true;
  }


}
