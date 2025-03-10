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
  smallCardArticle: any;

  ngOnInit(): void {
    this.bigCardArticle = this.getRandomArticle();
    this.smallCardArticle = this.getRandomArticle(this.bigCardArticle?.id);
  }

  getRandomArticle(excludeId?: string): any {
    const availableArticles = dataFake.filter(article => article.id !== excludeId);
    if (availableArticles.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * availableArticles.length);
    return availableArticles[randomIndex];
  }
}
