import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-single-input-dialog',
  templateUrl: './single-input-dialog.component.html',
  styleUrl: './single-input-dialog.component.css',
})
export class SingleInputDialogComponent implements OnInit {
  @Input()
  public title: string;

  @Input()
  public inputLabel: string;

  @Output()
  public outputInput: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dialog: MatDialog) {}

  public closeDialog(): void {
    this.dialog.closeAll();
  }

  public ngOnInit(): void {}
}
