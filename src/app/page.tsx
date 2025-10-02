"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Heart,
  Gift,
  Image as ImageIcon,
  Stars,
  ArrowRight,
  Check,
  Crown,
  Shield,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// -------- Базовые настройки бренда --------
const TELEGRAM_URL = "https://t.me/VoobrazhayBot?start=landing"; // ← замени при необходимости
const PRICING_LINKS = {
  mini: "https://t.me/VoobrazhayBot?start=mini", // ← заглушка для Мини
  maxi: "https://t.me/VoobrazhayBot?start=maxi", // ← заглушка для Макси  
  premium: "https://t.me/VoobrazhayBot?start=premium", // ← заглушка для Премиум
};
const GALLERY = [
  "/gallery/family-box.jpg",   // Подарочная коробка (загруженное фото)
  "/gallery/5.jpg",   // Детская книга с девочкой на метле
  "/gallery/12.jpeg",    // Романтическая история пары
  "/gallery/10.jpg", // Детская история с единорогом
  "/gallery/family-box.jpg",   // Дополнительный пример (повтор)
  "/gallery/5.jpg",   // Дополнительный пример (повтор)
];

const BOOKS_GALLERY = [
  "/gallery/2.jpg",        // Правильное изображение 1
  "/gallery/how_1-new.jpg",    // Правильное изображение 2 (поменяли местами с 4.jpg)
  "/gallery/4.jpg",        // Правильное изображение 3 (поменяли местами с how_1-new.jpg)
  "/gallery/how_6-new.jpg",    // Правильное изображение 4 (переименовано)
  "/gallery/how_9.jpeg",   // Правильное изображение 5 (поменяли местами с how_7-new.jpg)
  "/gallery/how_7-new.jpg",    // Правильное изображение 6 (поменяли местами с how_9.jpeg)
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function VoobrazhayLanding() {
  const grids = GALLERY.slice(0, 6);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF4EC] via-white to-white text-gray-900">
      {/* Навбар */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-orange-100/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-orange-400 to-amber-300 grid place-items-center shadow-sm">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-lg">Воображай</span>
            <Badge className="ml-0.5 mt-0.5 bg-orange-100 text-orange-700 hover:bg-orange-100">Храним ваши воспоминания</Badge>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Badge variant="outline" className="border-teal-200 text-teal-700">Доставка по РФ</Badge>
            <Badge variant="outline" className="border-orange-200 text-orange-700">Изготовление 7-10 дней</Badge>
            <Button asChild className="rounded-2xl px-5 whitespace-nowrap">
              <a href="#order" className="flex items-center">
                Оформить заказ
                <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-80 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(255,159,103,0.18),transparent_60%),radial-gradient(900px_500px_at_90%_20%,rgba(113,221,225,0.12),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm">
              <Stars className="h-4 w-4" /> Самый трогательный подарок 2025
            </div>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Книга, где главный герой — <span className="text-orange-600">ваш ребёнок, пара или семья</span>
            </h1>
            <p className="mt-5 text-lg text-gray-700 max-w-xl">
              Мы превращаем ваши воспоминания, мечты и фотографии в книгу, которая тронет сердца близких. Улыбка, слезы радости и самые дорогие моменты — на каждой странице.
            </p>
            {/* Социальное доказательство */}
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★★★★★</span>
                <span>4.9/5</span>
              </div>
              <div className="h-3 w-px bg-gray-300" />
              <div>850+ счастливых семей</div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <Button asChild size="lg" className="rounded-2xl h-12 px-6 text-base whitespace-nowrap">
                <a href="#order" className="flex items-center">
                  Выбрать подарок
                  <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Галерея превью на первом экране */}
          <motion.div {...fadeUp} className="grid grid-cols-2 gap-3">
            {grids.slice(0,4).map((src, i) => (
              <div key={i} className="relative group overflow-hidden rounded-3xl shadow-sm">
                <img src={src} alt="Персонализированная книга Воображай с акварельными иллюстрациями" className="h-48 sm:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Для кого */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">Для кого</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Подберите подарок под вашу историю</h2>
            <p className="mt-2 text-gray-600">Детям, парам, родителям — у каждой истории свой тон и стиль.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{
              icon: <Users className="h-5 w-5 text-orange-600" />, title: "Для детей", text: "Сказка, где ребёнок становится главным героем. Его мечты, увлечения и любимые места оживают на страницах."},
              {icon: <Heart className="h-5 w-5 text-orange-600" />, title: "Для пары", text: "История вашей любви — от первых встреч до мечтаний о будущем. Искренне, нежно и только про вас."},
              {icon: <BookOpen className="h-5 w-5 text-orange-600" />, title: "Для родителей", text: "Семейная книга, где собраны важные моменты, традиции и ценности. Подарок, который хранится как реликвия."},
            ].map((b, i) => (
              <motion.div key={i} {...fadeUp}>
                <Card className="rounded-3xl border-orange-100 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">{b.icon} {b.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">{b.text}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-[#FFF4EC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Просто как 1‑2‑3</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Как мы делаем вашу книгу</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{
              step: 1,
              title: "Короткий бриф в Telegram",
              text: "Вы отвечаете на несколько простых вопросов и делитесь фотографиями в удобном чат-боте.",
            },{
              step: 2,
              title: "История и иллюстрации",
              text: "Мы превращаем ваши ответы в живую историю и создаём акварельные иллюстрации, где герои похожи на вас.",
            },{
              step: 3,
              title: "Печать и доставка",
              text: "Книгу печатаем на премиальной бумаге, упаковываем как подарок и доставляем через 5–7 дней. Остаётся только вручить и увидеть эмоции.",
            }].map((s) => (
              <motion.div key={s.step} {...fadeUp}>
                <Card className="rounded-3xl border-orange-100 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-baseline gap-3">
                      <span className="text-orange-600 font-black text-4xl">{s.step}</span>
                      {s.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">{s.text}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" className="rounded-2xl h-12 px-6 text-base whitespace-nowrap">
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center">
                Заполнить бриф в Telegram
                <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-[#F2FBFA]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-8">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">Примеры</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Как выглядят наши книги</h2>
            <p className="mt-2 text-gray-600">Больше разворотов — в Telegram. Там же можно оформить заказ.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {BOOKS_GALLERY.map((src, i) => (
              <motion.div key={i} {...fadeUp} className="relative group overflow-hidden rounded-3xl shadow-sm">
                <img 
                  src={src} 
                  alt="Примеры персонализированных книг Воображай с уникальными иллюстрациями" 
                  className="h-44 sm:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline" className="rounded-2xl h-12 px-6 text-base border-teal-200">
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">Смотреть ещё в Telegram</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">Почему Воображай</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Почему выбирают Воображай</h2>
            <p className="mt-2 text-gray-600">В каждой книге — часть вашей жизни. Мы делаем её ощутимой.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div {...fadeUp}>
              <Card className="rounded-3xl border-orange-100 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <BookOpen className="h-5 w-5 text-orange-600" /> Живая история о вас
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-2">
                  <p>Каждая книга пишется с нуля: ваши герои, ваши места, ваши моменты. Без шаблонов — только ваша история.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeUp}>
              <Card className="rounded-3xl border-orange-100 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <ImageIcon className="h-5 w-5 text-orange-600" /> Акварельные иллюстрации
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-2">
                  <p>Нежные рисунки создаются по вашим фото и настроению. Герои книги узнаваемы и трогательны.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeUp}>
              <Card className="rounded-3xl border-orange-100 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Crown className="h-5 w-5 text-orange-600" /> Премиальное исполнение
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-2">
                  <p>Плотная бумага, чёткая печать и подарочная упаковка — книга выглядит как ценная реликвия.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Упаковка и доставка */}
      <section className="py-14 sm:py-20 bg-[#FFF4EC]/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Упаковка и доставка</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Готово к вручению</h2>
            <p className="mt-2 text-gray-600">Подарочная коробка, тиснение и персональное поздравление на форзаце.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
  "/gallery/gift_3-new.jpeg",
  GALLERY[0],
  "/gallery/14-new.jpg"
].map((src, i) => (
              <motion.div key={i} {...fadeUp} className="relative group overflow-hidden rounded-3xl shadow-sm">
                <img 
                  src={src} 
                  alt="Книга Воображай в подарочной упаковке с тиснением" 
                  className="h-52 w-full object-cover" 
                  onError={(e) => {
                    console.error('Ошибка загрузки изображения:', src);
                    e.currentTarget.style.border = '2px solid red';
                    e.currentTarget.style.backgroundColor = '#ffebee';
                  }}
                  onLoad={() => {
                    console.log('Изображение загружено успешно:', src);
                  }}
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-center text-gray-700">Доставка по РФ включена на всех тарифах.</div>
        </div>
      </section>

      {/* О нас + Гарантии и приватность */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-start">
          <motion.div {...fadeUp}>
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">О нас</Badge>
            <h3 className="mt-3 text-2xl font-bold">Почему мы делаем «Воображай»</h3>
            <p className="mt-3 text-gray-700">Мы уверены: лучший подарок — это не вещь, а история, где есть вы и ваши близкие. Поэтому мы бережно собираем детали, превращаем их в тёплый текст и иллюстрации, которые хочется перечитывать и пересматривать снова и снова. Эти книги остаются в семье на годы — и становятся её частью.</p>
          </motion.div>
          <motion.div {...fadeUp}>
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Гарантии и забота</Badge>
            <div className="mt-3 space-y-3 text-gray-700">
              <div className="flex items-start gap-3"><Check className="h-5 w-5 text-orange-600 mt-0.5" />Работаем до тех пор, пока книга не вызывает у вас искреннее «Вау!».</div>
              <div className="flex items-start gap-3"><Shield className="h-5 w-5 text-orange-600 mt-0.5" />Все фото и материалы используются только для книги и удаляются после печати.</div>
              <div className="flex items-start gap-3"><Gift className="h-5 w-5 text-orange-600 mt-0.5" />На первой странице можно оставить личное поздравление или послание для близкого человека.</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Отзывы — текстовые с аватарками */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">Отзывы</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Отзывы наших клиентов</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{
              name: "Ирина и Андрей",
              role: "Санкт‑Петербург",
              quote: "Подарили сыну на день рождения — он хохотал и радовался, когда узнавал наши фразы и свои любимые места. Теперь это его любимая книга перед сном.",
              img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=256&auto=format&fit=crop",
            },{
              name: "Наташа",
              role: "Москва",
              quote: "История получилась тёплой и настоящей, как будто написана специально для нас. А акварельные иллюстрации — прямо оживают на страницах.",
              img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=256&auto=format&fit=crop",
            },{
              name: "Алексей",
              role: "Новосибирск",
              quote: "Мы заказали книгу на годовщину родителей. Она стала центром праздника — гости листали, смеялись и просили контакты. Теперь книга занимает почётное место дома.",
              img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=256&auto=format&fit=crop",
            }].map((t, i) => (
              <motion.div key={i} {...fadeUp}>
                <Card className="rounded-3xl border-orange-100 h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <img src={t.img} alt={`Фото клиента ${t.name} - отзыв о персонализированной книге Воображай`} className="h-10 w-10 rounded-full object-cover" />
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-xs text-gray-500">{t.role}</div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-700 leading-relaxed">“{t.quote}”</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <Button asChild size="lg" className="rounded-2xl h-12 px-6 text-base whitespace-nowrap">
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center">
                Оформить книгу в Telegram
                <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
              </a>
            </Button>
            <div className="text-sm text-gray-600">🔹 Заказы на эту неделю открыты</div>
          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section id="order" className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Тарифы</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Подберите подарок под вашу историю</h2>
            <p className="mt-2 text-gray-600">История может быть короткой сказкой или большой семейной сагой — выбор за вами</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{
              name: "Мини",
              price: "5 900 ₽",
              tag: "📖 Лёгкий вариант",
              desc: "Мягкая обложка формата А5, 20–30 страниц, до 15 иллюстраций. Подходит для детских сказок и небольших историй.",
              cta: "Выбрать «Мини»",
              link: PRICING_LINKS.mini,
            },{
              name: "Макси",
              price: "9 900 ₽",
              tag: "✨ Самый популярный",
              desc: "Все что в Макси + Подарочная коробка, поздравление на форзаце, расширенная редактура текста и иллюстраций без ограничений.",
              cta: "Выбрать «Макси»",
              link: PRICING_LINKS.maxi,
            },{
              name: "Премиум",
              price: "16 900 ₽",
              tag: "🎁 Для особых случаев",
              desc: "Все что в Макси + Подарочная коробка, тиснение, расширенная редактура текста и иллюстраций без ограничений. Книга-реликвия, которую хочется беречь.",
              cta: "Выбрать «Премиум»",
              link: PRICING_LINKS.premium,
            }].map((t) => (
              <motion.div key={t.name} {...fadeUp}>
                <Card className="rounded-3xl border-orange-100 h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center justify-between">
                      <span>{t.name}</span>
                      <span className="text-sm text-orange-600 font-medium">{t.tag}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700 space-y-4 flex-1 flex flex-col">
                    <div className="text-3xl font-bold">{t.price}</div>
                    <p className="flex-1">{t.desc}</p>
                    <Button asChild className="rounded-2xl mt-auto">
                      <a href={t.link} target="_blank" rel="noreferrer">{t.cta}</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 bg-[#FFF4EC]/70">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Вопросы и ответы</h2>
          </motion.div>

          <Accordion type="single" collapsible className="rounded-3xl bg-white border border-orange-100 p-4 sm:p-6">
            <AccordionItem value="item-1">
              <AccordionTrigger value="item-1">Что входит в работу?</AccordionTrigger>
              <AccordionContent value="item-1">
                Текст истории, иллюстрации, вёрстка, печать и подарочная упаковка. В Мини и Премиум включены 1–2 круга правок. В Премиум без ограничений.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger value="item-2">Можно ли править текст и рисунки?</AccordionTrigger>
              <AccordionContent value="item-2">
                Да. Мы дорабатываем историю и иллюстрации, пока вы не скажете: «Вау!». Обычно хватает 1–2 итераций.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger value="item-3">Как отправить фото и факты?</AccordionTrigger>
              <AccordionContent value="item-3">
                В Telegram-чате: мы пришлём короткий бриф с вопросами. Можно ответить даже голосом — мы всё структурируем сами.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger value="item-4">Сколько ждать готовую книгу?</AccordionTrigger>
              <AccordionContent value="item-4">
                Обычно 7 дней на весь процесс изготовления, плюс доставка по России.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger value="item-5">Можно ли сразу подарить книгу адресату?</AccordionTrigger>
              <AccordionContent value="item-5">
                Да! Мы упакуем книгу и отправим её напрямую получателю. Можно добавить персональное поздравление.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger value="item-6">Что если мне не понравится результат?</AccordionTrigger>
              <AccordionContent value="item-6">
                Мы дорабатываем текст и иллюстрации, пока вы не будете довольны. Ваша история должна вызвать улыбку и радость. Но если вам все равно не понравится, до согласования текста можно вернуть деньги без вопросов.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-10 flex flex-col items-center gap-3">
            <Button asChild size="lg" className="rounded-2xl h-12 px-6 text-base whitespace-nowrap">
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center">
                Начать в Telegram
                <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
              </a>
            </Button>
            <div className="text-sm text-gray-600">🔹 Принимаем только 20 заказов в неделю</div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-orange-400 to-amber-300 grid place-items-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span>Воображай</span>
            <span className="text-gray-400">— книги, где оживают истории</span>
          </div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Воображай. Все права защищены.</div>
        </div>
      </footer>
    </div>
  );
}
