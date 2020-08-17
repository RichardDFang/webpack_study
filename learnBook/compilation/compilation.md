# compilation

## 基本属性

* **_preparedEntrypoints**
* **entry**
* **profile** 已经开始进行模块依赖收集的入口
* **resolverFactory** compiler.resolverFactory

## 基本方法

## addEntry

```js
@param {string} context context path for entry (工程入口文件夹目录)  
@param {Dependency} entry entry dependency being created (入口文件依赖对象)  
@param {string} name name of entry  (入口文件名称)  
@param {ModuleCallback} callback callback function  (回调函数)  
@returns {void} returns
```

入口方法，开始编译前，都要从此方法进入开始查询module和依赖

执行_addModuleChain方法

* 如果失败，执行failedEntry钩子，返回失败信息
* 如果成功，更新succeedEntry狗子。如果同时返回module信息，更新slot.module的值，如果没有根据闭包信息中slot的值，删除对应`_preparedEntrypoints`中的值

## addModule

```js
/**
* @typedef {Object} AddModuleResult
* @property {Module} module the added or existing module
* @property {boolean} issuer was this the first request for this module
* @property {boolean} build should the module be build
* @property {boolean} dependencies should dependencies bewalked
*/

/**
* @param {Module} module module to be added that was created
* @param {any=} cacheGroup cacheGroup it is apart of
* @returns {AddModuleResult} returns meta about whether or not the module had built
* had an issuer, or any dependnecies
*/
```

1、先根据identifier判断模块是否已经被构建，有则直接取已构建好的模块  
2、判断模块有没有被缓存，如果被缓存，再看是否需要更新缓存中的模块，以及是否需要重新构建模块；如果不需要重新构建模块，则重置模块，并作为当前正在处理中的模块

## buildModule

```js
/**
* Builds the module object
* @param {Module} module module to be built
* @param {boolean} optional optional flag
* @param {Module=} origin origin module this module build was requested from
* @param {Dependency[]=} dependencies optional dependencies from the module to be built
* @param {TODO} thisCallback the callback
* @returns {TODO} returns the callback function with results
*/
```

1、将module添加到_buildingModules中  
2、module开始构建  
3、构建完成后添加module的error和warning信息到当前compilation  
4、对module的dependencies进行处理  
5、执行buildModule之后的钩子函数

## processModuleDependencies

```js
/**
* @param {Module} module to be processed for deps
* @param {ModuleCallback} callback callback to be triggered
* @returns {void}
*/
```

进行模块依赖处理

1、先尝试模块依赖集合
2、对收集到的依赖从map转到array平滑处理

## addModuleDependencies

```js
/**
* @param {Module} module module to add deps to
* @param {SortedDependency[]} dependencies set of sorted dependencies to iterate through
* @param {(boolean|null)=} bail whether to bail or not
* @param {TODO} cacheGroup optional cacheGroup
* @param {boolean} recursive whether it is recursive traversal
* @param {function} callback callback for when dependencies are finished being added
* @returns {void}
*/
```

添加模块的依赖



## _addModuleChain

```js
/**
* @param {string} context context string path (工程入口文件夹目录）  
* @param {Dependency} dependency dependency used to create Module * chain (用于创建模块链的入口依赖)  
* @param {OnModuleCallback} onModule function invoked on modules * creation ()  
* @param {ModuleChainCallback} callback callback for when module * chain is complete (模块链构建完成后的回调函数)  
* @returns {void} will throw if dependency instance is not a valid Dependency
*/
```

添加模块链

1、判断错误及回调函数  
2、判断依赖模块是否存在，不存在，直接抛出异常  
3、获取依赖对应的 收集依赖的工厂函数  
4、通过Semaphore限制收集依赖的数量，最大默认100  
5、模块工厂函数生成对应模块类  
6、添加addModule  
7、把当前module添加到当前dependency中  
8、module添加addReason
9、module是否需要构建，是：进行module构建，不是：等待所有module构建完成
10、进行module构建完成后，进行module的dependencies处理

## 依赖收集过程
