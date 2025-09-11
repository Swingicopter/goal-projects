def divide(num, num2):
    return f"{num} ÷ {num2} = {num / num2}"

input1 = input("Enter a number: ")
input2 = input("Enter one more number: ")

try:
    print(divide(int(input1), int(input2)))
except ValueError:
    print("ValueError: Please type only numbers.")
except ZeroDivisionError:
    print("ZeroDivisionError: You can't divide by 0.")