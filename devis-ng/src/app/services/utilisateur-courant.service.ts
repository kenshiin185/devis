import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurCourantService {
  private _token: string = "";

  public get token(): string {

    if (!this._token) {
      if (window.sessionStorage.getItem("savetoken")) {
        this._token = window.sessionStorage.getItem("savetoken");
        return this._token;
      }

    }
    return this._token;
  }



  public set token(v: string) {
    if (v == "") {
      window.sessionStorage.removeItem("savetoken");
    } else {
      window.sessionStorage.setItem("savetoken", v);
    }
    this._token = v;
  }


  private _id: string = "";

  public get id(): string {

    if (!this._id) {
      if (window.sessionStorage.getItem("saveid")) {
        this._id = window.sessionStorage.getItem("saveid");
        return this._id;
      }

    }
    return this._id;
  }



  public set id(i: string) {
    if (i == "") {
      window.sessionStorage.removeItem("saveid");
    } else {
      window.sessionStorage.setItem("saveid", i);
    }
    this._id = i;
  }

  public get isLoged() {
    if (this._token != "") {
      return true;
    } else {
      return false;
    }
  }

  constructor() { }
}
