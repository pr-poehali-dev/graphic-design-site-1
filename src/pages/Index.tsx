import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioProjects = [
    {
      id: 1,
      title: 'Абстрактная композиция',
      category: 'Графический дизайн',
      image: 'https://cdn.poehali.dev/projects/1f009592-832c-476f-adc3-adcdebea0d07/files/733578b8-7012-4815-b7b3-ec5a3f5b9827.jpg'
    },
    {
      id: 2,
      title: 'Фирменный стиль',
      category: 'Брендинг',
      image: 'https://cdn.poehali.dev/projects/1f009592-832c-476f-adc3-adcdebea0d07/files/542dcce1-1f0c-460e-88ad-7c0764838c50.jpg'
    },
    {
      id: 3,
      title: 'Цифровая иллюстрация',
      category: 'Иллюстрация',
      image: 'https://cdn.poehali.dev/projects/1f009592-832c-476f-adc3-adcdebea0d07/files/61b211e8-cd19-432f-a2ed-0db4fc4e7f7f.jpg'
    }
  ];

  const services = [
    {
      icon: 'Palette',
      title: 'Графический дизайн',
      description: 'Создание уникальных визуальных решений для вашего бренда'
    },
    {
      icon: 'Sparkles',
      title: 'Брендинг',
      description: 'Разработка фирменного стиля и айдентики с нуля'
    },
    {
      icon: 'Layers',
      title: 'Иллюстрация',
      description: 'Оригинальные иллюстрации для любых целей'
    },
    {
      icon: 'Smartphone',
      title: 'UI/UX дизайн',
      description: 'Дизайн интерфейсов для веб и мобильных приложений'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              DESIGN
            </div>
            <div className="hidden md:flex gap-8">
              {['home', 'portfolio', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'services' && 'Услуги'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-cyan-500/10" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-pink-500 to-cyan-500 bg-clip-text text-transparent leading-tight">
                GRAPHIC DESIGN
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                Создаю яркие визуальные решения, которые выделяют ваш бренд среди конкурентов
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-gradient-to-r from-primary to-pink-500 hover:opacity-90 transition-opacity"
                >
                  Смотреть портфолио
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-2 hover:bg-primary/5"
                >
                  Связаться
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
          </div>
        </section>

        <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Избранные работы из моего портфолио
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Button 
                      variant="ghost" 
                      className="mt-4 group-hover:text-primary transition-colors"
                    >
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Полный спектр дизайнерских услуг для вашего бизнеса
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="group p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-cyan-500/5">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
                <p className="text-lg text-muted-foreground">
                  Готов обсудить ваш проект. Напишите мне!
                </p>
              </div>
              <Card className="p-8 border-2 shadow-xl">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" className="border-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <Input type="email" placeholder="ivan@example.com" className="border-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте..." 
                      rows={6}
                      className="border-2 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-pink-500 hover:opacity-90 transition-opacity"
                    size="lg"
                  >
                    Отправить сообщение
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </Card>
              <div className="mt-12 flex justify-center gap-6">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                  <Icon name="Instagram" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                  <Icon name="Linkedin" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                  <Icon name="Mail" size={24} />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              DESIGN
            </div>
            <p className="text-sm text-muted">
              © 2024 Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
