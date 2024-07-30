import { CategoryType, LinksType } from "@/types";

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
    id : 1 , 
    name: "All", 
    active : true
  }, 

  {
    id : 2 , 
    name: "Art", 
    active : false
  }, 
  {
    id : 3 , 
    name: "Celebrities", 
    active : false
  }, 
  {
    id : 4 , 
    name: "Gaming", 
    active : false
  },
  {
    id : 5 , 
    name: "Sport", 
    active : false
  },  
]