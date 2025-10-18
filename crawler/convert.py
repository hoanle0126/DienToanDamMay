import json

with open("brands.json", 'r', encoding='utf-8') as f:
    data = json.load(f)
    
list_brands = []

for list_brand in data:
    for item in list_brand['list']:
        list_brands.append(item['url'])
        
with open("new_brands.json", 'w', encoding='utf-8') as f:
    json.dump(list_brands, f, ensure_ascii=False, indent=4)
