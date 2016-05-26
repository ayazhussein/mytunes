/**
 * Created by ayaz on 21/05/16.
 */
import {IUser} from './iuser';

export class User implements IUser{
    userName:string;
    email:string;
    password:string;
    country:string;
    birthday:Date;


    constructor(authData:any) {
        this.email = authData.password.email;
    }
    
}