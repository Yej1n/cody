import requests
import json
import urllib.parse  # URL 인코딩을 위한 모듈
from googleapiclient.discovery import build

GITHUB_TOKEN = "your_secret_key1"
GOOGLE_API_KEY = "your_secret_key2"
GOOGLE_CX_ID = "your_secret_key3"

def fetch_github_trends(language):
    headers = {"Authorization": f"Bearer {GITHUB_TOKEN}"}
    url = f"https://api.github.com/search/repositories?q=language:{language}&sort=stars&order=desc"
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        data = response.json()
        return len(data.get("items", []))
    except requests.exceptions.RequestException as e:
        print(f"GitHub API Error for {language}: {e}")
        return 0


def fetch_stackoverflow_trends(tag):
    # URL 인코딩된 태그 생성
    encoded_tag = urllib.parse.quote(tag)
    url = f"https://api.stackexchange.com/2.3/tags/{encoded_tag}/info?site=stackoverflow"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        return data['items'][0]['count'] if data['items'] else 0
    except requests.exceptions.RequestException as e:
        print(f"Stack Overflow API Error for {tag}: {e}")
        return 0


def fetch_google_trends(api_key, keyword):
    try:
        service = build("customsearch", "v1", developerKey=api_key)
        request = service.cse().list(q=keyword, cx=GOOGLE_CX_ID)
        response = request.execute()
        return int(response["searchInformation"]["totalResults"])
    except Exception as e:
        print(f"Google Trends API Error for {keyword}: {e}")
        return 0

def analyze_languages(languages):
    data = []
    for lang in languages:
        github_trend = fetch_github_trends(lang)
        stackoverflow_trend = fetch_stackoverflow_trends(lang.lower())
        google_trend = fetch_google_trends(GOOGLE_API_KEY, lang)

        trend_score = github_trend + stackoverflow_trend + google_trend
        data.append({
            "language": lang,
            "github": github_trend,
            "stackoverflow": stackoverflow_trend,
            "google_trend": google_trend,
            "trend_score": trend_score
        })
    return data

if __name__ == "__main__":
    languages = ["Python", "JavaScript", "Java", "C#", "C++", "HTML", "CSS", "TypeScript", "PHP", "Ruby"]
    
    try:
        data = analyze_languages(languages)
        with open("data.json", "w", encoding="utf-8") as json_file:
            json.dump(data, json_file, indent=4, ensure_ascii=False)
        print("Analysis saved to data.json")
    except Exception as e:
        print(f"Error during analysis: {e}")
