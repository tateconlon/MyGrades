import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-assn-dialogue',
  templateUrl: './assn-dialogue.component.html',
  styleUrls: ['./assn-dialogue.component.css']
})

export class AssnDialogueComponent {

	constructor(private dialog: MatDialog) {}

    openDialog() {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(AssnDialogueComponent, dialogConfig);
	}

}