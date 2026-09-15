# Тестовок задание для IT Solutions Management International

## Поднять локально

```bash
cd app
cp .env.example .env
docker compose up --build -d
```

Sanbdox: http://localhost:3000/graphql

## Доступ по сети

https://demo.fivemanarmy.ru/graphql

## Пример запроса

```json
query {
  profile {
    name
    description
    links
    skills { name }
    experience { company position startDate endDate achievements }
    projects { name url }
  }
}
```
