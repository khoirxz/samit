export interface AllServicesProps {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  icon: Icon;
  id: string;
  shortDescription: string;
  title: string;
}

export interface Icon {
  id: string;
  src: string;
  title: string;
}
