# Конвертация изображений в WebP

Для добавления изображений в раздел Валерия Волошина выполните следующие шаги:

## Вариант 1: Использование онлайн-конвертера
1. Перейдите на https://cloudconvert.com/jpg-to-webp или https://convertio.co/jpg-webp/
2. Загрузите ваши изображения
3. Конвертируйте в WebP
4. Сохраните файлы с именами:
   - `voloshin-1.webp`
   - `voloshin-2.webp`
   - `voloshin-3.webp`
   - `voloshin-4.webp`
   - `voloshin-5.webp`
   - `voloshin-6.webp`
   - `voloshin-7.webp`
   - `voloshin-8.webp`
5. Поместите их в папку `public/image/`

## Вариант 2: Использование командной строки (macOS/Linux)

Если у вас установлен ImageMagick:
```bash
cd public/image
for file in *.jpg *.jpeg *.png; do
  if [ -f "$file" ]; then
    convert "$file" -quality 85 "${file%.*}.webp"
  fi
done
```

Или используйте cwebp (Google WebP):
```bash
# Установка на macOS
brew install webp

# Конвертация
cd public/image
cwebp -q 85 input.jpg -o voloshin-1.webp
```

## Вариант 3: Использование Node.js скрипта

1. Установите sharp:
```bash
npm install sharp --save-dev
```

2. Поместите ваши изображения в `public/image/` с именами:
   - `voloshin-1.jpg` (или .png)
   - `voloshin-2.jpg`
   - и т.д.

3. Запустите скрипт (требуется доработка для ES modules)

## Рекомендации
- Оптимальное качество: 85%
- Максимальный размер изображения: 1920x1080px
- Формат: WebP для лучшей производительности

