import os

while True:
    count = int(input("Ramdeni ulvashi datvlila zghvis loms? "))

    if count > 20:
        print("Zghvis loms ar aqvs amagdebuli ulvashis raodenoba!")
        break

    for i in range(1, count + 1):
        file_name = f"ulvashi_{i}.txt"
        with open(file_name, "w", encoding="utf-8") as f:
            f.write(f"Es aris ulvashi {i}\n")

    print(f"{count} ulvashis faili sheiqmna!\n")