import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { dataFake } from '../../../assets/data/dataFake';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  imports: [RouterModule, CommonModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss', './content.component_media.scss'],
})
export class ContentComponent implements OnInit {
  title: string = '';
  description: string = '';
  cover: string = '';
  alt: string = '';
  link: string = '';
  private id: string | null = '0';
  github: string = '';
  type: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
      if (this.id) {
        this.setValuesToComponent(this.id);
      } else {
        this.router.navigate(['/error']);
      }
    });
  }

  setValuesToComponent(id: string): void {
    const result = dataFake.find((article) => article.id === id);

    if (result) {
      this.title = result.title;
      this.description = result.content_desciption
        .split('\n')
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join('');
      this.cover = result.cover;
      this.alt = result.title;
      this.link = result.link;
      this.type = result.type;
      this.github = result.github || '';
    } else {
      this.router.navigate(['/error']);
    }
  }

  goToLink(): void {
    if (this.link) {
      window.open(this.link, '_blank');
    }
  }

  goToGitHub(): void {
    if (this.github) {
      window.open(this.github, '_blank');
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
