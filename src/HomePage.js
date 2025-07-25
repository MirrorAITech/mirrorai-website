import React, { useState, useRef} from "react";
import { Link } from 'react-router-dom';
import emailjs from "emailjs-com";

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
          <Link to="/benchmark" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 whitespace-nowrap">基准测试</Link>
          <Link to="/adversarial" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 whitespace-nowrap">对抗测试</Link>
          <Link to="/redteaming" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 whitespace-nowrap">红队测试</Link>
          <Link to="/multilanguage" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 whitespace-nowrap">多语言测试</Link>
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
        运行时监控
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 bg-white border border-blue-100 rounded-lg shadow-lg min-w-[160px] z-30 animate-fade-in">
          <Link to="/modelmonitor" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 whitespace-nowrap">模型监控</Link>
          <Link to="/agentmonitor" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 whitespace-nowrap">智能体监控</Link>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const form = useRef();
  const [contactOpen, setContactOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        'service_0vwv4xb',   // 替换为你的 EmailJS 服务 ID
        'template_qhxr8mm',  // 替换为你的 EmailJS 模板 ID
        form.current,
        'prTRqtQ5bhzl2DNzg'    // 替换为你的 EmailJS 公钥
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('邮件发送成功！');
          setSending(false);
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert('邮件发送失败，请稍后重试。');
          setSending(false);
        }
      );
  };

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <header className="bg-white/90 shadow border-b border-blue-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center"><img src="img/logo.png" alt="MirrorAILOGO" className="h-10 mr-3" /></div>
          <nav className="hidden md:flex gap-8 text-gray-700">
            <Link to="/" className="hover:text-blue-600">首页</Link>
            <TestingDropdown />
            <MonitorDropdown />
            <Link to="/aboutus" className="hover:text-blue-600">关于我们</Link>
          </nav>
        </div>
      </header>
      <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 py-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-800 drop-shadow">专注人工智能安全测试与运行时监控</h1>
          <p className="mb-8 text-lg md:text-xl text-blue-800/80 max-w-xl">让AI更可信，让世界更安心。</p>
          <a href="/aboutus#contactus" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition">联系我们</a>
        </div>
      </section>
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">我们的产品与服务</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">安全测试</h3>
              <p className="text-blue-900/80 mb-2">提供针对视觉模型、大语言模型及多模态大模型的安全评测服务，覆盖对抗攻击、鲁棒性、内容安全等多个维度，全面识别潜在风险，提升模型在实际应用中的安全性与可靠性。</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">运行时监控</h3>
              <p className="text-blue-900/80 mb-2">依托先进的AI运行时监控能力，实时识别模型异常行为与智能体违规操作，全面提升系统的运行安全性与合规性。</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">安全咨询</h3>
              <p className="text-blue-900/80 mb-2">针对企业AI落地场景，提供定制化安全合规咨询与行业标准解读，助力快速过审和风险预防。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">关于镜心智能</h2>
            <p className="mb-4 text-blue-900/80">杭州镜心智能科技有限公司专注于人工智能模型与系统的安全测试与运行时监控，面向传统深度学习模型及大模型等提供一站式的安全评估与防护解决方案。公司服务于医疗、能源、具身智能等多个行业，助力人工智能技术实现安全、合规与可信落地。</p>
            <p className="text-blue-500 text-sm">愿景：让每一个AI都更安全、更可信。</p>
          </div>
          <div className="flex-1 h-64 flex justify-end">
            <img src="img/aboutus.png" alt="MirrorAIAbout" className="h-full object-cover rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>
      <section className="bg-white border-t border-blue-100 py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-blue-700 mb-4">安全测试</h3>
            <ul className="space-y-2 text-blue-900">
              <li>
                <Link to="/benchmark" className="hover:text-blue-600 underline">基准测试</Link>
              </li>
              <li>
                <Link to="/adversarial" className="hover:text-blue-600 underline">对抗测试</Link>
              </li>
              <li>
                <Link to="/redteaming" className="hover:text-blue-600 underline">红队测试</Link>
              </li>
              <li>
                <Link to="/multilanguage" className="hover:text-blue-600 underline">多语言测试</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-700 mb-4">运行时监控</h3>
            <ul className="space-y-2 text-blue-900">
              <li>
                <Link to="/modelmonitor" className="hover:text-blue-600 underline">模型监控</Link>
              </li>
              <li>
                <Link to="/agentmonitor" className="hover:text-blue-600 underline">智能体监控</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-700 mb-4">联系我们</h3>
            <ul className="space-y-2 text-blue-900">
              <li>
                <a href="mailto:mirroraitech@163.com" className="hover:text-blue-600 underline">邮箱：mirroraitech@163.com</a>
              </li>
              <li>
                <a href="https://map.baidu.com/search/杭州市余杭区五常街道西溪乐天城?querytype=s&da_src=shareurl&wd=杭州市余杭区五常街道西溪乐天城" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 underline">
                  地址：杭州市余杭区五常街道西溪乐天城
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div
        className="fixed top-2/3 right-0 z-50 transform -translate-y-1/2"
        onMouseEnter={() => setContactOpen(true)}
        onClick={() => setContactOpen(true)}
        onMouseLeave={() => setContactOpen(false)}
        style={{ width: "56px" }}
      >
        <div className="flex items-center cursor-pointer">
          <div
            className="bg-blue-700 text-white py-2 px-3 rounded-l-lg shadow-lg font-semibold text-sm origin-bottom-right select-none"
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
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label className="block mb-2 text-blue-900" htmlFor="name">姓名</label>
                <input className="w-full px-4 py-2 rounded bg-white text-blue-900 border border-blue-100" id="name" name="name" type="text" required disabled={sending}/>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-blue-900" htmlFor="email">邮箱</label>
                <input className="w-full px-4 py-2 rounded bg-white text-blue-900 border border-blue-100" id="email" name="email" type="email" required disabled={sending}/>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-blue-900" htmlFor="title">标题</label>
                <input className="w-full px-4 py-2 rounded bg-white text-blue-900 border border-blue-100" id="title" name="title" type="title" required disabled={sending}/>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-blue-900" htmlFor="message">留言</label>
                <textarea className="w-full px-4 py-2 rounded bg-white text-blue-900 border border-blue-100" id="message" name="message" rows={4} required disabled={sending}></textarea>
              </div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" id="privacy" required disabled={sending} className="mr-2" />
                <label htmlFor="privacy" className="text-blue-400 text-sm">
                  我已阅读并同意
                  <button
                    type="button"
                    onClick={() => setShowPolicy(true)}
                    className="ml-1 underline text-blue-600"
                  >
                    隐私政策
                  </button>
                </label>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">提交</button>
            </form>
          </div>
        )}
      </div>

      {showPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg mx-4">
            <h3 className="text-xl font-bold mb-4">隐私政策</h3>
            <div className="space-y-2 text-gray-700 text-sm max-h-64 overflow-y-auto">
              <p>杭州镜心智能科技有限公司（MirrorAI.tech）重视您的隐私和个人信息保护。本政策适用于本表单所收集的信息，包括您的姓名、邮箱地址、标题及留言内容。</p>
              <p>1. 信息用途：上述信息仅用于处理您提交的咨询、问题或反馈，并用于向您回复相关结果。</p>
              <p>2. 保留期限：我们会将您的数据保留至意图完成或最长不超过两年，之后将安全删除或匿名化处理。</p>
              <p>3. 共享条款：未经您明确同意，我们不会将您的个人信息用于其他用途，亦不会与第三方共享。</p>
              <p>4. 权利保障：您有权随时访问、更正或删除您的个人信息。如需行使相关权利，请通过邮箱联系我们：mirroraitech@163.com。</p>
              <p>5. 政策更新：我们可能会根据法律法规变更或服务调整不定期更新本政策，更新后将公示于官方网站。</p>
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={() => setShowPolicy(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >关闭
              </button>
            </div>
          </div>
        </div>
      )}


      <footer className="bg-blue-50 py-6 text-center text-blue-400 text-sm border-t border-blue-100">
        &copy; 2025 杭州镜心智能科技有限公司 | MirrorAI.tech
      </footer>
    </div>
  );
}
