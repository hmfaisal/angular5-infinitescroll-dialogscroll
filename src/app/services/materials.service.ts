import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Material } from './../models/material';
import { ConfigService } from './config.service';

@Injectable()
export class MaterialsService {

    constructor(
        private http: HttpClient,
        private config:ConfigService,
    ) { }

    getAll(): Observable<Material[]> {
        return this.http.get<Material[]>(this.config.materials_url) 
    }

    getById(id: number): Observable<Material[]> {
        return this.http.get<Material[]>(this.config.materials_url + '/' + id) 
    }

}