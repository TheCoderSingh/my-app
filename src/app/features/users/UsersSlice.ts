// src/redux/slices/mockDataSlice.ts

import { createSlice } from '@reduxjs/toolkit';
import { users } from '@/src/utils/mockData';

interface Education {
  school: string;
  degree: string;
}

export interface User {
  email: string;
  password: string;
  name: string;
  gender: string;
  location: string;
  hometown: string;
  website: string | null;
  role: string;
  currentTitle: string;
  previousTitles: string[];
  yearsOfExperience: number;
  currentCompany: string;
  previousCompanies: string[];
  industries: string[];
  events: string[];
  education: Education[];
  skills: string[];
  techStack: string[];
  bio: string;
  connectionPreferences: string[];
  learningGoals: string[];
  githubUrl: string | null;
  linkedinUrl: string | null;
}

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: users, // Import your mock data here
  },
  reducers: {
    // Add reducers here if needed later
  },
});

export default usersSlice.reducer;
