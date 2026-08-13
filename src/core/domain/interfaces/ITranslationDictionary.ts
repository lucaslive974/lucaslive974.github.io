export interface ITranslationDictionary {
  nav: {
    experience: string;
    skills: string;
    projects: string;
    repos: string;
    about: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
  };
  experience: {
    title: string;
    oss: {
      title: string;
      role: string;
      period: string;
      description: string;
    };
    work: {
      title: string;
      role: string;
      period: string;
      description: string;
    };
  };
  skills: {
    title: string;
    proficient: string;
    familiar: string;
    advancedGitTitle: string;
    advancedGitDesc: string;
    dockerTitle: string;
    dockerDesc: string;
  };
  projects: {
    title: string;
    items: {
      orionGl: {
        name: string;
        description: string;
        features: string[];
        todo: string;
        url: string;
        tags: string[];
      };
      bonfire: {
        name: string;
        description: string;
        features: string[];
        todo: string;
        tags: string[];
      };
      gaia: {
        name: string;
        description: string;
        features: string[];
        todo: string;
        url: string;
        tags: string[];
      };
      codeX: {
        name: string;
        description: string;
        tags: string[];
      };
    };
  };
  repos: {
    title: string;
    viewOnGithub: string;
  };
  about: {
    title: string;
    education: string;
    personal: string;
  };
}
