from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

service = Service('C:/Users/Aditya/drivers/chromedriver.exe')  # Replace with your ChromeDriver path
driver = webdriver.Chrome(service=service)

url = "https://techtree.iiitd.edu.in/"
driver.get(url)

wait = WebDriverWait(driver, 5) # reduce wait if page is loading quickly
table = wait.until(EC.presence_of_element_located((By.ID, "data-table")))

courses = []
rows = table.find_elements(By.TAG_NAME, "tr")

for row in rows:
    cells = row.find_elements(By.TAG_NAME, "td")
    if len(cells) > 0:
        name = cells[1].text
        acronym = cells[2].text
        code = cells[3].text
        sem_type = cells[6].text
        courses.append({
            'name': name,
            'acronym': acronym,
            'code': code,
            'sem_type': sem_type
        })

for course in courses:
    print(course)

driver.quit()
