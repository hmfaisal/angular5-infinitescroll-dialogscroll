import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest, HttpEventType, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Material } from './../models/material';

@Injectable()
export class MaterialsService {

    headers = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    private materialsUrl = 'api/materials'; 

    constructor(private http: HttpClient) { }

    getMaterials(): Observable<Material[]> {
        return this.http.get<Material[]>(this.materialsUrl) 
    }

}