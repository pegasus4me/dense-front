// safe base structure
export interface IdataType {
    id?: string,
    safeName: string,
    description: string,
    amountToReach: number,
    category: string,
    readonly emitter?: string,
    reached?: boolean, 
    currentBalance?: number
}

export type Role = "admin" | "user"
// user base structure
export interface IuserType {
    name : string,
    readonly wallet? : string,
    profilePic? : string,
    role : Role
}

export interface ApiUserStrucure {
    POST<T extends  IuserType>(args? :T | T[]): Promise<IuserType | any | undefined >;
    GET<T>(args? : T | T[]): Promise<any | undefined | IuserType>;
    PUT<T extends IuserType>(args? : T): Promise<IuserType | any | undefined>;
    DELETE<T>(args? : T): Promise<any | undefined>;
}


export interface ApiAuthStrucure {
    POST<T extends IdataType | IuserType>(args? :T | T[]): Promise<IdataType | any | undefined | IuserType>;
    POST<T extends IdataType | IuserType>(args? :T | T[]): Promise<IdataType | any | undefined | IuserType>;    
    GET<T>(args? : T): Promise<IdataType | any | undefined | IuserType>;
    PUT<T>(args? : T): Promise<any | undefined>;
    DELETE<T>(args? : T): Promise<any | undefined>;
}


