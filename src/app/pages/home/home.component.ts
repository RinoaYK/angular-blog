import { Component, OnInit } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { dataFake } from '../../../assets/data/dataFake';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, SmallCardComponent, CommonModule, TitleComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.component_media.scss'],
})
export class HomeComponent implements OnInit {
  bigCardArticle: any;
  smallCardArticles: any[] = [];

  ngOnInit(): void {
    this.bigCardArticle = this.getRandomArticle('github');
    this.smallCardArticles.push(
      this.getRandomArticle(undefined, this.bigCardArticle?.id)
    );

    for (let i = 0; i < 3; i++) {
      this.smallCardArticles.push(
        this.getRandomArticle(
          undefined,
          this.bigCardArticle?.id,
          ...this.smallCardArticles.map((article) => article?.id)
        )
      );
    }
  }

  getRandomArticle(type?: string, ...excludeIds: string[]): any {
    let availableArticles = dataFake;
    if (type) {
      availableArticles = availableArticles.filter(
        (article) => article.type === type
      );
    }
    availableArticles = availableArticles.filter(
      (article) => !excludeIds.includes(article.id)
    );

    if (availableArticles.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * availableArticles.length);
    return availableArticles[randomIndex];
  }
}
