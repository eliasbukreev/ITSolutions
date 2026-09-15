import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const myData = {
  name: 'Букреев Илья Константинович',
  description:
    'Fullstack-разработчик, 11+ лет опыта: Python/FastAPI, JavaScript/TypeScript (Vue/Nuxt/Node/NestJS), PostgreSQL, Linux, Docker/Kubernetes, GitLab CI/CD. Владивосток, удаленно/гибрид.',
  links: [
    'https://github.com/eliasbukreev',
    'https://fivemanarmy.ru/',
    'https://habr.com/ru/users/FiveManArmy',
    'https://t.me/fivemanarmy',
  ],
  skills: {
    create: [
      { name: 'TypeScript' },
      { name: 'Node.js' },
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'VueJS' },
      { name: 'Nuxt' },
      { name: 'PostgreSQL' },
      { name: 'SQL' },
      { name: 'Git' },
    ],
  },
  experience: {
    create: [
      {
        company: 'Информационные технологии (ic-dv.ru)',
        position: 'Ведущий специалист по технической защите информации',
        startDate: new Date('2025-03-01'),
        endDate: undefined,
        achievements: [
          'Сервис аудита Vue.js + FastAPI + PostgreSQL с offline-first (IndexedDB, автосинхронизация)',
          'Микросервисы FastAPI: email, обработка данных с AI-агентами, генерация документов по шаблонам',
          'Внутренний dashboard на Nuxt поверх FastAPI-сервисов',
          'Dev lifecycle с нуля: тесты, GitLab CI/CD, Docker → Kubernetes (k3s), dev/stage/prod',
          'Мониторинг Prometheus + Loki + Grafana; инфраструктура Terraform + Ansible',
        ],
      },
      {
        company: 'Частная практика / Freelance',
        position: 'Fullstack разработчик',
        startDate: new Date('2015-09-01'),
        endDate: new Date('2025-02-28'),
        achievements: [
          'Разработка и сопровождение веб-приложений для частных и коммерческих проектов',
          'Backend и frontend на Python и JavaScript/TypeScript, автоматизация и интеграции IT-систем',
          'Linux-серверы, развертывание приложений, базы данных и внешние сервисы',
        ],
      },
    ],
  },
  projects: {
    create: [
      { name: 'GitHub', url: 'https://github.com/eliasbukreev' },
      { name: 'Личный сайт', url: 'https://fivemanarmy.ru/' },
      { name: 'Блог на Хабре', url: 'https://habr.com/ru/users/FiveManArmy' },
    ],
  },
};

async function main() {
  await prisma.profile.deleteMany();
  await prisma.profile.create({ data: myData });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
