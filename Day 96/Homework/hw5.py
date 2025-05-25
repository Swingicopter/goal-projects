strings = ["qhyuyu", "1j4?3to", "2tu", "&^@#HNR}&{7", "92;;r3/(#>)", "12.39ier", "!$"]

def strings3charsAndAbove(input):
    output = []
    for s in input:
        if len(s) > 3:
            output.append(s)
    
    return output

print(strings3charsAndAbove(strings))