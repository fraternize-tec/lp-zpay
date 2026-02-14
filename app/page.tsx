"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, BarChart3, FileText, Zap } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ZpayLanding() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yGlow = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityGlow = useTransform(scrollYProgress, [0, 1], [0.4, 0]);

  const floatY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const floatRotate = useTransform(scrollYProgress, [0, 1], [0, -8]);

  return (
    <main
      className={`min-h-screen bg-[#F7F5F2] text-[#002B36] overflow-hidden`}
    >
      {/* HERO PARALLAX + MOCKUP */}
      <section
        ref={heroRef}
        className="relative px-6 py-32 text-center bg-gradient-to-b from-[#002B36] to-[#001F27] text-white overflow-hidden"
      >
        {/* LOGO */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2">
          <Image
            src="/logo.png"
            alt="Zpay"
            width={140}
            height={40}
            priority
          />
        </div>

        {/* Glow */}
        <motion.div
          style={{ y: yGlow, opacity: opacityGlow }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#CC5500]/20 blur-3xl rounded-full"
        />

        <motion.div
          style={{ y: floatY, rotate: floatRotate }}
          className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          {/* perspective cria o efeito 3D real */}
          <div className="perspective-[1200px]">
            <div
              className="
        relative
        w-[320px] h-[640px]
        rounded-[42px]
        bg-black
        shadow-[0_40px_80px_rgba(0,0,0,0.5)]
        border border-gray-800
        overflow-hidden
        transform
        rotate-x-[6deg]
        -rotate-y-[12deg]
      "
            >
              {/* IMAGEM DO APP */}
              <Image
                src="/app-preview.png"
                alt="App Zpay"
                fill
                className="object-cover"
                priority
              />

              {/* OVERLAY ESCURO SUAVE PARA MELHORAR CONTRASTE */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

              {/* BRILHO DE TELA (efeito premium) */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)] opacity-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto relative z-10  mt-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-[var(--font-poppins)]">
            Chega de fichas, lentidão no atendimento e falta de controle.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 font-[var(--font-inter)]">
            O <strong>Zpay</strong> é o sistema cashless que traz mais segurança,
            agilidade e organização para o seu evento — do início ao fim.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const phone = "5561998159083";
                const message = encodeURIComponent(
                  "Olá! Quero solicitar uma demonstração do Zpay para meu evento."
                );

                window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
              }}
            >
              <Button className="text-lg px-10 py-6 rounded-2xl bg-[#CC5500] hover:bg-[#b84b00] shadow-xl hover:scale-105 transition font-[var(--font-poppins)]">
                QUERO CONHECER O ZPAY
              </Button>
            </form>
            <p className="text-sm text-gray-300 font-[var(--font-inter)]">
              Sem compromisso • Atendimento rápido • Suporte durante o evento
            </p>
          </div>
        </motion.div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 font-[var(--font-poppins)]"
        >
          Tudo que você precisa para um evento eficiente
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="rounded-2xl border-0 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white/80 backdrop-blur">
                <CardContent className="p-8 text-center space-y-4">
                  <b.icon className="mx-auto h-12 w-12 text-[#CC5500]" />
                  <h3 className="font-semibold text-lg font-[var(--font-poppins)]">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-[var(--font-inter)]">
                    {b.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-28 max-w-4xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 font-[var(--font-poppins)]"
        >
          Perguntas frequentes
        </motion.h2>

        <div className="space-y-6">
          {faq.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-b pb-4"
            >
              <h3 className="font-semibold text-lg font-[var(--font-poppins)]">
                {f.q}
              </h3>
              <p className="text-gray-600 mt-2 font-[var(--font-inter)]">
                {f.a}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-28 bg-[#002B36] text-white text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[var(--font-poppins)]">
            Leve mais segurança e controle para o seu evento
          </h2>

          <p className="text-lg text-gray-200 mb-8 font-[var(--font-inter)]">
            Evite perdas, ganhe agilidade e tenha total visibilidade financeira.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              const phone = "5561998159083";
              const message = encodeURIComponent(
                "Olá! Quero solicitar uma demonstração do Zpay para meu evento."
              );

              window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
            }}
          >
            <Button
              type="submit"
              className="text-lg px-10 py-6 rounded-2xl bg-[#CC5500] hover:bg-[#b84b00] shadow-xl hover:scale-105 transition font-[var(--font-poppins)]"
            >
              SOLICITAR DEMONSTRAÇÃO
            </Button>
          </form>


          <p className="mt-4 text-sm text-gray-300 font-[var(--font-inter)]">
            Fale com nossa equipe e veja como o Zpay pode funcionar no seu evento.
          </p>
        </motion.div>
      </section>

      <footer className="text-center py-10 text-sm text-gray-500 font-[var(--font-inter)]">
        © {new Date().getFullYear()} Zpay. Todos os direitos reservados.
      </footer>
    </main>
  );
}

const metrics = [
  { value: "+500", label: "Eventos atendidos" },
  { value: "+1M", label: "Transações processadas" },
  { value: "100%", label: "Controle financeiro em tempo real" },
];

const benefits = [
  { icon: ShieldCheck, title: "Mais segurança", desc: "Sem fichas circulando e com controle total das transações." },
  { icon: BarChart3, title: "Gestão em tempo real", desc: "Acompanhe vendas, saldos e desempenho do evento ao vivo." },
  { icon: FileText, title: "Relatórios completos", desc: "Dados claros para prestação de contas e tomada de decisão." },
  { icon: Zap, title: "Operação simples", desc: "Sistema prático, rápido e fácil de usar para a equipe." },
];

const faq = [
  { q: "O sistema é fácil de usar?", a: "Sim. O Zpay foi desenvolvido para ser simples e intuitivo, mesmo para quem nunca usou um sistema cashless." },
  { q: "Consigo acompanhar as vendas em tempo real?", a: "Sim. Todas as vendas, saldos e movimentações ficam disponíveis no app ou painel online." },
  { q: "Recebo relatórios após o evento?", a: "Sim. Você recebe relatórios detalhados para controle e prestação de contas." },
  { q: "O Zpay atende eventos pequenos?", a: "Sim. O sistema se adapta a eventos de diferentes portes." },
];
