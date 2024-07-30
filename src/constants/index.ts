import { CategoryType, CollectionType, LinksType } from "@/types";

export const links: LinksType[] = [
  {
    id: 1,
    name: "Home",
    link: "",
  },
  {
    id: 2,
    name: "Top Sales",
    link: "",
  },
  {
    id: 3,
    name: "Collections",
    link: "",
  },
  {
    id: 4,
    name: "Our Blog",
    link: "",
  },
  {
    id: 5,
    name: "About Us",
    link: "",
  },
];

export const categories: CategoryType[] = [
  {
    id: 1,
    name: "All",
    active: true,
  },

  {
    id: 2,
    name: "Art",
    active: false,
  },
  {
    id: 3,
    name: "Celebrities",
    active: false,
  },
  {
    id: 4,
    name: "Gaming",
    active: false,
  },
  {
    id: 5,
    name: "Sport",
    active: false,
  },
];


export const collections : CollectionType[] = [
  {
    id : 1 , 
    image: '/collection-1.svg', 
    name : 'CyberPunk', 
    amount : 68, 
  },
  {
    id : 2 , 
    image: '/collection-2.svg', 
    name : 'Durolost Boll - Upper', 
    amount : 68, 
  },
  {
    id : 3 , 
    image: '/collection-3.svg', 
    name : 'Space X Wiper ', 
    amount : 68, 
  },
  {
    id : 4 , 
    image: '/snoop-4.svg', 
    name : 'Snoop Dog', 
    amount : 68, 
  }
]
