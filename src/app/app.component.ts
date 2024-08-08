import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { KnowledgeComponent } from './section/knowledge/knowledge.component';
import { ExperienceComponent } from './section/experience/experience.component';
import { ProjectsComponent } from './section/projects/projects.component';
import { EducationComponent } from './section/education/education.component';
import { LeadershipComponent } from './section/leadership/leadership.component';
import { LanguageComponent } from './section/language/language.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingComponent,KnowledgeComponent, ExperienceComponent, ProjectsComponent, EducationComponent, LeadershipComponent, LanguageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'KrissanPortfolioSite';
}
