import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private TOKEN_NAME = "token";

  constructor() { }

  getToken(){
    return localStorage.getItem(this.TOKEN_NAME);
  }

  setToken(token: string){
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  // Est ce que le token existe, si oui est-ce qu'il a expiré ?
  isTokenValid(): boolean{
    const token = this.getToken();
    if(token){
      const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
      return (Math.floor((new Date).getTime() / 1000)) < expiry;
    }

    return false;
  }

}
