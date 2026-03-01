-- Create inquiries table for contact form submissions
CREATE TABLE public.inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public insert (anyone can submit a contact form)
CREATE POLICY "Allow public insert" ON public.inquiries
  FOR INSERT WITH CHECK (true);