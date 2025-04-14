import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './small-card.component.html',
  styleUrls: [
    './small-card.component.scss',
    './small-card.component_media.scss',
  ],
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
