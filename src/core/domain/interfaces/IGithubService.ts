import type { GithubRepo } from '../entities/GithubRepo';

export interface IGithubService {
  getRepositories(username: string): Promise<GithubRepo[]>;
}
