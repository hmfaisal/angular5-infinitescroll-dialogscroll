import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryMaterialDataService implements InMemoryDbService {

    createDb() {
        let materials = [
            {
                "id": 201,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0001.jpg"
            },
            {
                "id": 202,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0002.jpg"
            },
            {
                "id": 203,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0003.jpg"
            },
            {
                "id": 204,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid","Free"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0004.jpg"
            },
            {
                "id": 205,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0005.jpg"
            },
            {
                "id": 206,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0006.jpg"
            },
            {
                "id": 207,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0007.jpg"
            },
            {
                "id": 208,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0008.jpg"
            },
            {
                "id": 209,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0009.jpg"
            },
            {
                "id": 210,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0010.jpg"
            },
            {
                "id": 211,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0011.jpg"
            },
            {
                "id": 212,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0012.jpg"
            },
            {
                "id": 213,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0013.jpg"
            },
            {
                "id": 214,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid","Free"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0014.jpg"
            },
            {
                "id": 215,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0015.jpg"
            },
            {
                "id": 216,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0016.jpg"
            },
            {
                "id": 217,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0017.jpg"
            },
            {
                "id": 218,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0018.jpg"
            },
            {
                "id": 219,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0019.jpg"
            },
            {
                "id": 220,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0020.jpg"
            },
            {
                "id": 221,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0021.jpg"
            },
            {
                "id": 222,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0022.jpg"
            },
            {
                "id": 223,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0001.jpg"
            },
            {
                "id": 224,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0002.jpg"
            },
            {
                "id": 225,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0003.jpg"
            },
            {
                "id": 226,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid","Free"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0004.jpg"
            },
            {
                "id": 227,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0005.jpg"
            },
            {
                "id": 228,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0006.jpg"
            },
            {
                "id": 229,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0007.jpg"
            },
            {
                "id": 230,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0008.jpg"
            },
            {
                "id": 231,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0009.jpg"
            },
            {
                "id": 232,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0010.jpg"
            },
            {
                "id": 233,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0011.jpg"
            },
            {
                "id": 234,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0012.jpg"
            },
            {
                "id": 235,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0013.jpg"
            },
            {
                "id": 236,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid","Free"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0014.jpg"
            },
            {
                "id": 237,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0015.jpg"
            },
            {
                "id": 238,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0016.jpg"
            },
            {
                "id": 239,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0017.jpg"
            },
            {
                "id": 240,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0018.jpg"
            },
            {
                "id": 241,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0019.jpg"
            },
            {
                "id": 242,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0020.jpg"
            },
            {
                "id": 243,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0021.jpg"
            },
            {
                "id": 244,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0022.jpg"
            },
            {
                "id": 245,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0001.jpg"
            },
            {
                "id": 246,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0002.jpg"
            },
            {
                "id": 247,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0003.jpg"
            },
            {
                "id": 248,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid","Free"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0004.jpg"
            },
            {
                "id": 249,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0005.jpg"
            },
            {
                "id": 250,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0006.jpg"
            },
            {
                "id": 251,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0007.jpg"
            },
            {
                "id": 252,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0008.jpg"
            },
            {
                "id": 253,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0009.jpg"
            },
            {
                "id": 254,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0010.jpg"
            },
            {
                "id": 255,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0011.jpg"
            },
            {
                "id": 256,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0012.jpg"
            },
            {
                "id": 257,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0013.jpg"
            },
            {
                "id": 258,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid","Free"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0014.jpg"
            },
            {
                "id": 259,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0015.jpg"
            },
            {
                "id": 260,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0016.jpg"
            },
            {
                "id": 261,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0017.jpg"
            },
            {
                "id": 262,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0018.jpg"
            },
            {
                "id": 263,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0019.jpg"
            },
            {
                "id": 264,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0020.jpg"
            },
            {
                "id": 265,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0021.jpg"
            },
            {
                "id": 266,
                "name": "Bellini Pattern Black",
                "article_id": "belB12 ",
                "tags": ["Paid"],
                "state": "completed",
                "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                "gallery_image": "/assets/images/shader-balls/mat0022.jpg"
            },
        ];
        return { materials };
    }

}