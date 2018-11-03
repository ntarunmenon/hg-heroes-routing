import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrises(): Observable<Crisis[]> {
    // TODO: send the message _after_ fetching the crises
    this.messageService.add('CrisisService: fetched crises');
    return of(CRISES);
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      // (+) before `id` turns the string into a number
      map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id))
    );
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/