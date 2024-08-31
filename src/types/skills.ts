export interface AllSkillProps {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  icon: Icon;
  id: string;
  name: string;
}

export interface Icon {
  src: string;
  title: string;
}
