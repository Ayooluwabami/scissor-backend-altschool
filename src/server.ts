import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5003;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
