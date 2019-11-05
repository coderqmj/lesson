-   const 一定要赋值
-   函数表达式 箭头表达式（无function关键字)
-   live-server stylus nodemon npm包 node package
    management
    yain 更加优秀 npm的替代品,facebook维护

    [0,1,0,3,12]
-   version1.0
    时间复杂度  O(n) 一个for循环
    空间复杂度 notZeroArr = [] zeroArr = [] n+n=2n 即  S(n)
    缺点是花费了空间

-   version2.0
    index 指针 0 nums.length
    nums 重写 不用空间
    i = 0  index = 0
    [] i =1 inedx =0
    [1] nums[index]  index++  i = 2  index = 1
    [1] i =3 index = 1
    [1,3] i = 4  index = 2
    [1,3,12] i=5  index = 3
    [1,3,12,0,0]
