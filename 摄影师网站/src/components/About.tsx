import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal(0.2)

  return (
    <section id="about" className="bg-surface-raised max-w-full px-6 py-[100px]">
      <h2 className="text-[clamp(28px,5vw,48px)] font-normal tracking-[0.05em] text-white text-center mb-[60px] relative after:block after:w-[60px] after:h-0.5 after:bg-accent after:mx-auto after:mt-4">
        关于我
      </h2>
      <div ref={ref} className="max-w-[900px] mx-auto flex gap-[60px] items-center max-md:flex-col max-md:text-center">
        <div className="reveal-item opacity-0 translate-y-[30px] shrink-0 w-[280px] max-md:w-[200px]">
          <img
            src="https://images.unsplash.com/photo-1554048612-b5a3e8a8b0e9?w=400&q=80"
            alt="摄影师"
            loading="lazy"
            className="w-full aspect-[3/4] object-cover rounded-sm"
          />
        </div>
        <div className="reveal-item opacity-0 translate-y-[30px] flex-1">
          <p className="text-[15px] text-text-muted mb-5">
            你好，我是林墨，一名专注于人像与风光摄影的自由摄影师。过去八年间，我用镜头捕捉光影与情感的交汇——从城市的霓虹到山野的静谧，从婚礼的悸动到旅人的凝望。
          </p>
          <p className="text-[15px] text-text-muted mb-5">
            我相信每一张照片都在讲一个故事。我的工作就是帮你把那些转瞬即逝的真实，定格成可以触碰的永恒。
          </p>
          <p className="text-[15px] text-text-muted mb-5">目前常驻上海，接受全球旅拍邀约。</p>
          <div className="font-[Georgia] italic text-accent text-[22px] mt-[30px]">&mdash; Lin Mo</div>
        </div>
      </div>
    </section>
  )
}
