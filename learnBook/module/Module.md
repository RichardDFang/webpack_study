# Module

继承自DependenciesBlock

## 基础属性

基本信息

* **type** 模块类型
* **context** 模块上下文

Unique Id

* **debugId** id标识

Hash

* **hash** 当前模块的hash值
* **renderedHash** 渲染后的hash值

Info from Factory

* **resolveOptions** 
* **factoryMeta** 

Info from Build

* **warnings** 
* **errors** 
* **buildMeta** 
* **buildInfo** 构建信息
* **_source** 

Graph (per Compilation)

* **reasons** {ModuleReason[]}
* **_chunks** {SortableSet\<Chunk>}

Info from Compilation (per Compilation)

* **id** id标识
* **index** 
* **index2** 
* **depth** 
* **issuer** {Module}
* **profile** 
* **prefetched** 
* **built** 

Info from Optimization (per Compilation)

* **used** 
* **usedExports** 
* **optimizationBailout** {(string | OptimizationBailoutFunction)[]}

delayed operations

* **_rewriteChunkInReasons** {undefined | {oldChunk: Chunk, newChunks: Chunk[]}[] }

other

* **useSourceMap**

## 基本方法

### [get] exportsArgument

返回‘exports’或者buildInfo中的exportsArgument

### [get] moduleArgument

返回‘module’或者buildInfo中的moduleArgument

### disconnect

重置基本数据和父类基本数据

### unseal

### setChunks

设置模块chunks

### addChunk

添加chunk到当前类的_chunks中，添加成功返回true, 否则返回false

### removeChunk

移出当前_chunks中对应的chunk，并删除chuank中当前的module

### isInChunk

### isEntryModule

遍历_chunks中所有chunk，判断当前module是否为entryModule

### [get] optional

### addReason

新建ModuleReason,并添加到reasons当中
