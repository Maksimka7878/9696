// Скрипт для конвертации изображений в WebP
// Использование: node scripts/convert-to-webp.js

const fs = require('fs');
const path = require('path');

// Проверяем наличие sharp
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('Ошибка: sharp не установлен. Установите его командой: npm install sharp');
  process.exit(1);
}

const inputDir = path.join(__dirname, '../public/image');
const outputDir = path.join(__dirname, '../public/image');

// Список изображений для конвертации (добавьте ваши файлы сюда)
const imagesToConvert = [
  // Добавьте сюда пути к вашим изображениям
  // Например: 'voloshin-1.jpg', 'voloshin-2.jpg', и т.д.
];

// Если папка не существует, создаем её
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    console.log(`✓ Конвертировано: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Ошибка при конвертации ${inputPath}:`, error.message);
  }
}

async function processImages() {
  console.log('Начинаем конвертацию изображений в WebP...\n');

  // Если список пуст, ищем все изображения в папке
  let filesToProcess = imagesToConvert;
  
  if (filesToProcess.length === 0) {
    const allFiles = fs.readdirSync(inputDir);
    filesToProcess = allFiles.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('voloshin')
    );
  }

  if (filesToProcess.length === 0) {
    console.log('Не найдено изображений для конвертации.');
    console.log('Поместите ваши изображения в папку public/image/ и запустите скрипт снова.');
    return;
  }

  for (const file of filesToProcess) {
    const inputPath = path.join(inputDir, file);
    const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(outputDir, `voloshin-${Date.now()}-${outputName}`);

    if (fs.existsSync(inputPath)) {
      await convertToWebP(inputPath, outputPath);
    } else {
      console.log(`⚠ Файл не найден: ${file}`);
    }
  }

  console.log('\nКонвертация завершена!');
}

processImages();

