"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Wand2, ImageIcon, Palette, Download, CheckCircle2 } from "lucide-react";
import { PricingSection } from "@/components/pricing-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background -z-10" />
        
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                <Sparkles className="w-3 h-3 mr-1" /> AI-Powered Image Generation
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Turn Your Ideas Into <br className="hidden sm:inline" />
                Stunning Images
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                Create beautiful AI-generated artwork in seconds. Just describe what you want and watch PixelForge bring your imagination to life with cutting-edge AI technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            >
              <Link href="/sign-up">
                <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-lg gap-2">
                  Start Creating Free <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 text-lg">
                  See How It Works
                </Button>
              </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
            >
                <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500"/> 5 free credits to start</div>
                <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500"/> No credit card required</div>
                <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500"/> High resolution downloads</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful AI Image Generation</h2>
            <p className="text-muted-foreground text-lg">Everything you need to create amazing AI artwork.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-8 rounded-xl border hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Create stunning images in three simple steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Amazing Art?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-lg">
                Start creating stunning AI images today. Bring your ideas to life with PixelForge's powerful AI image generation.
            </p>
            <Link href="/sign-up">
                <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
                    Get Started For Free
                </Button>
            </Link>
        </div>
      </section>
      <PricingSection />
    </div>
  );
}

const features = [
  {
    title: "Text to Image",
    description: "Describe anything you can imagine and our AI will generate beautiful, high-quality images from your text description.",
    icon: <Wand2 className="w-6 h-6" />,
  },
  {
    title: "Multiple Styles",
    description: "Choose from a variety of artistic styles including realistic, digital art, anime, oil painting, watercolor, and more.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: "High Resolution",
    description: "Generate images in up to 4K resolution. Download your creations in multiple formats for any use case.",
    icon: <ImageIcon className="w-6 h-6" />,
  },
  {
    title: "Lightning Fast",
    description: "Get your images in seconds, not minutes. Our optimized AI pipeline delivers results faster than ever.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Easy Downloads",
    description: "Download all your generated images instantly. No watermarks, no restrictions - your creations are yours.",
    icon: <Download className="w-6 h-6" />,
  },
  {
    title: "Credit-Based System",
    description: "Pay only for what you use with our flexible credit system. Buy packs or subscribe for monthly credits.",
    icon: <Sparkles className="w-6 h-6" />,
  },
];

const steps = [
  {
    title: "Describe Your Vision",
    description: "Enter a text description of the image you want to create. Be as creative and detailed as you like.",
  },
  {
    title: "AI Generates Images",
    description: "Our advanced AI processes your prompt and generates unique, high-quality images in seconds.",
  },
  {
    title: "Download & Enjoy",
    description: "Browse your generated images, pick your favorites, and download them in high resolution.",
  },
];
