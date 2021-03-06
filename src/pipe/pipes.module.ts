import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectActionValuePipe } from './select-action-value.pipe';
import { OperationPipe } from './operation.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SelectActionValuePipe,
    OperationPipe
  ],
  exports: [SelectActionValuePipe, OperationPipe]
})
export class PipesModule { }
