import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  createdAt: Date;
}

export async function getUsers(
  search: string,
  offset: number
): Promise<{
  users: User[];
  newOffset: number | null;
}> {
  const searchCondition = search ? `WHERE name LIKE ?` : '';
  const searchParam = search ? [`%${search}%`] : [];
  
  const [rows] = await connection.execute(
    `SELECT * FROM users ${searchCondition} LIMIT 1000`,
    searchParam
  );

  if (offset === null) {
    return { users: rows as User[], newOffset: null };
  }

  const [moreUsers] = await connection.execute(
    `SELECT * FROM users LIMIT 20 OFFSET ${offset}`
  );

  const newOffset = (moreUsers as User[]).length >= 20 ? offset + 20 : null;
  return { users: moreUsers as User[], newOffset };
}

export async function deleteUserById(id: number) {
  await connection.execute(
    `DELETE FROM users WHERE id = ?`,
    [id]
  );
}

export async function getUsernameById(id: number): Promise<string | null> {
  const [rows] = await connection.execute(
    `SELECT username FROM users WHERE id = ?`,
    [id]
  );
  const result = rows as { username: string }[];
  return result.length > 0 ? result[0].username : null;
}
