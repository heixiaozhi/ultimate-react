### eat-n-split 总结

组件划分单一职责
构建静态版本
找出 UI 精简完整的 state 表示
验证 state 放在哪里
反向数据流

App.jsx
状态

- friends 储存所有的朋友
- currentFriend 存储当前选择的用户
- showAddFriend 是否展示添加表单

函数

- handleSelectFriend 处理选择的用户，`current?.id === friend.id ? undefined : friend` 当前用户等于选择的用户就将当前用户设置为`undefined`等于没选择
- showAddFriend && 组件 当为 false 的时候会销毁组件

FriendItem.jsx

- `isSelected = item.id === currentFriend?.id` 展示的元素是否是当前用户

AddFriendForm.jsx

- `crypto.randomUUID`生成唯一的 id
- 表单提交流程
  - `e.preventDefualt()`取消表单默认行为
  - 判断表单数据是否填完整
  - 提交表单
  - 清空表单数据

SplitBillForm.jsx

- friendExpense 是可以基于当前状态计算出来的，所以不是 state
- ` let balance = whoIsPaying === 'user' ? -friendExpense : userExpense` 花费，如果是用户支付，就减去我应该花的钱，如果是我支付我应该加上用户的钱
- `Number(e.target.value)` 将表单的数据转换为数字，`'' == 0`

Button.jsx

- 封装按钮组件，使用`children of props`传递内容`onClick of props`传递点击事件
