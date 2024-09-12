time = int(input('input current time: '))

if time < 6:
    print('why are you awake...?')
elif time < 12 and time > 6:
    print('good morning!')
elif time > 12:
    print('good afternoon!')