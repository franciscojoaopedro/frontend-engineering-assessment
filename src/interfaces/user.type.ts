

export interface User {
    cell: string;
    dob: DateOfBirth;
    email: string;
    gender: string;
    id: ID;
    location: Location;
    login: Login;
    name: Name;
    nat: string;
    phone: string;
    picture: Picture;
    registered: Registered;
  }
  
  interface DateOfBirth {
    age: number;
    date: string; 
  }
  
  interface ID {
    name: string;
    value: string;
  }
  
  interface Location {
    city: string;
    coordinates: Coordinates;
    country: string;
    postcode: number;
    state: string;
    street: Street;
    timezone: Timezone;
  }
  
  interface Coordinates {
    latitude: string;
    longitude: string;
  }
  
  interface Street {
    number: number;
    name: string;
  }
  
  interface Timezone {
    offset: string;
    description: string;
  }
  
  interface Login {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
  }
  
  interface Name {
    title: string;
    first: string;
    last: string;
  }
  
  interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
  }
  
  interface Registered {
    age: number;
    date: string; 
  }
  