// This file contains the setup for koa-static
import path from 'path';
import serve from 'koa-static';

const build = path.resolve(__dirname, '../../public');
console.log(build);
export default serve(build);
