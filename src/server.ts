import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import errorHandler from '@/middleware/error.hnadler';
import { PORT } from '@/common/config';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
