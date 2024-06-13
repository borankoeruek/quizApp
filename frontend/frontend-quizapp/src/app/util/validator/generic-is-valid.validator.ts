import {
  catchError,
  debounceTime,
  first,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Valid } from '../../../backend-model/Valid';

export function genericAsyncValidator(
  fn: (value: string) => Observable<Valid>,
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return of(null);
    }

    return control.valueChanges.pipe(
      debounceTime(300),
      switchMap((value) =>
        fn(value).pipe(
          map((valid) => (valid.valid ? null : { quizNameTaken: true })),
          catchError(() => of(null)),
        ),
      ),
      first(),
    );
  };
}
