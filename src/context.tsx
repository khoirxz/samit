import React, { useState, createContext, ReactNode } from "react";
import { gql, GraphQLClient } from "graphql-request";
import { Meta } from "./types/meta";
import { AllProjectsProps } from "./types/projects";
import { AllServicesProps } from "./types/services";
import { AllSkillProps } from "./types/skills";
import { AllExperienceProps } from "./types/experience";
import { AllContactProps } from "./types/contact";
import { AboutProps } from "./types/about";

const client = new GraphQLClient(
  `https://cloud.caisy.io/api/v3/e/${import.meta.env.VITE_PROJECT_ID}/graphql`,
  {
    headers: {
      "x-caisy-apikey": import.meta.env.VITE_API_ID,
    },
  }
);

export interface getAboutPage {
  allServices: AllServicesProps;
  allSkill: AllSkillProps;
  allExperience: AllExperienceProps;
  allContact: AllContactProps;
  About: AboutProps;
}

export interface ContextProps {
  meta: Meta;
  projects: AllProjectsProps;
  getMeta: () => Promise<void>;
  getAllProjects: () => Promise<void>;
  getAllAbout: getAboutPage;
  getAllAboutPage: () => Promise<void>;
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
  getAllAbout: {
    allContact: {
      edges: [],
    },
    allExperience: {
      edges: [],
    },
    allServices: {
      edges: [],
    },
    allSkill: {
      edges: [],
    },
    About: {
      descriptionAbout: {
        json: {
          content: [],
          type: "",
        },
      },
    },
  },
  getAllAboutPage: async () => {},
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
  const [getAllAbout, setGetAllAbout] = useState<getAboutPage>({
    allServices: { edges: [] },
    allContact: { edges: [] },
    allExperience: { edges: [] },
    allSkill: { edges: [] },
    About: { descriptionAbout: { json: { content: [], type: "" } } },
  });

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
              categories
              media
              title
              links
              media
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

  const getAllAboutPage = async () => {
    const gqlResponse: getAboutPage = await client.request(
      gql`
        query getAllServices {
          About {
            descriptionAbout {
              json
            }
          }
          allServices {
            edges {
              node {
                id
                shortDescription
                title
                icon {
                  id
                  src
                  title
                }
              }
            }
          }
          allSkill {
            edges {
              node {
                name
                id
                icon {
                  src
                  title
                }
              }
            }
          }
          allExperience {
            edges {
              node {
                description
                id
                name
                year
              }
            }
          }
          allContact {
            edges {
              node {
                title
                link
                id
                icon {
                  title
                  src
                }
              }
            }
          }
        }
      `
    );

    setGetAllAbout(gqlResponse);
  };

  return (
    <DataContext.Provider
      value={{
        meta,
        getMeta,
        projects,
        getAllProjects,
        getAllAboutPage,
        getAllAbout,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export { ContextProvider, DataContext };
