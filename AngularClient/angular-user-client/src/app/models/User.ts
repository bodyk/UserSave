import { Gender } from "./Gender";

export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    gender: Gender;
}