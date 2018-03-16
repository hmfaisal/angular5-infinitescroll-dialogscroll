import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {

    private _api_url = '/api';
    private _materials_url = this._api_url + '/materials';

    get materials_url(): string {
        return this._materials_url;
    }

}