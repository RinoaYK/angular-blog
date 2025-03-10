import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  title: string = "";
  description: string = "";
  cover: string = "";
  alt: string = "";
	link: string = "";
  private id: string | null = "0";

	constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
      if (this.id) {
        this.setValuesToComponent(this.id);
      } else {
        console.error("ID is null");
      }
    });
  }

  setValuesToComponent(id: string): void {
    const result = dataFake.find(article => article.id === id);

    if (result) {
      this.title = result.title;
			this.description = result.content_desciption
      	.split('\n')
      	.map(paragraph => `<p>${paragraph}</p>`)
      	.join('');
      this.cover = result.cover;
      this.alt = result.title;
			this.link = result.link;
    } else {
      console.error(`Article with id ${id} not found`);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
	goToLink(): void {
    window.open(this.link, '_blank');
  }
}
