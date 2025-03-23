def guess_the_number(guess, answer):
    if guess > answer:
        return "The answer you have bestowed to us appears to be bigger than the number we have preserved inside the code."
    elif guess < answer:
        return "The answer you have bestowed to us appears to be smaller than the number we have preserved inside the code."
    else:
        return "The answer you have bestowed to us appears to be the exact same that of the number we have preserved inside this code."

g = int(input("Try to find the exact value of the number from 1 to 100 that we have preserved inside the code: "))
a = 50

print(guess_the_number(g, a))