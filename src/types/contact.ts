export interface AllContactProps {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  icon: Icon;
  id: string;
  link: string;
  title: string;
}

export interface Icon {
  src: string;
  title: string;
}
