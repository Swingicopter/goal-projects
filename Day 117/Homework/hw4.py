import os

num = int(input("ramdeni ludi unda nugzars? "))

for i in range(1, num + 1):
    file_name = f"ludi_{i}.txt"
    with open(file_name, "w", encoding="utf-8") as f:
        f.write(f"es aris ludi {i}\n")

print(f"{num} ludi mivecit nugzars!")