import path from 'path';
import fs from 'fs-extra';
import yaml from 'js-yaml';
import { rootPath } from '@utils';
import type { APPConfig } from './types';

const configFilepath = path.resolve(rootPath, 'config.yaml');

let config: APPConfig | null = null;
export const getConfig = (): APPConfig => {
  if (config) {
    return config;
  }
  config = yaml.load(fs.readFileSync(configFilepath, 'utf-8')) as APPConfig;
  return config;
};
