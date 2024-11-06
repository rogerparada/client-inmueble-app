import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromList from '../../store/save';
import { InmuebleResponse } from '../../store/save';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-inmueble-list',
  templateUrl: './inmueble-list.component.html',
  styleUrls: ['./inmueble-list.component.scss'],
})
export class InmuebleListComponent implements OnInit {
  inmuebles$!: Observable<InmuebleResponse[] | null>;
  loading$!: Observable<boolean | null>;

  pictureDefault: string =
    'https://firebasestorage.googleapis.com/v0/b/edificacion-app-fe698.appspot.com/o/image%2F1670354357510_imagen1.jpeg?alt=media&token=e24268a2-15e1-4da9-82ab-65333af112c0';

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.store.dispatch(new fromList.Read());
    this.loading$ = this.store.pipe(select(fromList.getLoading));
    this.inmuebles$ = this.store.pipe(select(fromList.getInmuebles));
  }
}
