'use strict';
const form = document.querySelector('#consult-form');
const topic = document.querySelector('#topic');
const question = document.querySelector('#question');
const result = document.querySelector('#result');
const summary = document.querySelector('#summary');
const status = document.querySelector('#status');
function invalidate() { result.hidden = true; summary.value = ''; }
document.querySelectorAll('[data-topic]').forEach(link => link.addEventListener('click', () => { topic.value = link.dataset.topic; invalidate(); }));
form.addEventListener('input', invalidate);
form.addEventListener('change', invalidate);
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  summary.value = `您好，我想咨询：${topic.value}。\n我的问题：${question.value.trim() || '希望先了解这个方向的服务内容。'}\n请先说明交流方式；如有费用，也请提前告知。`;
  result.hidden = false;
  status.textContent = '摘要仅在本页生成，尚未发送。请检查后通过你已有的联系渠道发送。';
  result.focus();
});
document.querySelector('#copy').addEventListener('click', async () => {
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(summary.value);
    status.textContent = '已复制，尚未发送。请粘贴至你已有的联系渠道。';
  } catch {
    summary.focus(); summary.select();
    status.textContent = '自动复制不可用，已选中摘要。请长按或使用系统复制功能。';
  }
});
document.querySelector('#clear').addEventListener('click', () => { form.reset(); invalidate(); topic.focus(); });
window.addEventListener('pageshow', event => { if (event.persisted) { form.reset(); invalidate(); } });
