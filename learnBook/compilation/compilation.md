# compilation】

## 基本属性

### _preparedEntrypoints

### entry

### profile

已经开始进行模块依赖收集的入口

## 基本方法

## addEntry

> @param {string} context context path for entry (工程入口文件夹目录)  
@param {Dependency} entry entry dependency being created (入口文件依赖对象)  
@param {string} name name of entry  (入口文件名称)  
@param {ModuleCallback} callback callback function  (回调函数)  
@returns {void} returns

入口方法，开始编译前，都要从此方法进入开始查询module和依赖

执行_addModuleChain方法

* 如果失败，执行failedEntry钩子，返回失败信息
* 如果成功，更新succeedEntry狗子。如果同时返回module信息，更新slot.module的值，如果没有根据闭包信息中slot的值，删除对应`_preparedEntrypoints`中的值

## _addModuleChain

> @param {string} context context string path (工程入口文件夹目录）  
@param {Dependency} dependency dependency used to create Module chain (用于创建模块链的入口依赖)  
@param {OnModuleCallback} onModule function invoked on modules creation ()  
@param {ModuleChainCallback} callback callback for when module chain is complete (模块链构建完成后的回调函数)  
@returns {void} will throw if dependency instance is not a valid Dependency

添加模块链

1、判断错误及回调函数  
2、判断依赖模块是否存在，不存在，直接抛出异常  
3、获取依赖对应的 收集依赖的工厂函数

## 依赖收集过程
