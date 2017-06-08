1. computed 初次求值（被 get）时，将全局变量 Dep.target 标记为自身
2. 在该 getter 中使用 computed 函数计算 value
3. computed 函数中包含了对各 reactive 的引用
4. 在该 computed 中对 reactive 求值（触发 getter）时，各 reactive 收集当前 Dep.target 至自身的 deps 数组。computed 求值完成后，所有它所依赖的 reactive 均完成对该 computed 的依赖收集
6. 求值完成后，computed 将 Dep.target 标记为空，返回求值结果作为 computed 的值
7. 下次 reactive 更新时，所有依赖它的 computed 在该 reactive 的 setter 中一并更新
