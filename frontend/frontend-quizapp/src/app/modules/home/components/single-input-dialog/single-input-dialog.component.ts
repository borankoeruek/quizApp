import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-single-input-dialog',
  templateUrl: './single-input-dialog.component.html',
  styleUrl: './single-input-dialog.component.css',
})
export class SingleInputDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<SingleInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; inputLabel: string },
  ) {}

  public onClose(inputValue?: string): void {
    this.dialogRef.close(inputValue);
  }
}
