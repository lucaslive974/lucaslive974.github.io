import type { GithubRepo } from '../../domain/entities/GithubRepo';
import type { IHttpClient } from '../../domain/interfaces/IHttpClient';
import type { IGithubService } from '../../domain/interfaces/IGithubService';

export class GithubService implements IGithubService {
  private httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.httpClient = httpClient;
  }

  async getRepositories(username: string): Promise<GithubRepo[]> {
    const response = await this.httpClient.get<GithubRepo[]>(
      `https://api.github.com/users/${username}/repos?per_page=100`
    );
    
    return response.data
      .filter((repo) => !repo.fork)
      .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
  }
}
