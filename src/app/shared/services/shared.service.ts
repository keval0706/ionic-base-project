import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class SharedService {
    constructor(
        private $localStorage: LocalStorageService,
        private router: Router,
    ) { }

    setUserName(username: string) {
        this.$localStorage.store('userName', username);
    }

    getUserName() {
        return this.$localStorage.retrieve('userName');
    }

    logout() {
        this.$localStorage.clear('userName');
        this.router.navigate(['/login']);
    }

}
