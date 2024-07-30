import { ReactNode } from "react";

export type LinksType = {
  id: number;
  name: string;
  link: string;
};

export type CollectionType = {
  id: number;
  image: string;
  name: string;
  amount: number;
};

export type CategoryType = {
  id: number;
  name: string;
  active: boolean;
};

export type ServiceType = {
  id: number;
  icon: string;
  title: string;
  body: string;
};
