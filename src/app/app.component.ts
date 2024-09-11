import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { KnowledgeComponent } from './section/knowledge/knowledge.component';
import { ExperienceComponent } from './section/experience/experience.component';
import { ProjectComponent } from './section/project/project.component';
import { CredentialComponent } from './section/credential/credential.component';
import { LeadershipComponent } from './section/leadership/leadership.component';
import { LanguageComponent } from './section/language/language.component';
import { SanityService } from './sanity.service';
import { Experience, Knowledge, Language, Leadership, Project, Credential } from '../typings';
import { catchError, concatMap, of, Subject, takeUntil, tap } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingComponent,KnowledgeComponent, ExperienceComponent, ProjectComponent, CredentialComponent, LeadershipComponent, LanguageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'KrissanPortfolioSite';
  knowledge: Knowledge[] = [];
  experiences: Experience[] = [];
  credentials: Credential[] = [];
  projects: Project[] = [];
  leadership: Leadership[] = [];
  languages: Language[] = [];

  isLoadingKnowledge = true;
  isLoadingExperience = true;
  isLoadingCredential = true;
  isLoadingProject = true;
  isLoadingLeadership = true;
  isLoadingLanguage = true;

  error: string | null = null;

  private destroy = new Subject<void>();

  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    console.log("start");
    // Sequentially load all datasets
    this.sanityService.fetchKnowledge().pipe(
      tap(data => {
        console.log(data);
        this.knowledge = data.result;
        this.isLoadingKnowledge = false;
      }),
      concatMap(() => this.sanityService.fetchExperience()),
      tap(data => {
        this.experiences = data;
        this.isLoadingExperience = false;
      }),
      concatMap(() => this.sanityService.fetchCredential()),
      tap(data => {
        this.credentials = data;
        this.isLoadingCredential = false;
      }),
      concatMap(() => this.sanityService.fetchProject()),
      tap(data => {
        this.projects = data;
        this.isLoadingProject = false;
      }),
      concatMap(() => this.sanityService.fetchLeadership()),
      tap(data => {
        this.leadership = data;
        this.isLoadingLeadership = false;
      }),
      concatMap(() => this.sanityService.fetchLanguage()),
      tap(data => {
        this.languages = data;
        this.isLoadingLanguage = false;
      }),
      catchError(err => {
        console.log(err);
        this.error = 'Failed to load data';
        this.isLoadingKnowledge = this.isLoadingExperience = this.isLoadingCredential = this.isLoadingProject = this.isLoadingLeadership = this.isLoadingLanguage = false;
        return of(null);
      }),
      takeUntil(this.destroy)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
