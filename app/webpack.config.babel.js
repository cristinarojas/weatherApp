require('@babel/register');

import {
  devtool,
  entry,
  mode,
  module,
  optimization,
  output,
  plugins,
  resolve
} from './webpack/configuration';

export default {
  devtool,
  entry,
  mode,
  module,
  optimization,
  output,
  plugins,
  resolve
};
