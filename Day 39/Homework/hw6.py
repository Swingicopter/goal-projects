def func(listofelements):
    num1 = int(input('input 1st number: '))
    num2 = int(input('input 2nd number: '))
    num3 = int(input('input 3rd number: '))
    num4 = int(input('input 4th number: '))
    num5 = int(input('input 5th number: '))
    listofelements = [num1, num2, num3, num4, num5]
    print(max(listofelements))
    print(min(listofelements))
    print(num1 + num2 + num3 + num4 + num5)
    print(len(listofelements))

func([])