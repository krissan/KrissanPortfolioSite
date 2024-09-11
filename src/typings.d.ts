import {defineArrayMember, defineField, defineType} from 'sanity'

export interface Credential {
  category: string;
  title: string;
  description: string;
  order: number;
}

export interface Experience {
  position: string;
  company: string;
  companyImage: SanityImage;
  startDate: Date;
  endDate: Date;
  description: Array<string>;
  skills: Array<string>;
}

export interface Knowledge {
  category: string;
  item: Item[];
  order: number;
}

export interface Language {
  language: string;
  level: string;
  langCharacter: string;
  speaking: boolean;
  reading: boolean;
  writing: boolean;
  order: number;
}

export interface Leadership {
  startDate: string;
  title: string;
  description: string;
  site?: string;
}

export interface Project {
  projectTitle: string;
  projectImage: SanityImage;
  startDate: string;
  endDate: string;
  description: string;
  site?: string;
  repo?: string;
  skills: string[];
}

export interface Item {
  label: string;
  alternative?: SanityImage;
  value?: IconPicker;
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  altText?: string;
}

interface IconPicker {
  provider: string;
  name: string;
}
