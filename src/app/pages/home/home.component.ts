import { Component, OnInit } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { dataFake } from '../../data/dataFake';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
	bigCardArticle: any;
  smallCardArticles: any[] = [];

	ngOnInit(): void {
    this.bigCardArticle = this.getRandomArticle("github");
    this.smallCardArticles.push(this.getRandomArticle(undefined, this.bigCardArticle?.id));
    this.smallCardArticles.push(this.getRandomArticle(undefined, this.bigCardArticle?.id, ...this.smallCardArticles.map(article => article?.id)));
    this.smallCardArticles.push(this.getRandomArticle(undefined, this.bigCardArticle?.id, ...this.smallCardArticles.map(article => article?.id)));
  }

  getRandomArticle(type?: string, ...excludeIds: string[]): any {
    let availableArticles = dataFake;
    if (type) {
      availableArticles = availableArticles.filter(article => article.type === type);
    }
    availableArticles = availableArticles.filter(article => !excludeIds.includes(article.id));

    if (availableArticles.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * availableArticles.length);
    return availableArticles[randomIndex];
  }
}
