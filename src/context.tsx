import React, { useState, createContext, ReactNode } from "react";
import { gql, GraphQLClient } from "graphql-request";
import { Meta } from "./types/meta";
import { AllProjectsProps } from "./types/projects";

const client = new GraphQLClient(
  `https://cloud.caisy.io/api/v3/e/${import.meta.env.VITE_PROJECT_ID}/graphql`,
  {
    headers: {
      "x-caisy-apikey": import.meta.env.VITE_API_ID,
    },
  }
);

export interface ContextProps {
  meta: Meta;
  projects: AllProjectsProps;
  getMeta: () => Promise<void>;
  getAllProjects: () => Promise<void>;
}

const DataContext = createContext<ContextProps>({
  meta: {
    About: {
      jobdesk: "",
      description: "",
      email: null,
      instagram: null,
      location: null,
      backgroundHero: {
        src: "",
      },
      title: "",
      profile: {
        width: 0,
        src: "",
        height: 0,
      },
    },
  },
  projects: {
    allProjects: {
      edges: [],
    },
  } as AllProjectsProps,
  getMeta: async () => {},
  getAllProjects: async () => {},
});

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [meta, setMeta] = useState<Meta>({
    About: {
      description: "",
      jobdesk: "",
      email: null,
      instagram: null,
      location: null,
      title: "",
      backgroundHero: {
        src: "",
      },
      profile: {
        width: 0,
        src: "",
        height: 0,
      },
    },
  });
  const [projects, setProjects] = useState<AllProjectsProps>({
    allProjects: {
      edges: [],
    },
  } as AllProjectsProps);

  const getMeta = async () => {
    const gqlResponse: Meta = await client.request(gql`
      query getMetaInfo {
        About {
          description
          email
          instagram
          location
          jobdesk
          title
          backgroundHero {
            src
          }
          profile {
            width
            src
            height
          }
        }
      }
    `);
    setMeta(gqlResponse);
  };

  const getAllProjects = async () => {
    const gqlResponse: AllProjectsProps = await client.request(gql`
      query getProjects {
        allProjects {
          edges {
            node {
              description
              id
              media
              title
              youtube
              photo {
                height
                width
                src
              }
            }
          }
        }
      }
    `);
    setProjects(gqlResponse);
  };

  return (
    <DataContext.Provider value={{ meta, getMeta, projects, getAllProjects }}>
      {children}
    </DataContext.Provider>
  );
};

export { ContextProvider, DataContext };
