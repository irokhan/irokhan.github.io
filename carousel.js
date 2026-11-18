const screenshotNames = ["swarm", "town", "boss", "puzzle", "trip", "build", "tavern", "minigame"];
const carouselDelay = 5000;

class ScreenshotCarousel {
  constructor(section) {
    this.section = section;
    this.viewport = section.querySelector("#screenshots");
    this.dots = section.querySelector("#carousel-dots");
    this.previous = section.querySelector("#carousel-prev");
    this.next = section.querySelector("#carousel-next");
    this.rotation = section.querySelector("#carousel-play");
    this.motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.playing = !this.motion.matches;
    this.visible = false;
    this.hovering = false;
    this.page = 0;

    this.previous.addEventListener("click", () => this.step(-1));
    this.next.addEventListener("click", () => this.step(1));
    this.rotation.addEventListener("click", () => this.setPlaying(!this.playing));
    this.section.addEventListener("focusin", (event) => {
      if (event.target.matches(":focus-visible")) this.setPlaying(false);
    });
    this.section.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "mouse") return;
      this.hovering = true;
      this.schedule();
    });
    this.section.addEventListener("pointerleave", () => {
      this.hovering = false;
      this.schedule();
    });
    this.viewport.addEventListener("scroll", () => this.onScroll(), { passive: true });
    this.motion.addEventListener("change", () => {
      if (this.motion.matches) this.setPlaying(false);
    });
    document.addEventListener("visibilitychange", () => this.schedule());

    new ResizeObserver(() => {
      const cards = this.cardsPerPage();
      if (this.locale && cards !== this.cards) this.render(this.page * this.cards);
    }).observe(this.viewport);
    new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting;
      this.schedule();
    }, { threshold: .25 }).observe(section);
  }

  setLocale(code, locale) {
    this.code = code;
    this.locale = locale;
    const [previous, next] = locale.carousel;
    this.section.setAttribute("aria-label", locale.gallery);
    this.previous.setAttribute("aria-label", previous);
    this.next.setAttribute("aria-label", next);
    this.section.hidden = false;
    this.setPlaying(this.playing);
    this.render(0);
  }

  cardsPerPage() {
    return Number(getComputedStyle(this.section).getPropertyValue("--cards-per-page"));
  }

  render(firstCard) {
    this.cards = this.cardsPerPage();
    const pages = [];
    const controls = [];
    const pageCount = Math.ceil(screenshotNames.length / this.cards);
    const numbers = new Intl.NumberFormat(this.code);
    for (let page = 0; page < pageCount; page += 1) {
      const group = document.createElement("div");
      group.className = "carousel-page";
      const start = page * this.cards;
      for (const [index, name] of screenshotNames.slice(start, start + this.cards).entries()) {
        const img = document.createElement("img");
        img.width = 576;
        img.height = 1024;
        img.decoding = "async";
        img.loading = page === 0 ? "eager" : "lazy";
        img.alt = this.locale.shots[start + index];
        img.src = `screens/${this.code}-${name}.webp`;
        group.append(img);
      }
      pages.push(group);
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel-dot";
      dot.setAttribute("aria-label", `${numbers.format(page + 1)} / ${numbers.format(pageCount)}`);
      dot.addEventListener("click", () => this.go(page));
      controls.push(dot);
    }
    this.viewport.replaceChildren(...pages);
    this.dots.replaceChildren(...controls);
    this.go(Math.floor(firstCard / this.cards), "instant");
  }

  setPlaying(playing) {
    this.playing = playing;
    const [, , pause, play] = this.locale.carousel;
    this.rotation.setAttribute("aria-label", playing ? pause : play);
    this.rotation.querySelector("span").textContent = playing ? "❚❚" : "▶";
    this.schedule();
  }

  go(page, behavior = this.motion.matches ? "instant" : "smooth") {
    this.page = page;
    this.updateDots();
    this.viewport.scrollTo({ left: page * this.viewport.clientWidth, behavior });
    this.schedule();
  }

  step(direction) {
    const count = this.dots.children.length;
    const target = this.page + direction;
    if (target < 0 || target >= count) {
      this.go((target + count) % count, "instant");
    } else {
      this.go(target);
    }
  }

  onScroll() {
    window.clearTimeout(this.scrollTimer);
    this.scrollTimer = window.setTimeout(() => {
      if (!this.viewport.clientWidth) return;
      this.page = Math.round(this.viewport.scrollLeft / this.viewport.clientWidth);
      this.updateDots();
      this.schedule();
    }, 150);
  }

  updateDots() {
    for (const [index, dot] of Array.from(this.dots.children).entries()) {
      dot.setAttribute("aria-current", String(this.page === index));
    }
  }

  schedule() {
    window.clearTimeout(this.timer);
    if (!this.playing || this.hovering || !this.visible || document.hidden) return;
    this.timer = window.setTimeout(() => this.step(1), carouselDelay);
  }
}

const screenshotCarousel = new ScreenshotCarousel(document.querySelector("#carousel"));
