import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { UploadTaskSnapshot } from '@angular/fire/storage';
import { Observable, Subject, lastValueFrom } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit, OnDestroy {
  @Input() file!: File;
  @Output() completed = new EventEmitter<string>();
  task!: AngularFireUploadTask;
  snapshot$!: Observable<UploadTaskSnapshot | undefined>;
  percentage$!: Observable<number | undefined>;
  downloadUrl!: string;
  private destroy = new Subject<void>();

  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {
    this.startUpload();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  startUpload(): void {
    const path = `${this.file.type.split('/')[0]}/${Date.now()}_${
      this.file.name
    }`;
    console.log(path);

    const storageRef = this.storage.ref(path);

    this.task = this.storage.upload(path, this.file);
    this.percentage$ = this.task.percentageChanges();

    this.snapshot$ = this.task.snapshotChanges() as Observable<
      UploadTaskSnapshot | undefined
    >;

    this.snapshot$
      .pipe(
        takeUntil(this.destroy),
        finalize(async () => {
          const storageRefObservable$ = storageRef.getDownloadURL();
          this.downloadUrl = await lastValueFrom(storageRefObservable$);
          this.completed.next(this.downloadUrl);
        })
      )
      .subscribe();
  }
}
