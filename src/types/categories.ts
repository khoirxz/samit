export interface AllCategoriesProps {
  allProjects: AllProjects;
}

export interface AllProjects {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  categories: string;
}
