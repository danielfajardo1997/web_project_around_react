import type {
  UserData,
  CardData,
  UserFormData,
  AvatarFormData,
  CardFormData,
} from '../types/types';

const BASE_URL = 'https://around-api.es.tripleten-services.com/v1';
const AUTHORIZATION_TOKEN = 'b176338a-7293-4b08-9ce0-a70c0fd452c5';

class Api {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor(baseUrl: string, headers: Record<string, string>) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: this.headers,
    });

    if (!response.ok) {
      return Promise.reject(`Error ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }

  getUserInfo(): Promise<UserData> {
    return this.request<UserData>('/users/me');
  }

  getInitialCards(): Promise<CardData[]> {
    return this.request<CardData[]>('/cards');
  }

  updateUserInfo(data: UserFormData): Promise<UserData> {
    return this.request<UserData>('/users/me', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  updateAvatar(data: AvatarFormData): Promise<UserData> {
    return this.request<UserData>('/users/me/avatar', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  addCard(data: CardFormData): Promise<CardData> {
    return this.request<CardData>('/cards', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  deleteCard(cardId: string): Promise<void> {
    return this.request<void>(`/cards/${cardId}`, {
      method: 'DELETE',
    });
  }

  addLike(cardId: string): Promise<CardData> {
    return this.request<CardData>(`/cards/likes/${cardId}`, {
      method: 'PUT',
    });
  }

  removeLike(cardId: string): Promise<CardData> {
    return this.request<CardData>(`/cards/likes/${cardId}`, {
      method: 'DELETE',
    });
  }
}

const api = new Api(BASE_URL, {
  authorization: AUTHORIZATION_TOKEN,
  'Content-Type': 'application/json',
});

export default api;
