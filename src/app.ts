import { PORT, app } from './constants';
import { getFile, createFile, updateFile, removeFile } from './controllers/methods';

app.route('/')
  .get(getFile)
  .post(createFile)
  .patch(updateFile)
  .delete(removeFile)

app.listen(PORT,() => {
  console.log(`Server running on port: ${PORT}`)
});