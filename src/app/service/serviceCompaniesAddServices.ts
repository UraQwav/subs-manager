import { GlobalRootURL } from '../GlobalRootURL';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {Injectable} from '@angular/core'
import { FormGroup, FormArray } from '@angular/forms';
@Injectable(
{
providedIn:'root'
})

export class ServiceCompaniesAddServices {
    URL = "/company-service/add/"
    URLGet = "/company-service/getById/"
    constructor(private http:HttpClient){
    }

    AddService(body: FormGroup): Observable<any>{
        return this.http.post(this.URL, body.value);
    }
    GetCompany(id:any): Observable<any>{
        return this.http.get(this.URLGet+id);
    }
}