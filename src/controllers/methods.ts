import {Request, Response} from "express";
import fs from "fs";
import {encoding, file, type} from "../constants";
import ErrnoException = NodeJS.ErrnoException;

export const getFile = (req: Request, res: Response) => {
    fs.readFile(file, encoding, (err: ErrnoException | null, data: string) => {
      if (err) return console.error(err);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    });
};

export const createFile = (req: Request, res: Response) => {
    const message: string = 'Hello World!';
    fs.writeFile(file, message, (err: ErrnoException | null) =>{
      if (err) console.error(err);
      res.end();
    });
};

export const updateFile = (req: Request, res: Response) => {
  const additionalData: string = 'Hello, Node.js!!!';
    fs.access(file, (err) => {
      if (err) {
        console.error(err);
        return null;
      }
      fs.appendFile(file, additionalData, function (): void {
        if (err) console.error(err);
        res.end();
      });
    });
    res.status(404).type(type)
    res.send('Not found')
};
export const removeFile = (req: Request, res: Response) => {
    fs.unlink(file,  (err: ErrnoException | null) => {
      if (err) {
        res.writeHead(404, 'File not found');
        res.write(err);
        res.end();
        console.error(err);
      }
      res.end();
    });
};