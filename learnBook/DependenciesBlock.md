# DependenciesBlock依赖集合

## 基础属性

* dependencies {Dependency[]} 收集的依赖
* blocks {AsyncDependenciesBlock[]} 收集的异步依赖
* variables {DependenciesBlockVariable[]} 依赖模块变量

## 基本方法

### addBlock

添加一个异步依赖模块，同时会把当前的DependenciesBlock作为新添加进来的block的父元素

### addVariable

> @param {string} name 依赖名称  
@param {string} expression 变量表达式
@param {Dependency[]} dependencies 变量关联的模块
@returns {void}

遍历当前变量，如果已经存在同样的，直接返回。如果不存在，根据参数，新增一个DependenciesBlockVariable

### addDependency

> @param {Dependency} dependency

### removeDependency

> @param {Dependency} dependency

### updateHash

> @param {Hash} hash

遍历当前对象dependencies、blocks、variables更新hash值

### disconnect

遍历当前对象dependencies、blocks、variables，进行清空重置

### unseal

遍历当前对象blocks，执行unseal

### hasDependencies

> @param {DependencyFilterFunction} filter  
@returns {boolean} returns boolean for filter

1、有filter, 遍历当前对象dependencies，如果满足filter，返回true  
2、没有filter，判断当前是否有dependencies，有则返回true  
3、遍历blocks，执行hasDependencies方法，如果有一个返回true，则返回true  
4、遍历variables，执行hasDependencies方法，如果有一个返回true，则返回true  
5、返回false

### sortItems

遍历当前对象blocks，执行sortItems
