import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        let materials = [
            {
                "id": 1,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "gallery_image": "/assets/images/ "
            },
            {
                "id": 2,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "gallery_image": "/assets/images/ "
            },
            {
                "id": 3,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "gallery_image": "/assets/images/ "
            },
            {
                "id": 4,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "gallery_image": "/assets/images/ "
            },
            {
                "id": 5,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "gallery_image": "/assets/images/ "
            }
        ];
        return { materials };
    }

}