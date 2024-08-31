export interface AllExperienceProps {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  description: string;
  id: string;
  name: string;
  year: string;
}
