/*
  타입 알리아스({}) - 데이터를 묘사할때 사용

  인터페이스(= {}) - 데이터를 포괄하는 객체를 묘사할때 사용
                     클래스 묘사할때 사용
*/

export type YesOrNo = 'Y' | 'N';
export type DayOfWeek = '월' | '화' | '수' | '목' | '금' | '토' | '일'
export enum DayOfTheWeek {'월', '화', '수', '목', '금', '토', '일'}

export type Name = string;
export type Email = string;
export type FooFuntion = () => string;

export interface IUser {
  readonly id:  number;
  readonly name: Name;
  email: string;
  receiveInfo: boolean;
  active: YesOrNo;
  // address? : string;
  // }
}

// 인터페이스는 분리하여 작성하여도 포함된다.
export interface IUser {
  address? : string;
}

export type TUser = {
  readonly id : number;
  readonly name: Name;
  email: string;
  receiveInfo: boolean;
  active: YesOrNo;
  address? : string;
}

// 타입알리아스는 중복 선언 안됨
// export type TUser = {
//   address? : string;
// }


// 인터페이스 extends 상속 IUser / TUser 둘다 가능
export interface IUserProfile extends TUser {
  // readonly id:  number;
  // readonly name: Name;
  // email: string;
  // receiveInfo: boolean;
  // active: YesOrNo;
  // address? : string;

  profileImage: string;
  github?: string;
  twitter?: string;
}

// 타입알리아스 = ~~~ & 상속 IUser / TUser 둘다 가능
export type TUserProfile = IUser & {
  // readonly id:  number;
  // readonly name: Name;
  // email: string;
  // receiveInfo: boolean;
  // active: YesOrNo;
  // address? : string;

  profileImage: string;
  github?: string;
  twitter?: string;
}


export interface Color {
  fontColor: string;
  strokeColor: string;
  borderColor: string;
  backgroundColor: string;
}

export type Display = {
  display: 'none' | 'block';
  visiblity: boolean;
  opacity: number;
}

export type Geometry = {
  width: number;
  height: number;
  padding: number;
  margin: number;
}

export interface IStyle extends Color, Display, Geometry {
  tagName: string;
}

export type TStyle = Color & Display & Geometry & {
  tagName: string;
}

export interface IOnlyNumberValueObject {
  [key: string] : boolean
}

export type TOnlyNumberValueObject = {
  [key: string] : boolean
}

export interface IGetApi {
  (url: string, search?: string) : Promise<string>;
}

export type TGetApi = {
  (url: string, search?: string) : Promise<string>;
}

export interface IRect {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
}
