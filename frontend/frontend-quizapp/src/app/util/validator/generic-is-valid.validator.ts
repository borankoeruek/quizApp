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

export function genericAsyncValidator(
  fn: (value: string) => Observable<{ isValid: boolean }>,
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      console.log('control', control);
      return of(null); // If there's no value, consider it valid
    }

    return control.valueChanges.pipe(
      debounceTime(300), // Add debounce time to limit API calls
      switchMap((value) =>
        fn(value).pipe(
          map((valid) => (valid.isValid ? null : { quizNameTaken: true })), // Adjust logic here
          catchError(() => of(null)), // In case of error, consider the value valid
        ),
      ),
      first(), // Ensure that the observable completes after the first value is emitted
    );
  };
}
