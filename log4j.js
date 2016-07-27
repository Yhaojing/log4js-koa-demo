/**
 * Created by hnzb on 16/7/27.
 */
import log4js from 'koa-log4';
import fs from 'fs';
const dir = './logs/';

fs.existsSync(dir) || fs.mkdirSync(dir);
log4js.configure('./log4j.json');
export default log4js.getLogger('logInfo');
