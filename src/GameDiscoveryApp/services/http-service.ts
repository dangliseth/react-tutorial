import apiClient from "./api-client";

interface Entity {
  id: number;
};

interface Parameters {
  ordering?: string,
  platforms?: string
}

interface Params {
  parameters?: Parameters
}

class httpService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>({ parameters }: Params) {
    const controller = new AbortController();

    const request = apiClient.get<T>(this.endpoint, {
      signal: controller.signal,
      params: {parameters}
    } );

    return { request, cancel: () => controller.abort() };
  };

  delete(id: number) {
    return apiClient.delete(`${this.endpoint}/${id}`);
  };

  add<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  };

  update<T extends Entity>(entity: T) {
    return apiClient.patch(`${this.endpoint}/${entity.id}`, entity);
  };
}

const create = (endpoint: string) => new httpService(endpoint);

export default create;
