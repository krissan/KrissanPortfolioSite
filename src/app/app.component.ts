import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { KnowledgeComponent } from './section/knowledge/knowledge.component';
import { ExperienceComponent } from './section/experience/experience.component';
import { ProjectComponent } from './section/project/project.component';
import { CredentialComponent } from './section/credential/credential.component';
import { LeadershipComponent } from './section/leadership/leadership.component';
import { LanguageComponent } from './section/language/language.component';
import { SanityService } from './sanity.service';
import { Experience, Knowledge, Language, Leadership, Project, Credential, Item } from '../typings';
import { catchError, concatMap, of, Subject, takeUntil, tap } from 'rxjs';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { IconService } from './general/icon/icon.service';
import { UtilService } from './general/util/util.service';
import { ContactComponent } from './section/contact/contact.component';
import AOS from "aos";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingComponent,KnowledgeComponent, ExperienceComponent, ProjectComponent, CredentialComponent, LeadershipComponent, LanguageComponent, ContactComponent],
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

  constructor(private sanityService: SanityService, private iconService: IconService, private utilService: UtilService, @Inject(PLATFORM_ID) private platformId: Object) {}

  async ngOnInit(): Promise<void> {
    await this.loadData();
    if (isPlatformBrowser(this.platformId)) {
      this.initAOS();
    }
  }

  initAOS(): void {
    AOS.init();
  }

  async loadData(): Promise<void> {
    // Sequentially load all datasets
    this.sanityService.fetchKnowledge().pipe(
      tap(async data => {
        this.knowledge = this.utilService.customSort(data.result,'order');
        const icons = this.knowledge.flatMap(category => category.item);
        await this.iconService.addIconList(icons);
        this.isLoadingKnowledge = false;
      }),
      concatMap(() => this.sanityService.fetchExperience()),
      tap(data => {
        this.experiences = this.utilService.customSort(data.result,'startDate');
        this.isLoadingExperience = false;
      }),
      concatMap(() => this.sanityService.fetchCredential()),
      tap(data => {
        this.credentials = this.utilService.customSort(data.result,'order');
        this.isLoadingCredential = false;
      }),
      concatMap(() => this.sanityService.fetchProject()),
      tap(data => {
        this.projects = this.utilService.customSort(data.result,'startDate');
        this.isLoadingProject = false;
      }),
      concatMap(() => this.sanityService.fetchLeadership()),
      tap(data => {
        this.leadership = this.utilService.customSort(data.result,'startDate');
        this.isLoadingLeadership = false;
      }),
      concatMap(() => this.sanityService.fetchLanguage()),
      tap(data => {
        this.languages = this.utilService.customSort(data.result,'order');
        this.isLoadingLanguage = false;
      }),
      catchError(err => {
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
