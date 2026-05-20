'use client'

import { useState, useEffect, useRef } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const el = formRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.remove('opacity-0', 'translate-y-[30px]')
          entries[0].target.classList.add('animate-fade-up')
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-surface-raised max-w-full px-6 py-[100px]">
      <h2 className="text-[clamp(28px,5vw,48px)] font-normal tracking-[0.05em] text-white text-center mb-[60px] relative after:block after:w-[60px] after:h-0.5 after:bg-accent after:mx-auto after:mt-4">
        联系我
      </h2>
      <div className="max-w-[600px] mx-auto">
        {sent ? (
          <p className="text-center text-accent text-[15px] py-5">消息已发送，我会尽快回复你！</p>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="reveal-item opacity-0 translate-y-[30px] flex flex-col gap-5">
            <input type="text" name="name" placeholder="你的名字" required
              className="w-full px-4 py-[14px] bg-surface-input border border-border-dim text-text-secondary font-inherit text-sm rounded-sm outline-none transition-colors duration-300 focus:border-accent" />
            <input type="email" name="email" placeholder="邮箱地址" required
              className="w-full px-4 py-[14px] bg-surface-input border border-border-dim text-text-secondary font-inherit text-sm rounded-sm outline-none transition-colors duration-300 focus:border-accent" />
            <input type="text" name="subject" placeholder="主题"
              className="w-full px-4 py-[14px] bg-surface-input border border-border-dim text-text-secondary font-inherit text-sm rounded-sm outline-none transition-colors duration-300 focus:border-accent" />
            <textarea name="message" placeholder="告诉我你的想法…" required
              className="w-full px-4 py-[14px] bg-surface-input border border-border-dim text-text-secondary font-inherit text-sm rounded-sm outline-none transition-colors duration-300 focus:border-accent min-h-[140px] resize-y" />
            <button type="submit"
              className="self-start px-10 py-[14px] bg-accent hover:bg-accent-hover border-none text-surface text-[13px] tracking-[0.12em] uppercase cursor-pointer rounded-sm transition-colors duration-300">
              发送消息
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
