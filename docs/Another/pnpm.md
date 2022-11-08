# 使用 pnpm

## npm 或 yarn 转 pnpm

1. 全局安装`pnpm`

```shell
npm install -g pnpm
```

2. 删除`npm`或`yarn`生成的`node_modules`

```shell
# 项目目录下运行或手动物理删除
rm -rf node_modules
```

3. `pnpm import`从其他软件包管理器的`lock`文件生成`pnpm-lock.yaml`，再执行`pnpm install --frozen-lockfile`（相当于`npm ci`）生成依赖，防止没有`lock`文件意外升级依赖包，导致项目出错。

```shell
# 生成`pnpm-lock.yaml`
pnpm import

# 安装依赖
pnpm install --frozen-lockfile
```

4. 删除`npm`或`yarn`生成的`lock`文件

```shell
# 删除package-lock.json
rm -rf package-lock.json
# 删除yarn.lock
rm -rf yarn.lock
```

## 包存储 store

- `pnpm store path`：查看 store 存储目录的路径。
- `pnpm store status`：查看 store 中已修改的包，如果包的内容与拆包时时相同的话，返回退出代码 0。
- `pnpm store add`：只把包加入存储中，且没有修改存储外的任何项目或文件。
- `pnpm store prune`：删除存储中未被引用的包。

## 卸载 pnpm

### 卸载全局安装的包

通过`pnpm ls --g`查看全局安装的包，只有通过`pnpm install/add xxx --global`安装的包才为全局包！

1. `pnpm rm -g xxx`列出某个全局包进行删除。
2. `pnpm root -g`找到全局目录的位置并手动删除它。

### 移除 pnpm cli

1. 通过独立脚本安装的，可以通过`rm -rf $PNPM_HOME`进行移除（谨慎：删除前确定好删除的内容）。
2. 使用`npm`安装的`pnpm`，可以通过`npm rm -g pnpm`进行移除。

### 删除全局内容可寻址存储

- `rm -rf $(pnpm store path)`

如果您不在主磁盘中使用`pnpm`，您必须在使用`pnpm`的每一个磁盘中运行上述命令。因为`pnpm`会为每一个磁盘创建一个专用的存储空间。
