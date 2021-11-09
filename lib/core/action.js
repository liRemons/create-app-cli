const { promisify } = require("util");
const downloadRepo = promisify(require("download-git-repo"));
const {
  gitPathReactStatic,
  gitPathReact,
  gitPathVue,
  gitPathVueNext,
} = require("../../utils/config");
const terminal = require("../../utils/terminal");

const createReactStatic = (project) => {
  createProject(project, "react-static");
};

const createReact = (project) => {
  createProject(project, "react");
};

const createVue = (project) => {
  createProject(project, "vue");
};

const createVueNext = (project) => {
  createProject(project, "vue@next");
};

const createProject = async (project, otherArg) => {
  const gitPathOption = {
    "react-static": gitPathReactStatic,
    react: gitPathReact,
    vue: gitPathVue,
    "vue-next": gitPathVueNext,
  };

  // 1.提示信息
  // 2.clone项目从仓库
  await downloadRepo(gitPathOption[otherArg], project, { clone: true });

  console.log("success");
  console.log("====================================");
  console.log("cd <project>");
  console.log("npm install");
  console.log("npm run start");
  console.log("浏览器打开, 例： localhost:3033");
  console.log("====================================");

  // 3.执行终端命令npm install
  // terminal.exec('npm install', { cwd: `./${project}` });
  // const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  // await terminal.spawnCommand(npm, ['install'], { cwd: `./${project}` });

  // // 4.打开浏览器
  // open('http://localhost:8080/');

  // // 5.运行项目
  // await terminal.spawnCommand(npm, ['run', 'start', 'demo'], { cwd: `./${project}` });
};

module.exports = {
  createReactStatic,
  createReact,
  createVue,
  createVueNext
};
