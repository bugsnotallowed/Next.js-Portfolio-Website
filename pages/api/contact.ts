import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost', // Your database host
  user: 'your_username', // Your database username
  password: 'your_password', // Your database password
  database: 'your_database', // Your database name
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      const connection = await mysql.createConnection(dbConfig);
      const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
      await connection.execute(query, [name, email, message]);
      await connection.end();

      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;