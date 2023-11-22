# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

---

快速开始新项目
1. slot
2. axios
3. 基础router, 路由重定向, 路由带参数
4. import 使用@ alias
5. 基础布局 header sidebar content
6. 过过渡动画，元素出现 消失时候的动画

---
注意vue2和3的区别
个人更喜欢 组合式
组合式api: <script setup>
```text
1. 不用定义export default{}
2. 定义data域
   import {ref} from 'vue'
   let data = ref('')
3. 引入组件直接用 在标签中使用
   无须 export default{
   components: xxxx
}
```

