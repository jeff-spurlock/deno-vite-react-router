-- Create example table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert some example data
INSERT INTO users (username, email) VALUES
    ('john_doe', 'john@example.com'),
    ('jane_doe', 'jane@example.com')
ON CONFLICT (username) DO NOTHING; 