import type { IHttpClient } from '../../domain/interfaces/IHttpClient';
import type { IHttpResponse } from '../../domain/interfaces/IHttpResponse';

export class FetchHttpClient implements IHttpClient {
  async get<T>(url: string): Promise<IHttpResponse<T>> {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return {
      data,
      status: response.status,
    };
  }
}
