export type Country = {
    name: string;
    code: string;
    dialCode: string;
  };
  
  export type User = {
    id: string;
    name: string;
    email: string;
    phone: string;
    country: string;
    password: string;
    avatar: string;
    role: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export type Home = {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    type: string;
    image: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export type Offer = {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    type: string;
    image: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export type Request = {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    type: string;
    image: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export type Skill = {
    name: string;
    id: string;
    aka?: { [key: string]: string };
    specialty: SkillSpecialty[];
    competence: SkillCompetence[];
    tags: string;
  };
  
  export type SkillSpecialty = {
    id: number;
    name: string;
  };
  
  export type SkillCompetence = {
    name: string;
    rating: number;
    showFor?: number[];
    id: number;
  };
  
  export type Message = {
    id: string;
    content: string;
    sender: string;
    receiver: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export type Notification = {
    id: string;
    title: string;
    description: string;
    type: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export type UserRole = {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export type UserStatus = {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export type UserSkill = {
    id: string;
    userId: string;
    skillId: string;
    rating: number;
    createdAt: string;
    updatedAt: string;
  };
  
  export type UserHome = {
    id: string;
    userId: string;
    homeId: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export type UserOffer = {
    id: string;
    userId: string;
    offerId: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export type UserRequest = {
    id: string;
    userId: string;
    requestId: string;
    createdAt: string;
    updatedAt: string;
  };
  export type UserNotification = {
    id: string;
    userId: string;
    notificationId: string;
    createdAt: string;
    updatedAt: string;
  };
    export type UserMessage = {
        id: string;
        userId: string;
        messageId: string;
        createdAt: string;
        updatedAt: string;
    };