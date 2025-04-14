import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ETheme } from '../enums/ETheme.enum';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [MatSlideToggleModule, MatButtonModule, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.component_media.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('modeSwitch', { read: ElementRef }) element:
    | ElementRef
    | undefined;

  public isDarkMode: boolean = true;
  public icon: string = ETheme.ICON_MOON;

  public toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = document.body.classList.toggle('light-theme');
    this.icon = theme ? ETheme.ICON_SUN : ETheme.ICON_MOON;
  }

  public getTooltipText(): string {
    return this.isDarkMode ? 'Dark' : 'Light';
  }

  ngAfterViewInit() {
    if (this.element) {
      this.element.nativeElement
        .querySelector('.mdc-switch__icon--on')
        .firstChild.setAttribute('d', ETheme.TOGGLE_SUN);
      this.element.nativeElement
        .querySelector('.mdc-switch__icon--off')
        .firstChild.setAttribute('d', ETheme.TOGGLE_MOON);
    }
  }
}
