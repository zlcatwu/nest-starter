export type APPConfig = {
  mode: Mode;
  serve: ServeConfig;
};

export type Mode = 'dev' | 'prod';

export type ServeConfig = {
  hostname: string;
  port: number;
};
