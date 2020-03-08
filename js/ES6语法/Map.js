// Map 实例的属性和方法如下：
// size：获取成员的数量
// set：设置成员 key 和 value
// get：获取成员属性值
// has：判断成员是否存在
// delete：删除成员
// clear：清空所有

const map = new Map();
map.set('aaa', 100);
map.set('bbb', 200);

console.log(map.size); // 2

console.log(map.get('aaa')); // 100

map.has('aaa') // true

map.delete('aaa')
map.has('aaa') // false

map.clear()