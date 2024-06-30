export interface Meta {
  About: About;
}

export interface About {
  description: string;
  email: string | null;
  instagram: string | null;
  location: string | null;
  profile: Profile;
  jobdesk: string;
  title: string;
  backgroundHero: BackgroundHero;
}

export interface Profile {
  height: number;
  src: string;
  width: number;
}

export interface BackgroundHero {
  src: string;
}
