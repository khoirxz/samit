export interface AboutProps {
  descriptionAbout: DescriptionAbout;
}

export interface DescriptionAbout {
  json: Json;
}

export interface Json {
  content: Content[];
  type: string;
}

export interface Content {
  attrs: Attrs;
  content: Content2[];
  type: string;
}

export interface Attrs {
  textAlign: string;
}

export interface Content2 {
  text: string;
  type: string;
}
