const { promisify } = require('util');
const downloadRepo = promisify(require('download-git-repo'));
const config = require('../../utils/config')
const terminal = require('../../utils/terminal')

const createProject = async (project, otherArg) => {
  // 1.提示信息
  // 2.clone项目从仓库
  await downloadRepo(config.gitPath, project, { clone: true });

  // 3.执行终端命令npm install
  // terminal.exec('npm install', { cwd: `./${project}` });
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  await terminal.spawnCommand(npm, ['install'], { cwd: `./${project}` });

  // // 4.打开浏览器
  // open('http://localhost:8080/');

  // // 5.运行项目
  await terminal.spawnCommand(npm, ['run', 'start', 'demo'], { cwd: `./${project}` });
}

module.exports = createProject
