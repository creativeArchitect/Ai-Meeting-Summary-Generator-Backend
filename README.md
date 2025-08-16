## AI-Powered Meeting Notes Summarizer and Sharer

# Overview
- This web application helps users quickly summarize and share meeting transcripts. Users can upload .txt or .docx files, generate AI-powered summaries with custom instructions, and send the summaries via email. It simplifies reviewing long meetings and helps teams stay aligned.

# Approach & Process

1. Upload Transcript: Users upload a .txt or .docx file containing meeting notes.
2. Extract Text: The backend extracts plain text from the uploaded file.
3. Custom Prompt: Users can input instructions for summarization (e.g., bullet points, highlight action items).
4. Generate Summary: Backend sends the transcript and prompt to the OpenAI GPT-4o-mini API to generate a summary.
5. Display Summary: Summary is displayed in the frontend UI.
6. Share via Email: Users can input recipient email addresses to share the summary directly.

# Features

1. Upload .txt or .docx meeting transcripts
2. Preview transcript content (for .txt files)
3. Add custom summarization instructions
4. AI-powered summary generation
5. Send summary via email
6. Responsive UI with toast notifications for success/error messages

# Tech Stack
- Frontend: React, TypeScript, TailwindCSS, Axios
- Backend: Node.js, Express, TypeScript
- AI Service: OpenAI GPT-4o-mini API
- Email Service: Nodemailer with Gmail SMTP
- File Processing: Mammoth (for .docx)
- Deployment Options: Frontend (Vercel, Netlify), Backend (Railway, Render)