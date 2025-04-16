
-- Create contact messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Set up Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert messages
CREATE POLICY "Anyone can submit a contact message" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

-- Create policy that only allows admins (in the future) to read messages
CREATE POLICY "Only admins can read messages" ON public.contact_messages
  FOR SELECT USING (false);

-- Create events table
CREATE TABLE IF NOT EXISTS public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Set up Row Level Security
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Anyone can read events
CREATE POLICY "Anyone can read events" ON public.events
  FOR SELECT USING (true);
