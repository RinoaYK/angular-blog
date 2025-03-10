import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
	@Input()
	title: string = "";
	@Input()
	description: string = "";
	@Input()
	cover: string = "";
	@Input()
	alt: string = "";
	@Input()
	id: string = "";
}
