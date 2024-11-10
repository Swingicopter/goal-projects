mentors = ['tezela', 'guram', 'zabakh', 'gurgenidze', 'grdzelo']
indexchoice = int(input('Type a number from -5 to 4 here: '))

if indexchoice <= 4 and indexchoice >= -5:
    print(mentors[indexchoice])
else:
    print('Make sure you typed a number from -5 to 4.')