import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Role, UserModel, UserRoleMap} from "../../user/user.model";
import {ApiResponse} from "../../util/api.response.model";
import {StorageUtil} from "../../util/storage.util";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:8080/api/auth";

  private currentUserSubject = new BehaviorSubject<UserModel | null>(this.getStoredUser());
  public currentUser$ = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private httpClient: HttpClient
  ) {
  }

  login(email: string, password: string): Observable<boolean> {
    let params = new HttpParams();
    params = params.append('email', email);
    params = params.append('password', password);

    return this.httpClient.post<ApiResponse>(this.baseUrl + '/login', {}, {params}).pipe(
      map(response => {
        if (response.successful) {
          const jwt = response.data.jwt;
          const user = response.data.user;
          StorageUtil.saveToLocalStorage('jwt', jwt);
          StorageUtil.saveToLocalStorage('sessionUser', user);

          this.isAuthenticatedSubject.next(true);
          this.currentUserSubject.next(user);
          return true;
        } else {
          this.isAuthenticatedSubject.next(false);
          this.currentUserSubject.next(null);
          return false;
        }
      })
    );
  }

  getRole(): Observable<Role | null> {
    return this.currentUser$.pipe(
      map(user => user ? user.role : null)
    );
  }

  getCurrentUser(): Observable<UserModel | null> {
    return this.currentUser$;
  }

  public getStoredUser(): UserModel | null {
    return StorageUtil.getFromLocalStorage('sessionUser');
  }

  isLoggedIn(): boolean {
    return StorageUtil.getFromLocalStorage('jwt') !== null;
  }

  logout(): void {
    StorageUtil.removeFromLocalStorage('jwt');
    StorageUtil.removeFromLocalStorage('sessionUser');

    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
  }

  getAuthToken(): string | null {
    return StorageUtil.getFromLocalStorage('jwt');
  }

}
