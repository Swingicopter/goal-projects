import os 

for i in range(1, 11):
    folder = f"folder_{i}"
    file = f"file_{i}.txt"

    os.makedirs(folder, exist_ok=True)

    file_path = os.path.join(folder, file)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(f"This is {file} inside {folder}\n")
    
    if i == 2 and os.path.exists(file_path):
        os.remove(file_path)