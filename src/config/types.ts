export type APPConfig = {
  mode: Mode;
  serve: ServeConfig;
  database: DBConfig;
};

export type Mode = 'dev' | 'prod';

export type ServeConfig = {
  hostname: string;
  port: number;
};

export type DBConfig = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
};
