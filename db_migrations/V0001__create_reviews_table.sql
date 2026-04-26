CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  text TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);