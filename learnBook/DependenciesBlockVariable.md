# DependenciesBlockVariable

## 基础属性

* dependencies {Dependency[]} 收集的依赖
* name {string} 变量名称
* expression {string} 变量表达式

## 基本方法

### updateHash

> @param {Hash} hash

遍历当前对象dependencies、更新hash值，更新name和expression的hash值

### expressionSource

> @param {DependencyTemplates} dependencyTemplates 依赖模板资源  
@param {RuntimeTemplate} runtimeTemplate 运行时模板，用于产生代码  
@returns {ReplaceSource} 返回通过模板生成的代码  

### disconnect

遍历当前对象dependencies进行清空重置

### hasDependencies

> @param {DependencyFilterFunction} filter  
@returns {boolean} returns boolean for filter

1、有filter, 遍历当前对象dependencies，如果满足filter，返回true  
2、没有filter，判断当前是否有dependencies，有则返回true，没有则返回false  
