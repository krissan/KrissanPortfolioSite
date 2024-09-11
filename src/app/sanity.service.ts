import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { createClient } from '@sanity/client';
import { environment } from '../environments/environment.prod';
import { from, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SanityService {
  private isBrowser: boolean;

  private client = createClient({
    projectId: environment.sanityProjectId,
    dataset: environment.dataset,
    useCdn: false,
    apiVersion: 'v1',
    withCredentials: true,
  });


  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  fetchData(query: string): Promise<any> {
    const baseUrl = this.isBrowser
    ? `/sanity-api/v1/data/query/${environment.dataset}`
    : `https://${environment.sanityProjectId}.apicdn.sanity.io/v1/data/query/${environment.dataset}`;

    const url = `${baseUrl}?query=${encodeURIComponent(query)}`;

    return fetch(url).then((res) => res.json());
  }

  fetchKnowledge():Observable<any> {
    const query = `*[_type == "knowledge"]`;
    return from(this.fetchData(query));
  }

  fetchCredential():Observable<any> {
    const query = `*[_type == "credential"]`;
    return from(this.fetchData(query));
  }

  fetchExperience(): Observable<any> {
    const query = `*[_type == "experience"]`;
    return from(this.fetchData(query));
  }

  fetchProject(): Observable<any> {
    const query = `*[_type == "project"]`;
    return from(this.fetchData(query));
  }

  fetchLanguage(): Observable<any> {
    const query = `*[_type == "language"]`;
    return from(this.fetchData(query));
  }

  fetchLeadership(): Observable<any> {
    const query = `*[_type == "leadership"]`;
    return from(this.fetchData(query));
  }
}
