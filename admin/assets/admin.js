(function () {
  function formToObject(form) {
    const obj = {};
    const fd = new FormData(form);
    for (const [rawName, value] of fd.entries()) {
      if (rawName === "_csrf" || rawName === "sort_order" || rawName === "is_published" || rawName === "slug") {
        continue;
      }
      const path = parseName(rawName);
      if (!path.length) continue;
      setPath(obj, path, value);
    }
    return obj;
  }

  function parseName(name) {
    const parts = [];
    name.replace(/\[([^\]]*)\]|^([^\[]+)/g, (_, inner, first) => {
      const piece = first !== undefined ? first : inner;
      if (piece !== "") parts.push(piece);
    });
    return parts[0] === "data" ? parts.slice(1) : parts;
  }

  function setPath(obj, path, value) {
    let cur = obj;
    for (let i = 0; i < path.length - 1; i += 1) {
      const key = path[i];
      const next = path[i + 1];
      const asIndex = /^\d+$/.test(next) || next === "__i__";
      if (cur[key] == null || typeof cur[key] !== "object") {
        cur[key] = asIndex ? [] : {};
      }
      cur = cur[key];
    }
    const last = path[path.length - 1];
    if (last === "_keep" || last === "__i__") return;
    cur[last] = value;
  }

  function text(value) {
    return value == null ? "" : String(value);
  }

  function lines(value) {
    if (Array.isArray(value)) return value.map(text).filter(Boolean);
    return text(value)
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean);
  }

  function renderPreview(data) {
    const body = document.getElementById("cms-preview-body");
    if (!body) return;
    const title = data.hero_title || data.title || data.name || data.author || data.question || "";
    const sub = data.hero_subtitle || data.subtitle || data.description || "";
    const copy = data.body || data.text || data.content || data.answer || "";
    const stats = [];
    if (data.stat1_number) stats.push({ n: data.stat1_number, l: data.stat1_label });
    if (data.stat2_number) stats.push({ n: data.stat2_number, l: data.stat2_label });
    (Array.isArray(data.stats) ? data.stats : []).forEach((s) => {
      if (s && typeof s === "object") stats.push({ n: s.number, l: s.label });
    });
    const cards = []
      .concat(Array.isArray(data.modules) ? data.modules : [])
      .concat(Array.isArray(data.values) ? data.values : [])
      .concat(Array.isArray(data.why_items) ? data.why_items : [])
      .concat(Array.isArray(data.benefits) ? data.benefits : [])
      .concat(Array.isArray(data.usecases) ? data.usecases : [])
      .slice(0, 8);

    body.innerHTML = `
      ${title ? `<h1></h1>` : ""}
      ${sub ? `<p class="lead"></p>` : ""}
      ${copy ? `<p class="copy"></p>` : ""}
      ${stats.length ? `<div class="preview-stats">${stats.map(() => `<div class="preview-stat"><b></b><span></span></div>`).join("")}</div>` : ""}
      ${lines(data.mission_items).length ? `<ul class="mission"></ul>` : ""}
      ${cards.length ? `<div class="preview-cards">${cards.map(() => `<div class="preview-card"><h3></h3><p></p></div>`).join("")}</div>` : ""}
    `;
    const h1 = body.querySelector("h1");
    if (h1) h1.textContent = title;
    const lead = body.querySelector(".lead");
    if (lead) lead.textContent = sub;
    const p = body.querySelector(".copy");
    if (p) p.textContent = copy;
    body.querySelectorAll(".preview-stat").forEach((el, i) => {
      el.querySelector("b").textContent = text(stats[i].n);
      el.querySelector("span").textContent = text(stats[i].l);
    });
    const ul = body.querySelector(".mission");
    if (ul) {
      lines(data.mission_items).forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
    }
    body.querySelectorAll(".preview-card").forEach((el, i) => {
      const card = cards[i] || {};
      el.querySelector("h3").textContent = text(card.title || card.name);
      el.querySelector("p").textContent = text(card.text || card.description);
    });
  }

  function refresh() {
    const form = document.getElementById("cms-editor");
    if (!form) return;
    const data = formToObject(form);
    renderPreview(data);
    const title = form.querySelector('[name="data[title]"]');
    const desc = form.querySelector('[name="data[description]"]');
    const serpTitle = document.querySelector("[data-serp-title]");
    const serpDesc = document.querySelector("[data-serp-desc]");
    if (serpTitle && title) serpTitle.textContent = title.value;
    if (serpDesc && desc) serpDesc.textContent = desc.value;
  }

  document.addEventListener("input", (e) => {
    if (e.target.closest("#cms-editor")) refresh();
  });
  document.addEventListener("click", (e) => {
    const add = e.target.closest("[data-add-repeat]");
    if (add) {
      const root = document.querySelector(add.getAttribute("data-add-repeat"));
      if (!root) return;
      const tpl = root.querySelector("template");
      if (!tpl) return;
      const count = root.querySelectorAll(".repeat-item").length;
      const wrap = document.createElement("div");
      wrap.innerHTML = tpl.innerHTML.replaceAll("__i__", String(count));
      root.appendChild(wrap.firstElementChild);
      refresh();
    }
    const remove = e.target.closest("[data-remove-repeat]");
    if (remove) {
      const item = remove.closest(".repeat-item");
      if (item) item.remove();
      refresh();
    }
  });
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", refresh);
  } else {
    refresh();
  }
})();
