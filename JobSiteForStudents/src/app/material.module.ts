import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatGridListModule,
  MatSnackBarModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,

    MatToolbarModule,

    MatButtonModule,
    
    MatCardModule,

    MatInputModule,

    MatDialogModule,

    MatTableModule,

    MatMenuModule,

    MatIconModule,

    MatListModule,

    MatGridListModule,

    MatProgressSpinnerModule,
    
    MatSnackBarModule
  ],

  exports: [
    CommonModule,

    MatToolbarModule,

    MatButtonModule,

    MatCardModule,

    MatInputModule,

    MatDialogModule,

    MatTableModule,

    MatMenuModule,

    MatIconModule,

    MatListModule,
    
    MatGridListModule,

    MatProgressSpinnerModule,

    MatSnackBarModule
  ]
})
export class CustomMaterialModule {}
