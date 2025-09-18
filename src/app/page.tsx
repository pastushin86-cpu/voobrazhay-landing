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
const GALLERY = [
  "/gallery/family-box.jpg",   // Подарочная коробка (загруженное фото)
  "/gallery/child-book.jpg",   // Детская книга с девочкой на метле
  "/gallery/love-book.jpg",    // Романтическая история пары
  "/gallery/unicorn-book.jpg", // Детская история с единорогом
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
            <Badge variant="outline" className="border-orange-200 text-orange-700">Изготовление 5-7 дней</Badge>
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
              Книга, где главный герой — <span className="text-orange-600">ваш ребенок, пара или семья</span>
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
                <img src={src} alt="Пример книги Воображай" className="h-48 sm:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Книга под ваши сценарии</h2>
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
            {grids.map((src, i) => (
              <motion.div key={i} {...fadeUp} className="relative group overflow-hidden rounded-3xl shadow-sm">
                <img src={src} alt={`Разворот ${i + 1}`} className="h-44 sm:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Бережно. Красиво. По‑семейному</h2>
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
                  <p>Сюжет строится на ваших героях, местах и событиях. Без шаблонов и штампов.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeUp}>
              <Card className="rounded-3xl border-orange-100 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <ImageIcon className="h-5 w-5 text-orange-600" /> Акварель + ИИ‑иллюстрации
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-2">
                  <p>Иллюстрации деликатно похожи на вас и передают настроение момента.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeUp}>
              <Card className="rounded-3xl border-orange-100 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Crown className="h-5 w-5 text-orange-600" /> Типографское качество
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 space-y-2">
                  <p>Плотная бумага, чистая печать, ровная верстка — книга «из коробки» выглядит как подарок.</p>
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
  GALLERY[0],
  GALLERY[2],
  GALLERY[1]
].map((src, i) => (
              <motion.div key={i} {...fadeUp} className="relative group overflow-hidden rounded-3xl shadow-sm">
                <img src={src} alt={`Упаковка ${i+1}`} className="h-52 w-full object-cover" />
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-center text-gray-700">Срок изготовления обычно 7–10 дней. Доставка по РФ и миру — по запросу.</div>
        </div>
      </section>

      {/* О нас + Гарантии и приватность */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-start">
          <motion.div {...fadeUp}>
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">О нас</Badge>
            <h3 className="mt-3 text-2xl font-bold">Почему мы делаем «Воображай»</h3>
            <p className="mt-3 text-gray-700">Мы верим, что лучшие подарки — это истории про нас самих. Поэтому бережно собираем факты, пишем тёплые тексты и создаём иллюстрации, которые хочется рассматривать. Книга остаётся дома надолго — и к ней возвращаются.</p>
          </motion.div>
          <motion.div {...fadeUp}>
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Гарантии и приватность</Badge>
            <div className="mt-3 space-y-3 text-gray-700">
              <div className="flex items-start gap-3"><Check className="h-5 w-5 text-orange-600 mt-0.5" />Мы дорабатываем, пока вы не скажете: «Вау!»</div>
              <div className="flex items-start gap-3"><Shield className="h-5 w-5 text-orange-600 mt-0.5" />Фото и бриф используются только для создания книги и удаляются после печати.</div>
              <div className="flex items-start gap-3"><Gift className="h-5 w-5 text-orange-600 mt-0.5" />Можно добавить персональное поздравление на первой странице.</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Отзывы — текстовые с аватарками */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">Отзывы</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Слова, от которых теплее</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{
              name: "Ирина и Андрей",
              role: "Санкт‑Петербург",
              quote: "Дарили сыну на день рождения. Он листал и смеялся, потому что узнавал наши места и фразы.",
              img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=256&auto=format&fit=crop",
            },{
              name: "Наташа",
              role: "Москва",
              quote: "Текст — мягкий и живой, без штампов. Иллюстрации будто акварелью — очень уютно.",
              img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=256&auto=format&fit=crop",
            },{
              name: "Алексей",
              role: "Новосибирск",
              quote: "Сделали к годовщине. Теперь эта книга лежит на виду — гости всегда листают и спрашивают, где сделали.",
              img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=256&auto=format&fit=crop",
            }].map((t, i) => (
              <motion.div key={i} {...fadeUp}>
                <Card className="rounded-3xl border-orange-100 h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
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
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Выберите формат подарка</h2>
            <p className="mt-2 text-gray-600">Цены‑маяки — под реальную задачу адаптируем объём и детали.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[{
              name: "Мини",
              price: "5 900 ₽",
              desc: "Мягкая обложка, A5, 20–30 страниц, до 10–15 иллюстраций",
              cta: "Выбрать «Мини»",
            },{
              name: "Макси",
              price: "9 900 ₽",
              desc: "Твёрдая обложка, A4, 40–50 страниц, до 20–25 иллюстраций",
              cta: "Выбрать «Макси»",
            },{
              name: "Премиум",
              price: "14 900 ₽",
              desc: "Подарочная коробка, тиснение, расширенная редактура и иллюстрации",
              cta: "Выбрать «Премиум»",
            }].map((t) => (
              <motion.div key={t.name} {...fadeUp}>
                <Card className="rounded-3xl border-orange-100 h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">{t.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700 space-y-4 flex-1">
                    <div className="text-3xl font-bold">{t.price}</div>
                    <p>{t.desc}</p>
                    <Button asChild className="rounded-2xl mt-2">
                      <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">{t.cta}</a>
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
              <AccordionTrigger>Что входит в работу?</AccordionTrigger>
              <AccordionContent>
                Текст истории, иллюстрации, верстка, печать и подарочная упаковка. Правки — 1–2 круга.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Можно ли править текст и рисунки?</AccordionTrigger>
              <AccordionContent>
                Да. Мы дорабатываем, пока вы не скажете «Вау!». Обычно хватает 1–2 итераций.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Как отправить фото и факты?</AccordionTrigger>
              <AccordionContent>
                В Telegram‑чате: мы пришлём бриф и форму загрузки. Можно ответить голосом — мы всё структурируем.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Сроки и доставка</AccordionTrigger>
              <AccordionContent>
                Обычно 7–10 дней на всё. Доставка по РФ и миру — по запросу.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Безопасность данных</AccordionTrigger>
              <AccordionContent>
                Фото и бриф используются только для создания вашей книги и удаляются после печати.
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
            <div className="text-sm text-gray-600">🔹 Принимаем ограниченное число заказов — чтобы сохранить качество</div>
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
            <span className="text-gray-400">— книги, которые хочется держать дома</span>
          </div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Воображай. Все права защищены.</div>
        </div>
      </footer>
    </div>
  );
}
