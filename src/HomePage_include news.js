import React, { useState } from "react";

function TestingDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(true)}
      tabIndex={0}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button
        className="hover:text-blue-600 focus:outline-none flex items-center"
        type="button"
        onClick={() => setOpen((v) => !v)}
      >
        安全测试
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 bg-white border border-blue-100 rounded-lg shadow-lg min-w-[160px] z-30 animate-fade-in">
          <a href="#services-benchmark" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 whitespace-nowrap">基准测试</a>
          <a href="#services-adv" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 whitespace-nowrap">对抗测试</a>
          <a href="#services-red" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 whitespace-nowrap">红队测试</a>
          <a href="#services-mul" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 whitespace-nowrap">多语言测试</a>
        </div>
      )}
    </div>
  );
}

function MonitorDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(true)}
      tabIndex={0}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button
        className="hover:text-blue-600 focus:outline-none flex items-center"
        type="button"
        onClick={() => setOpen((v) => !v)}
      >
        运行监控
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 bg-white border border-blue-100 rounded-lg shadow-lg min-w-[160px] z-30 animate-fade-in">
          <a href="#monitor-model" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 whitespace-nowrap">模型监控</a>
          <a href="#monitor-agent" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 whitespace-nowrap">智能体监控</a>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <header className="bg-white/90 shadow border-b border-blue-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center"><img src="/img/logo.png" alt="MirrorAILOGO" className="h-10 mr-3" /></div>
          <nav className="hidden md:flex gap-8 text-gray-700">
            <TestingDropdown />
            <MonitorDropdown />
            <a href="#news" className="hover:text-blue-600">新闻中心</a>
            <a href="#about" className="hover:text-blue-600">关于我们</a>
          </nav>
        </div>
      </header>
      <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 py-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-800 drop-shadow">专注人工智能安全测试与运行监控</h1>
          <p className="mb-8 text-lg md:text-xl text-blue-800/80 max-w-xl">让AI更可信，让世界更安心。</p>
          <a href="#services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition">了解更多</a>
        </div>
      </section>
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">我们的产品与服务</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">AI模型安全测试</h3>
              <p className="text-blue-900/80 mb-2">提供大语言模型、视觉模型等多模态AI系统的安全评测，包括对抗攻击、鲁棒性、内容安全等多维度测试。</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">运行时监控</h3>
              <p className="text-blue-900/80 mb-2">基于最新研究成果，以先进的AI运行时监控为核心，实时检测异常行为和潜在威胁，提升模型的运行安全性和合规性。</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">AI系统安全咨询</h3>
              <p className="text-blue-900/80 mb-2">针对企业AI落地场景，提供定制化安全合规咨询与行业标准解读，助力快速过审和风险预防。</p>
            </div>
          </div>
        </div>
      </section>
      <section id="news" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">新闻中心</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-blue-100 rounded-xl p-6 shadow hover:shadow-xl transition">
              <div className="text-sm text-blue-400 mb-2">2025-07-24</div>
              <h3 className="text-lg font-bold mb-2 text-blue-800">镜心智能荣获AI安全创新奖</h3>
              <p className="text-blue-900/80">凭借行业领先的AI安全测试平台，荣获2025年度中国人工智能安全创新奖。</p>
            </div>
            <div className="bg-white border border-blue-100 rounded-xl p-6 shadow hover:shadow-xl transition">
              <div className="text-sm text-blue-400 mb-2">2025-06-12</div>
              <h3 className="text-lg font-bold mb-2 text-blue-800">发布新一代大模型对抗测试工具</h3>
              <p className="text-blue-900/80">自研对抗测试工具XMindSafe发布，助力企业应对AI内容安全挑战。</p>
            </div>
            <div className="bg-white border border-blue-100 rounded-xl p-6 shadow hover:shadow-xl transition">
              <div className="text-sm text-blue-400 mb-2">2025-05-01</div>
              <h3 className="text-lg font-bold mb-2 text-blue-800">AI安全标准与合规研讨会圆满举办</h3>
              <p className="text-blue-900/80">携手业界专家，共同探讨AI安全合规趋势与最佳实践。</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="#" className="text-blue-700 hover:underline">查看更多新闻</a>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-6 text-blue-700">合作伙伴</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="https://dummyimage.com/120x48/dbeafe/1e40af&text=企业A" className="h-12 grayscale opacity-80" alt="企业A" />
            <img src="https://dummyimage.com/120x48/bfdbfe/1e3a8a&text=企业B" className="h-12 grayscale opacity-80" alt="企业B" />
            <img src="https://dummyimage.com/120x48/c7d2fe/2563eb&text=企业C" className="h-12 grayscale opacity-80" alt="企业C" />
            <img src="https://dummyimage.com/120x48/eff6ff/1e40af&text=企业D" className="h-12 grayscale opacity-80" alt="企业D" />
          </div>
        </div>
      </section>
      <section id="about" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">关于镜心智能科技</h2>
            <p className="mb-4 text-blue-900/80">杭州镜心智能科技有限公司专注于人工智能模型安全测试与加固，为大语言模型与视觉AI等提供一站式安全评估与防护服务，已服务于金融、医疗、互联网等多个行业，助力AI安全可信落地。</p>
            <p className="text-blue-500 text-sm">愿景：让每一个AI都更安全、更可信。</p>
          </div>
          <div className="flex-1">
            <img src="https://dummyimage.com/400x280/e0e7ff/1e40af&text=MirrorAI" alt="MirrorAI logo" className="rounded-2xl shadow-lg mx-auto" />
          </div>
        </div>
      </section>
      <div
        className="fixed top-1/2 right-0 z-50 transform -translate-y-1/2"
        onMouseEnter={() => setContactOpen(true)}
        onClick={() => setContactOpen(true)}
        onMouseLeave={() => setContactOpen(false)}
        style={{ width: "56px" }}
      >
        <div className="flex items-center cursor-pointer">
          <div
            className="bg-blue-700 text-white py-2 px-3 rounded-l-lg shadow-lg font-semibold text-sm rotate-90 origin-bottom-right select-none"
            style={{ writingMode: "vertical-lr", letterSpacing: "2px" }}
          >
            联系我们
          </div>
        </div>
        {contactOpen && (
          <div
            className="absolute right-14 top-1/2 -translate-y-1/2 bg-white border border-blue-100 rounded-xl p-8 shadow-2xl w-80 min-w-[320px] transition"
            onMouseEnter={() => setContactOpen(true)}
            onMouseLeave={() => setContactOpen(false)}
            style={{ zIndex: 9999 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-blue-700">联系我们</h3>
              <button
                className="text-blue-400 hover:text-blue-600 text-xl"
                onClick={e => { e.stopPropagation(); setContactOpen(false); }}
                aria-label="关闭"
              >
                ×
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block mb-2 text-blue-900" htmlFor="name">姓名</label>
                <input className="w-full px-4 py-2 rounded bg-white text-blue-900 border border-blue-100" id="name" name="name" type="text" required />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-blue-900" htmlFor="email">邮箱</label>
                <input className="w-full px-4 py-2 rounded bg-white text-blue-900 border border-blue-100" id="email" name="email" type="email" required />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-blue-900" htmlFor="message">留言</label>
                <textarea className="w-full px-4 py-2 rounded bg-white text-blue-900 border border-blue-100" id="message" name="message" rows={4} required></textarea>
              </div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" id="privacy" required className="mr-2" />
                <label htmlFor="privacy" className="text-blue-400 text-sm">我已阅读并同意隐私政策</label>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">提交</button>
            </form>
            <div className="mt-6 text-blue-900/80 text-sm">
              <div>热线：400-xxxx-8888</div>
              <div>邮箱：contact@mirrorai.tech</div>
              <div>地址：杭州市西湖区高科技产业园</div>
            </div>
          </div>
        )}
      </div>
      <footer className="bg-blue-50 py-6 text-center text-blue-400 text-sm border-t border-blue-100">
        &copy; 2025 杭州镜心智能科技有限公司 | MirrorAI.tech | 浙ICP备XXXXXXX号
      </footer>
    </div>
  );
}
