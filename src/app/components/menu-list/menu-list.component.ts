import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();
  @Output() signOut = new EventEmitter<void>();

  @Input() isAuthorized!: boolean | null;

  constructor() {}

  ngOnInit(): void {}

  closeMenu(): void {
    this.menuToggle.emit();
  }

  onSingOut(): void {
    this.signOut.emit();
  }
}
