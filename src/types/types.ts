export type PopupConfig = {
  title?: string;
  children: React.ReactNode;
};

export interface UserData {
  _id: string;
  name: string;
  about: string;
  avatar: string;
}

export interface CardData {
  _id: string;
  name: string;
  link: string;
  owner: string;
  createdAt: string;
  isLiked: boolean;
}

export interface UserFormData {
  name: string;
  about: string;
}

export interface AvatarFormData {
  avatar: string;
}

export interface CardFormData {
  name: string;
  link: string;
}

export interface CurrentUserContextType {
  currentUser: UserData | null;
  handleUpdateUser: (data: UserFormData) => void;
  handleUpdateAvatar: (data: AvatarFormData) => void;
  handleAddPlaceSubmit: (data: CardFormData) => void;
}
