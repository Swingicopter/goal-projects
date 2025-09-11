def func(num):
    if num >= 0:
        return num
    else:
        raise Exception("რიცხვი არ შეიძლება იყოს უარყოფითი")
    
print(func(1))