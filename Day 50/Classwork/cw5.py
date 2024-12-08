number1 = int(input('enter a number: '))
number2 = int(input('enter another number: '))
operat = input('enter operator (+, -, *, /, //): ')

def calculator(num, num2, operator):
    if num or num2 == 0:
        return 'Infinity'
    elif operator == '+':
        return num + num2
    elif operator == '-':
        return num - num2
    elif operator == '*':
        return num * num2
    elif operator == '/':
        return num / num2
    elif operator == '//':
        return num // num2
    
print(calculator(number1, number2, operat))