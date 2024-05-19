import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1/students', StudentRoutes);

const getAcontroller = (req: Request, res: Response) => {
  res.send('hello world!!');
};

app.get('/', getAcontroller);

console.log(process.cwd());
export default app;
