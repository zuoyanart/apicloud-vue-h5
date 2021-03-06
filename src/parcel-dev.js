/**
 * @Author: 左盐
 * @Date:   2018-04-19 23:32:38
 * @Email:  huabinglan@163.com
 * @Project: xxx
 * @Last modified by:   左盐
 * @Last modified time: 2018-06-06 22:01:33
 */
const Bundler = require('parcel-bundler');
const Path = require('path');
const fs = require('fs-extra');
const chokidar = require('chokidar');
const cheerio = require('cheerio')
const ejs = require('ejs')

// 入口文件路径
const file = Path.join(__dirname, '/index.html');

// Bundler 选项
const options = {
  outDir: '../dist/', // 将生成的文件放入输出目录下，默认为 dist
  outFile: 'index', // 输出文件的名称
  publicUrl: '/', // 静态资源的 url ，默认为 dist
  watch: process.env.NODE_ENV !== 'production',
  cache: false, // 启用或禁用缓存，默认为 true
  cacheDir: '.cache', // 存放缓存的目录，默认为 .cache
  minify: false, // process.env.NODE_ENV === 'production',
  contentHash: false,
  target: 'browser', // 浏览器/node/electron, 默认为 browser
  https: false, // 服务器文件使用 https 或者 http，默认为 false
  logLevel: 3, // 3 = 输出所有内容，2 = 输出警告和错误, 1 = 输出错误
  hmrPort: 0, // hmr socket 运行的端口，默认为随机空闲端口(在 Node.js 中，0 会被解析为随机空闲端口)
  sourceMaps: false, // 启用或禁用 sourcemaps，默认为启用(在精简版本中不支持)
  hmrHostname: '', // 热模块重载的主机名，默认为 ''
  detailedReport: false // 打印 bundles、资源、文件大小和使用时间的详细报告，默认为 false，只有在禁用监听状态时才打印报告
};

async function build() {
  // 使用提供的入口文件路径和选项初始化 bundler
  const bundler = new Bundler(file, options);
  // 运行 bundler，这将返回主 bundle
  // 如果你正在使用监听模式，请使用下面这些事件，这是因为该 promise 只会触发一次，而不是每次重新构建时都触发
  // const bundle = await bundler.bundle();
  if (process.env.NODE_ENV !== 'development') { // 非开发环境
    await bundler.bundle();
  } else { // 生产或者测试环境
    await bundler.serve(); // 触发内部server
  }
}

build();