#     功能为判断输入的用户名和QQ号码是否有效
#     要求：用户名必须由字母、数字或下划线构成且长度在6~20个字符之间，QQ号是5~12的数字且首位不能为0

import re

def main():
    username = input('请输入用户名:')
    qq = input('请输入qq号:')
    
    #第一个参数是正则表达式字符串或正则表达式对象
    #第二个表达式是需要跟正则表达式做匹配的字符串对象
    m1 = re.match(r'^[0-9a-zA-Z_]{6,20}$',username)
    if not m1:
        print('输入无效用户名！')
    
    m2 = re.match(r'^[1-9]\d{4,11}$', qq)
    if not m2:
        print('输入无效qq号!')
    if m1 and m2:
        print('输入的信息有效。')
if __name__=='__main__':
    main()