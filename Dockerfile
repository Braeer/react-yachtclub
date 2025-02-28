# Указываем базовый образ
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock или package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Собираем проект
RUN npm run build

# Экспонируем порт

RUN npm -g install serve

EXPOSE 3000

# Запускаем приложение
CMD ["serve", "-s", "dist"]