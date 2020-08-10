# dependency

依赖的基本类型原型

## 基础属性

* **module**: 当前模块
* **weak**: ... (将在webpack5中移出)
* **optional**: ...
* **loc**: 依赖模块的位置

## 基本方法

### getResourceIdentifier

获取资源标识，在子类中实现，在当前类中为null

### getReference

获取当前模块引用的依赖

### getExports

### getWarnings

### getErrors

### updateHash

更新当前模块的哈希值

### disconnect

重置当前模块
