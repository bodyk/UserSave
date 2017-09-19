import { Gender } from "./Gender";

export interface User {
    Id: number;
    Name: string;
    Surname: string;
    Email: string;
    Gender: Gender;
}