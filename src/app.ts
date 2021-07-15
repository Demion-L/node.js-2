import express, { Application } from 'express';
import { PORT } from './constants';
import {
  getFile,
  createFile,
  updateFile,
  removeFile,
} from './controllers/methods';
const app: Application = express();

app
  .route('/')
  .get(getFile)
  .post(createFile)
  .patch(updateFile)
  .delete(removeFile);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
