### travel-list 知识点总结

#### App.jsx

- setStatus((current) => {}) 给个函数，current 会获取当前状态的最新值
- map 返回一个新数组（用于更新）, filter 过滤数组
- 不应该直接修改状态 比如 item.xxx = xxx 应该使用拓展运算符`{...item, xxx: xxx}`

#### From.jsx

- form onSubmit 表单提交事件，默认 button 是 submit enter 也会触发这个事件
- select 表单受控制 value onChange
- 每个表单是可以改变的，应该加个状态
- `if (!tripSiteRef.current.value) return;` 应该先验证表单填数据没有再 setState
- 提交完数据之后应该将表单置为空

#### PackingList.jsx

- 组件改变 status 和 props 的时候会重新渲染组件
- 所以可以给一个 copyTrips 每次重新计算且不改变原数组，数组浅拷贝方法：`slice() concat() [...arr] Array.from(arr)`，对象浅拷贝`Object.assign({}, obj) [...obj]`
- input checkbox 复选框受控制 `checked`属性表示选中 onChange
- 行内样式动态计算`style={{}}`中间的大括号表示样式对象，外面表示 jsx 语法，`style={{color: xxx ? 'red' : 'gren'}}`
- sort 排序 a b -1 表示不交换数据，1 表示交换数据，boolean 值在比较时会转换为 0，1

#### Footer.jsx

- /0 会是一个 Infinity
- Math.round 四舍五入取整
