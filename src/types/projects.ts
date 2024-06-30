export interface AllProjectsProps {
  allProjects: AllProjects;
}

export interface AllProjects {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  description: string;
  id: string;
  media: boolean;
  photo: Photo;
  title: string;
  youtube: string;
}

export interface Photo {
  height: number;
  src: string;
  width: number;
}
