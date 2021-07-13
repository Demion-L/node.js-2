
import express, {Application} from "express";
export const app: Application = express();
export const PORT: string | number = process.env.PORT || 3000;
export const file: string = 'input.txt';
export const encoding: string = 'utf-8';
export const type: string = 'text/plain';