import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'code-action-error-repro';

  private _destroy$ = new Subject<void>();

  constructor(private appService: AppService) {
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public test() {
    this.appService.test()
    .pipe(takeUntil(this._destroy$))
    .subscribe(() => {

    });
  }
}
