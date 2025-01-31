import { z } from 'zod';

// Signup schema
export const workspacesValidation = z.object({
  name: z.string().min(1, "Name must be at least 3 characters"),

});


