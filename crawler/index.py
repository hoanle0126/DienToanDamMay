from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup
import json

list_brands = []

with open("new_brands.json", 'r', encoding="utf-8") as f:
    brands = json.load(f)


def getElements(playwright, url):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto(url)
    
    html = page.content()
    soup = BeautifulSoup(html, "html.parser")
    elements = {
        "name": soup.select_one(".bg-white .m-auto.container .flex.gap-4.p-5.pb-0.bg-white .w-full.text-sm h1").text.strip() if soup.select_one(".bg-white .m-auto.container .flex.gap-4.p-5.pb-0.bg-white .w-full.text-sm h1") else "",
        "description": soup.select_one(".bg-white .m-auto.container .flex.gap-4.p-5.pb-0.bg-white .w-full.text-sm div").text.strip() if soup.select_one(".bg-white .m-auto.container .flex.gap-4.p-5.pb-0.bg-white .w-full.text-sm div") else ""
    }
    browser.close()
    return elements


with sync_playwright() as playwright:
    for brand in brands:
        elements = getElements(playwright, brand)
        list_brands.append(elements)
        print(f"Đã thêm: {elements['name']}")

with open("list_brands.json", 'w', encoding="utf-8") as file:
    json.dump(list_brands, file, ensure_ascii=False, indent=4)
