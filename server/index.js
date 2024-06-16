import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { createAssistant } from './services/openai.service.js';

dotenv.config();

import menuRoutes from './routes/menu.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';


const app = express();
const PORT = process.env.PORT || 8000;
const URI = process.env.DATABASE_URL;
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

(async () => {
    app.use('/auth', authRoutes);

    app.use(userRoutes);

    app.use(menuRoutes);

    const assistant = await createAssistant(openai);
    app.get("/start", async (req, res) => {
      const thread = await openai.beta.threads.create();
      return res.json({ thread_id: thread.id });
    });
  
    app.post("/chat", async (req, res) => {
      const assistantId = assistant.id;
      const threadId = req.body.thread_id;
      const message = req.body.message;
      if (!threadId) {
        return res.status(400).json({ error: "Missing thread_id" });
      }
      console.log(`Received message: ${message} for thread ID: ${threadId}`);
      await openai.beta.threads.messages.create(threadId, {
        role: "user",
        content: message,
      });
      const run = await openai.beta.threads.runs.createAndPoll(threadId, {
        assistant_id: assistantId,
      });
      const messages = await openai.beta.threads.messages.list(run.thread_id);
      const response = messages.data[0].content[0].text.value;
      return res.json({ response });
    });
  
  })();

mongoose.connect(URI)
    .then(() => {
        console.log('CONNECTED!');
        app.listen(PORT);
    })
    .catch(err => console.log(err));
