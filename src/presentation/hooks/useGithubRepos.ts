import { useState, useEffect } from 'react';
import type { GithubRepo } from '../../core/domain/entities/GithubRepo';
import { FetchHttpClient } from '../../core/infrastructure/http/FetchHttpClient';
import { GithubService } from '../../core/infrastructure/services/GithubService';

export const useGithubRepos = (username: string) => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const httpClient = new FetchHttpClient();
        const githubService = new GithubService(httpClient);
        const data = await githubService.getRepositories(username);
        setRepos(data);
      } catch (err) {
        setIsError(true);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading, isError, error };
};
