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
  MatDividerModule,
  MatListModule
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

    MatProgressSpinnerModule,

    MatDividerModule,

    MatListModule
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

    MatProgressSpinnerModule,

    MatDividerModule,

    MatListModule
  ]
})
export class CustomMaterialModule {}
