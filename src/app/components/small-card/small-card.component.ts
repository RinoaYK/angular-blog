import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss',
})
export class SmallCardComponent {
  @Input()
  title: string = '';
  @Input()
  description: string = '';
  @Input()
  cover: string = '';
  @Input()
  alt: string = '';
  @Input()
  id: string = '';

}
