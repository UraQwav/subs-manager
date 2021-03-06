import { GlobalRootURL } from '../GlobalRootURL';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {Injectable} from '@angular/core'
import { FormGroup, FormArray } from '@angular/forms';
@Injectable(
{
providedIn:'root'
})

export class ServiceServicePriceAndRenewalTime{
    URL = "/service-price-and-renewal-time/getall"
    constructor(private http:HttpClient){
    }

    GetService(): Observable<any>{
        return this.http.get(this.URL);
    }
}