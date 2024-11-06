import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  loading$!: Observable<boolean | null>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(fromUser.getLoading));
  }

  RegistrarUsuario(form: NgForm) {
    if (form.valid) {
      const userCreateRequest: fromUser.UserCreateRequest = {
        nombre: form.value.nombre,
        apellido: form.value.lastName,
        telefono: form.value.telephone,
        email: form.value.email,
        username: form.value.userName,
        password: form.value.password,
      };

      this.store.dispatch(new fromUser.SignUpEmail(userCreateRequest));
    }
  }
}
