import { jsxDEV } from "react/jsx-dev-runtime";
import { useState, useEffect } from "react";
import { Zap, ArrowRight, Battery, Moon, FlaskConical, ShieldCheck, Star, Quote, Plus, CheckCircle2, Leaf, Lock, Truck, Headphones, Globe } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
const testimonialImage1 = "/images/testimonial_1.webp";
const testimonialImage2 = "/images/testimonial_2.jpg";
const testimonialImage3 = "/images/testimonial_3.jpg";
const ingredients = [
  { name: "Saw Palmetto", desc: "Supports healthy urinary flow and prostate size." },
  { name: "Beta-Sitosterol", desc: "Clinically proven to improve urinary symptoms." },
  { name: "Zinc", desc: "Essential mineral for prostate cell health and immunity." },
  { name: "Pumpkin Seed Extract", desc: "Rich in antioxidants that reduce inflammation." },
  { name: "Pygeum Africanum", desc: "Traditionally used to support bladder health." },
  { name: "Lycopene", desc: "Powerful antioxidant found in tomatoes for cell protection." }
];
const AFFILIATE_LINK = "https://b26eayk3ju5q8z7o68y3--bu0x.hop.clickbank.net/?&extclid=abhi135";
const testimonials = [
  {
    name: "Arthur P. (Texas)",
    age: 68,
    text: "At 68, I was waking up 4 or 5 times every single night. It was exhausting. I started taking Prosta Vive and the difference is complete night and day. Now I sleep solidly for 6 to 7 hours straight. True blessing!",
    rating: 5,
    image: testimonialImage1
  },
  {
    name: "Douglas M. (Florida)",
    age: 63,
    text: "I was extremely skeptical, but after ordering from the Prosta Vive official website, the results blew me away. My urine flow is strong and steady again, and I don't feel that constant nagging urgency anymore.",
    rating: 5,
    image: testimonialImage2
  },
  {
    name: "Richard E. (Ohio)",
    age: 71,
    text: "Over 70 and my quality of sleep has never been better. Prosta Vive worked remarkably well for my stream flow and pattern. Having an ironclad 180-day guarantee made it a risk-free trial, but I am keeping every bottle!",
    rating: 5,
    image: testimonialImage3
  }
];
const purchaseNotifications = [
  { name: "William S.", location: "Houston, TX", bottles: 6, time: "4 minutes ago" },
  { name: "Robert H.", location: "Miami, FL", bottles: 3, time: "11 minutes ago" },
  { name: "James D.", location: "Columbus, OH", bottles: 6, time: "17 minutes ago" },
  { name: "Arthur P.", location: "Dallas, TX", bottles: 6, time: "24 minutes ago" },
  { name: "Douglas M.", location: "Orlando, FL", bottles: 3, time: "31 minutes ago" },
  { name: "Richard E.", location: "Cincinnati, OH", bottles: 1, time: "43 minutes ago" },
  { name: "Thomas K.", location: "Phoenix, AZ", bottles: 6, time: "50 minutes ago" }
];
function App() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(null);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  useEffect(() => {
    let index = 0;
    const initialTimer = setTimeout(() => {
      setCurrentNotification(purchaseNotifications[index]);
    }, 5e3);
    const interval = setInterval(() => {
      index = (index + 1) % purchaseNotifications.length;
      setCurrentNotification(purchaseNotifications[index]);
    }, 15e3);
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    if (currentNotification) {
      setIsNotificationVisible(true);
      const hideTimer = setTimeout(() => {
        setIsNotificationVisible(false);
      }, 6e3);
      return () => clearTimeout(hideTimer);
    }
  }, [currentNotification == null ? void 0 : currentNotification.name]);
  const productWithIngredientsImage = "/images/prostavive-bottle-ingredients.png";
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-white font-sans text-brand-navy overflow-x-hidden", children: [
    /* @__PURE__ */ jsxDEV("header", { className: "bg-brand-navy text-white py-4 px-6 fixed w-full z-[100] flex justify-between items-center backdrop-blur-md bg-opacity-90 border-b border-white/5", children: [
      /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "text-2xl font-black tracking-tighter uppercase hover:opacity-80 transition-opacity", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-blue-400", children: "Prosta" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-white", children: "Vive" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("nav", { className: "hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest items-center", children: [
        /* @__PURE__ */ jsxDEV("a", { href: "#review", className: "hover:text-blue-400 transition-colors", onClick: (e) => {
          var _a;
          e.preventDefault();
          (_a = document.getElementById("review")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
        }, children: "Does It Work?" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "hover:text-blue-400 transition-colors", children: "Science" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "hover:text-blue-400 transition-colors", children: "Ingredients" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "hover:text-blue-400 transition-colors", children: "Reviews" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "bg-yellow-400 text-brand-navy px-6 py-2 rounded-full hover:bg-yellow-300 transition-colors", children: "Order Now" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 135,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          className: "md:hidden text-white p-2",
          onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
          children: /* @__PURE__ */ jsxDEV("div", { className: "w-6 h-5 relative flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxDEV("span", { className: `w-full h-0.5 bg-white transition-all transform ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}` }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 144,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: `w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? "opacity-0" : ""}` }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 145,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: `w-full h-0.5 bg-white transition-all transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}` }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 146,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 143,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 139,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          className: "absolute top-full left-0 w-full bg-brand-navy border-b border-white/10 overflow-hidden md:hidden shadow-2xl",
          children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col p-6 gap-6 text-lg font-black uppercase tracking-widest text-center", children: [
            /* @__PURE__ */ jsxDEV("a", { href: "#review", onClick: (e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              setTimeout(() => {
                var _a;
                return (_a = document.getElementById("review")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }, className: "py-4 border-b border-white/5 text-white", children: "Does It Work?" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 160,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", onClick: () => setIsMobileMenuOpen(false), className: "py-4 border-b border-white/5 text-white", children: "Science" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 161,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", onClick: () => setIsMobileMenuOpen(false), className: "py-4 border-b border-white/5 text-white", children: "Ingredients" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 162,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", onClick: () => setIsMobileMenuOpen(false), className: "py-4 border-b border-white/5 text-white", children: "Reviews" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 163,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", onClick: () => setIsMobileMenuOpen(false), className: "bg-yellow-400 text-brand-navy py-4 rounded-2xl block", children: "Order Now" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 164,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 159,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 153,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black text-white", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-1/4 left-1/4 w-96 h-96 bg-brand-navy rounded-full blur-[120px]" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 174,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-navy rounded-full blur-[120px]" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 175,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 173,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            className: "text-center lg:text-left",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 bg-brand-navy/40 border border-blue-50/30 px-4 py-2 rounded-full text-blue-300 text-xs font-black uppercase tracking-[0.2em] mb-8", children: [
                /* @__PURE__ */ jsxDEV(Zap, { size: 14 }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 186,
                  columnNumber: 15
                }, this),
                " Prosta Vive Official Website"
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 185,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl lg:text-7xl font-serif font-black leading-tight mb-8", children: [
                "Reclaim Your ",
                /* @__PURE__ */ jsxDEV("span", { className: "text-blue-400", children: "Prostate Vitality" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 189,
                  columnNumber: 28
                }, this),
                " & Sleep With Prosta Vive®"
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 188,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-blue-100/70 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0", children: [
                "Welcome to the authorized ",
                /* @__PURE__ */ jsxDEV("strong", { className: "text-white font-extrabold", children: "prosta vive official website" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 192,
                  columnNumber: 41
                }, this),
                "! Reclaim your physical energy, sustain active bladder flows, and restore restful sleep with our certified natural formula at the guaranteed ",
                /* @__PURE__ */ jsxDEV("strong", { className: "text-white font-extrabold", children: "prosta vive lowest price" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 192,
                  columnNumber: 265
                }, this),
                " online."
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 191,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start", children: /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "flex items-center justify-center gap-3 bg-yellow-400 text-black px-10 py-5 rounded-2xl text-xl font-black hover:bg-yellow-300 transition-all shadow-2xl shadow-yellow-400/20 group uppercase tracking-tighter", children: [
                "Order Risk-Free Today",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "group-hover:translate-x-1 transition-transform" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 197,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 195,
                columnNumber: 15
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 194,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 179,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.8, rotate: 5 },
            animate: { opacity: 1, scale: 1, rotate: 0 },
            transition: { duration: 1, delay: 0.2 },
            className: "relative min-h-[400px] lg:min-h-[512px] flex items-center justify-center",
            children: /* @__PURE__ */ jsxDEV("img", { src: productWithIngredientsImage, alt: "ProstaVive supplement bottle with natural ingredients illustration", width: 448, height: 512, className: "relative z-20 w-full max-w-md mx-auto aspect-[7/8] object-contain drop-shadow-[0_35px_35px_rgba(37,99,235,0.3)]" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 208,
              columnNumber: 13
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 202,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 172,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-20 items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "relative", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50 rounded-[40px] p-12 relative overflow-hidden shadow-sm border border-blue-100", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 p-8 opacity-10", children: /* @__PURE__ */ jsxDEV(Battery, { size: 200, className: "text-brand-navy" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 220,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 219,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl font-serif font-black text-brand-navy mb-8 uppercase tracking-tighter", children: "How Prostate Issues Drain Your Energy" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 222,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm", children: /* @__PURE__ */ jsxDEV(Moon, { className: "text-red-600" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 226,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 225,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "font-black text-xl mb-1 uppercase tracking-tight", children: "Fragmented Sleep Cycle" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 229,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 leading-relaxed", children: 'Waking up 3-4 times a night means you never reach deep REM sleep. This leaves your brain in a permanent state of "Survival Mode".' }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 230,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 228,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 224,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm", children: /* @__PURE__ */ jsxDEV(Zap, { className: "text-orange-600" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 235,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 234,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "font-black text-xl mb-1 uppercase tracking-tight", children: "Chronic Adrenal Stress" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 238,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 leading-relaxed text-[15.2px]", children: 'The constant urgency signals a "fight or flight" response in your body, exhausting your adrenal glands and lowering testosterone.' }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 239,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 237,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 233,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm", children: /* @__PURE__ */ jsxDEV(Battery, { className: "text-brand-navy" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 244,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 243,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "font-black text-xl mb-1 uppercase tracking-tight", children: "Cellular Fatigue" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 247,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 leading-relaxed text-[15.2px]", children: "When the prostate is struggling, your entire reproductive system diverts energy away from your muscles and mind to manage inflammation." }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 248,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 246,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 242,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 223,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 218,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 217,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center lg:text-left", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl lg:text-5xl font-serif font-black mb-8 leading-tight uppercase tracking-tighter", children: [
          "It's Not Just About Comfort... ",
          /* @__PURE__ */ jsxDEV("br", { className: "hidden lg:block" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 255,
            columnNumber: 151
          }, this),
          " It's Your Vitality."
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 255,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-slate-600 mb-8 leading-relaxed", children: [
          'Most men assume that frequent nightly visits are just "part of getting older." But the reality is far more serious. This cycle of poor sleep and internal stress literally ',
          /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-extrabold", children: "drains your battery" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 257,
            columnNumber: 188
          }, this),
          ", making you feel aged, tired, and unmotivated."
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 256,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-6 border-l-4 border-blue-500 bg-blue-50 rounded-r-2xl", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-4xl font-black text-brand-navy mb-1 tracking-tighter", children: "68%" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 261,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-black uppercase text-slate-500 tracking-widest", children: "Better Sleep Reported" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 262,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 260,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-6 border-l-4 border-yellow-500 bg-yellow-50 rounded-r-2xl", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-4xl font-black text-yellow-900 mb-1 tracking-tighter", children: "2.4x" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 265,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "text-xs font-black uppercase text-slate-500 tracking-widest", children: "More Daily Energy" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 266,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 264,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 259,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 254,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 216,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 215,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 214,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-slate-50 border-y border-slate-200", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 text-center mb-20", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-block bg-brand-navy text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-4", children: "Science First" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 277,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl lg:text-6xl font-serif font-black mb-6 uppercase tracking-tighter", children: "Why Choose ProstaVive?" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 278,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-2xl text-brand-navy font-serif font-bold opacity-80", children: 'The First Breakthrough Formula Addressing "Energy-Drain" Biology.' }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 279,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 276,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 lg:gap-12", children: [
        /* @__PURE__ */ jsxDEV(motion.div, { whileHover: { y: -10 }, className: "bg-white p-8 lg:p-10 rounded-[40px] shadow-xl border border-slate-100 text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 lg:w-20 lg:h-20 bg-brand-navy rounded-3xl flex items-center justify-center text-white mb-6 lg:mb-8 mx-auto shadow-2xl shadow-brand-navy/30", children: /* @__PURE__ */ jsxDEV(FlaskConical, { size: 32, className: "lg:scale-125" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 285,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 284,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl lg:text-2xl font-black mb-4 uppercase tracking-tight", children: "Targeted Delivery" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 287,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-500 leading-relaxed text-[15.2px]", children: "Generic pills are destroyed by stomach acids. ProstaVive uses a micronized delivery system to ensure nutrients actually reach the prostate tissue." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 288,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 283,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(motion.div, { whileHover: { y: -10 }, className: "bg-white p-8 lg:p-10 rounded-[40px] shadow-xl border border-slate-100 text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 lg:w-20 lg:h-20 bg-yellow-500 rounded-3xl flex items-center justify-center text-white mb-6 lg:mb-8 mx-auto shadow-2xl shadow-yellow-500/30", children: /* @__PURE__ */ jsxDEV(Zap, { size: 32, className: "lg:scale-125" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 293,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 292,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl lg:text-2xl font-black mb-4 uppercase tracking-tight", children: "Dual-Action Formula" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 295,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-500 leading-relaxed text-[15.2px]", children: "We don't just support size; we restore energy. Our formula includes specific co-factors that recharge your body's energy reserves." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 296,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 291,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(motion.div, { whileHover: { y: -10 }, className: "bg-white p-8 lg:p-10 rounded-[40px] shadow-xl border border-slate-100 text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 lg:w-20 lg:h-20 bg-green-600 rounded-3xl flex items-center justify-center text-white mb-6 lg:mb-8 mx-auto shadow-2xl shadow-green-500/30", children: /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 32, className: "lg:scale-125" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 301,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 300,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl lg:text-2xl font-black mb-4 uppercase tracking-tight", children: "Pure Potency" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 303,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-500 leading-relaxed text-[15.2px]", children: "No fillers. No synthetic junk. Just 100% pure, lab-tested botanical extracts sourced from the most fertile regions on Earth." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 304,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 299,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 282,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 275,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { id: "how-it-works", className: "py-24 bg-brand-navy text-white relative", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 relative z-10 text-center", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl lg:text-7xl font-serif font-black mb-12 lg:mb-20 uppercase tracking-tighter", children: "How It Restores Health" }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 312,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-12 lg:gap-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative group", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-[80px] lg:text-[120px] font-black text-white/5 absolute -top-8 lg:-top-16 left-1/2 -translate-x-1/2 group-hover:text-white/10 transition-colors", children: "01" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 315,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 lg:w-20 lg:h-20 bg-[#11abdc] rounded-full flex items-center justify-center text-xl lg:text-2xl font-black mx-auto mb-6 lg:mb-10 relative z-10 shadow-2xl shadow-[#11abdc]/40", children: "1" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 316,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h4", { className: "text-xl lg:text-2xl font-black mb-4 uppercase tracking-tight", children: "Detoxification" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 317,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-blue-100/60 leading-relaxed text-lg text-[15.2px]", children: "Instantly begins flushing out hard-water minerals and toxins that build up in male reproductive tissues over time." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 318,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 314,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative group", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-[80px] lg:text-[120px] font-black text-white/5 absolute -top-8 lg:-top-16 left-1/2 -translate-x-1/2 group-hover:text-white/10 transition-colors", children: "02" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 321,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 lg:w-20 lg:h-20 bg-yellow-500 rounded-full flex items-center justify-center text-xl lg:text-2xl font-black mx-auto mb-6 lg:mb-10 relative z-10 shadow-2xl shadow-yellow-500/40", children: "2" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 322,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h4", { className: "text-xl lg:text-2xl font-black mb-4 uppercase tracking-tight", children: "Cellular Support" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 323,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-blue-100/60 leading-relaxed text-lg text-[15.2px]", children: "Phyto-nutrients penetrate the cell wall to support healthy tissue structure and normal, healthy prostate size." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 324,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 320,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative group", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-[80px] lg:text-[120px] font-black text-white/5 absolute -top-8 lg:-top-16 left-1/2 -translate-x-1/2 group-hover:text-white/10 transition-colors", children: "03" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 327,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 lg:w-20 lg:h-20 bg-green-600 rounded-full flex items-center justify-center text-xl lg:text-2xl font-black mx-auto mb-6 lg:mb-10 relative z-10 shadow-2xl shadow-green-500/40", children: "3" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 328,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h4", { className: "text-xl lg:text-2xl font-black mb-4 uppercase tracking-tight", children: "Energy Recharge" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 329,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-blue-100/60 leading-relaxed text-lg text-[15.2px]", children: "With the system clear, your body naturally restores sleep patterns and metabolic energy, leaving you vital and refreshed." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 330,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 326,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 313,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 311,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 310,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { id: "reviews", className: "py-24 bg-white overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col lg:flex-row justify-between items-center lg:items-end mb-20 gap-8 text-center lg:text-left", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl lg:text-7xl font-serif font-black mb-6 uppercase tracking-tighter", children: "What Men Are Saying" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 341,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-slate-500", children: `"I've tried everything. This is different."` }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 342,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 340,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-6 bg-brand-navy text-white px-10 py-5 rounded-[30px] shadow-2xl shrink-0", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-4xl font-black tracking-tighter", children: "4.9/5" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 345,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex text-yellow-400 gap-1", children: [
            /* @__PURE__ */ jsxDEV(Star, { fill: "currentColor", size: 24 }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 346,
              columnNumber: 59
            }, this),
            /* @__PURE__ */ jsxDEV(Star, { fill: "currentColor", size: 24 }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 346,
              columnNumber: 97
            }, this),
            /* @__PURE__ */ jsxDEV(Star, { fill: "currentColor", size: 24 }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 346,
              columnNumber: 135
            }, this),
            /* @__PURE__ */ jsxDEV(Star, { fill: "currentColor", size: 24 }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 346,
              columnNumber: 173
            }, this),
            /* @__PURE__ */ jsxDEV(Star, { fill: "currentColor", size: 24 }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 346,
              columnNumber: 211
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 346,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 344,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 339,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 lg:gap-8", children: testimonials.map((t, i) => /* @__PURE__ */ jsxDEV(motion.div, { whileHover: { y: -10 }, className: "bg-slate-50 p-8 lg:p-12 rounded-[32px] lg:rounded-[50px] relative shadow-sm border border-slate-100", children: [
        /* @__PURE__ */ jsxDEV(Quote, { size: 40, className: "text-blue-100 absolute top-8 right-8 lg:top-10 lg:right-10 lg:scale-125" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 352,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex text-yellow-500 mb-8", children: [...Array(t.rating)].map((_, i2) => /* @__PURE__ */ jsxDEV(Star, { size: 20, fill: "currentColor" }, i2, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 354,
          columnNumber: 55
        }, this)) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 353,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-slate-700 mb-10 leading-relaxed font-medium", children: [
          '"',
          t.text,
          '"'
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 356,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-6", children: [
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: t.image,
              alt: t.name,
              width: 96,
              height: 96,
              className: "w-24 h-24 rounded-full object-cover border-4 border-white ring-4 ring-brand-navy/10 shadow-xl shrink-0",
              referrerPolicy: "no-referrer"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 358,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "font-black text-brand-navy text-xl uppercase tracking-tight leading-tight mb-1", children: t.name }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 367,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-500/10 text-blue-600 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest inline-block", children: [
              t.age,
              " Years Old"
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 368,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 366,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 357,
          columnNumber: 17
        }, this)
      ] }, i, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 351,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 349,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 338,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 337,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { id: "pricing", className: "py-24 bg-blue-50 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-20", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-block bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-yellow-400/20", children: "Prosta Vive Best Price Online" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 379,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-5xl lg:text-8xl font-serif font-black mb-8 uppercase tracking-tighter", children: "Select Your Package" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 380,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-2xl text-slate-500 max-w-3xl mx-auto", children: "Review our packages below to find the guaranteed prosta vive best price online. Your exclusive, automatic prosta vive discount code 2026 is automatically active and applied below for maximum savings. Also includes active prosta vive coupon code and complimentary delivery!" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 381,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 378,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-3 gap-8 lg:gap-0 items-stretch", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-[#f8fbff] p-8 lg:p-12 flex flex-col items-center text-center border border-blue-100 rounded-[40px] lg:rounded-none lg:rounded-l-[60px] lg:border-r-0", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-black uppercase tracking-[0.3em] text-slate-500 mb-4", children: "Starter Pack" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 390,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-4xl lg:text-6xl font-serif font-black text-brand-navy mb-1 leading-none tracking-tighter", children: "1 BOTTLE" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 391,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-blue-500 font-black text-sm uppercase tracking-widest mb-10", children: "30-day supply" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 392,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "relative mb-6 lg:mb-12 h-64 lg:h-72 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("img", { src: productWithIngredientsImage, alt: "ProstaVive Starter Pack - 1 Bottle", width: 180, height: 250, className: "max-h-full w-auto object-contain", loading: "lazy" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 395,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 394,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline gap-1 mb-8 lg:mb-12", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-6xl lg:text-8xl font-serif font-black text-brand-navy", children: "$69" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 399,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-slate-500 text-xl lg:text-2xl font-bold", children: "/ Bottle" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 400,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 398,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "w-full bg-[#5cb85c] text-white py-4 lg:py-6 rounded-2xl font-black text-2xl lg:text-4xl uppercase tracking-tighter hover:bg-[#4cae4c] transition-all shadow-xl active:scale-95 mb-8 group text-center flex items-center justify-center gap-2", children: [
            "BUY NOW! ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-xl lg:text-2xl inline-block group-hover:translate-x-1 transition-transform", children: "▶" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 404,
              columnNumber: 26
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 403,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-sm font-black text-black uppercase tracking-widest flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(Plus, { size: 16, strokeWidth: 4 }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 409,
                columnNumber: 20
              }, this),
              " Small Shipping Fee"
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 408,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4 opacity-50", children: [
              /* @__PURE__ */ jsxDEV("img", { src: "/images/visa-card.jpg", alt: "Visa", width: 38, height: 24, className: "h-6 w-auto object-contain" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 412,
                columnNumber: 20
              }, this),
              /* @__PURE__ */ jsxDEV("img", { src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg", alt: "Mastercard", width: 38, height: 24, className: "h-6 w-auto object-contain" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 413,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("img", { src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", alt: "PayPal", width: 38, height: 24, className: "h-6 w-auto object-contain" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 414,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 411,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 407,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 389,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-brand-navy flex flex-col items-center text-center relative z-10 border border-brand-navy rounded-[40px] lg:rounded-none shadow-2xl lg:scale-105", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-full bg-yellow-400 py-6 text-black font-black uppercase tracking-[0.4em] text-xl lg:text-2xl underline decoration-4 underline-offset-8 shadow-2xl z-20 rounded-t-[40px] lg:rounded-none", children: "prosta vive 6 bottle deal" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 421,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "p-8 lg:p-12 flex flex-col items-center w-full grow pt-16", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-4xl lg:text-7xl font-serif font-black text-white mb-1 leading-none tracking-tighter", children: "6 BOTTLES" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 425,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "text-blue-300 font-black text-sm uppercase tracking-widest mb-10", children: "180-day supply" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 426,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "relative mb-6 lg:mb-12 h-64 lg:h-72 flex items-center justify-center", children: [
              /* @__PURE__ */ jsxDEV("img", { src: productWithIngredientsImage, alt: "ProstaVive Value Pack - 6 Bottles", width: 220, height: 250, className: "max-h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]", loading: "lazy" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 429,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-[-10%] lg:right-[-20%] w-20 h-20 lg:w-28 lg:h-28 bg-red-600 text-white rounded-full flex flex-col items-center justify-center border-[4px] lg:border-[6px] border-brand-navy shadow-2xl rotate-12 scale-110", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-sm lg:text-xl font-black leading-none", children: "FREE" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 431,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] lg:text-xs font-bold leading-none mt-1 uppercase", children: "Shipping" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 432,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 430,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 428,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline gap-1 mb-8 lg:mb-12 text-white", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-6xl lg:text-9xl font-serif font-black", children: "$39" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 437,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-xl lg:text-3xl font-bold opacity-60", children: "/ Bottle" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 438,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 436,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "w-full bg-[#5cb85c] text-white py-4 lg:py-8 rounded-2xl font-black text-2xl lg:text-5xl uppercase tracking-tighter hover:bg-[#4cae4c] transition-all shadow-[0_20px_50px_rgba(92,184,92,0.4)] active:scale-95 mb-8 group animate-pulse text-center flex items-center justify-center gap-2", children: [
              "BUY NOW! ",
              /* @__PURE__ */ jsxDEV("span", { className: "text-xl lg:text-2xl inline-block group-hover:translate-x-1 transition-transform", children: "▶" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 442,
                columnNumber: 28
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 441,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center gap-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-sm lg:text-lg font-black text-yellow-400 uppercase tracking-[0.2em] flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDEV(CheckCircle2, { size: 24 }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 447,
                  columnNumber: 21
                }, this),
                " FREE US Shipping"
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 446,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-4 text-4xl lg:text-6xl font-serif font-black text-white tracking-tighter opacity-90", children: "$234 Total" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 449,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 445,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 424,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 420,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-[#f8fbff] p-8 lg:p-12 flex flex-col items-center text-center border border-blue-100 rounded-[40px] lg:rounded-none lg:rounded-r-[60px] lg:border-l-0", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-black uppercase tracking-[0.3em] text-slate-500 mb-4", children: "prosta vive 3 bottle deal" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 456,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-4xl lg:text-6xl font-serif font-black text-brand-navy mb-1 leading-none tracking-tighter", children: "3 BOTTLES" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 457,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-blue-500 font-black text-sm uppercase tracking-widest mb-10", children: "90-day supply" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 458,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "relative mb-6 lg:mb-12 h-64 lg:h-72 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("img", { src: productWithIngredientsImage, alt: "ProstaVive Bundle Pack - 3 Bottles", width: 200, height: 250, className: "max-h-full w-auto object-contain", loading: "lazy" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 461,
            columnNumber: 18
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 460,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline gap-1 mb-8 lg:mb-12", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-6xl lg:text-8xl font-serif font-black text-brand-navy", children: "$59" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 465,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-slate-500 text-xl lg:text-2xl font-bold", children: "/ Bottle" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 466,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 464,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "w-full bg-[#5cb85c] text-white py-4 lg:py-6 rounded-2xl font-black text-2xl lg:text-4xl uppercase tracking-tighter hover:bg-[#4cae4c] transition-all shadow-xl active:scale-95 mb-8 group text-center flex items-center justify-center gap-2", children: [
            "BUY NOW! ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-xl lg:text-2xl inline-block group-hover:translate-x-1 transition-transform", children: "▶" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 470,
              columnNumber: 26
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 469,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-sm font-black text-black uppercase tracking-widest flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { size: 18, className: "text-[#5cb85c]" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 475,
                columnNumber: 20
              }, this),
              " FREE US Shipping"
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 474,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-4 text-4xl font-serif font-black text-[#11243f] tracking-tighter", children: "$177 Total" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 477,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 473,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 455,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 387,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 386,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 377,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { id: "ingredients", className: "py-24 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl lg:text-7xl font-serif font-black mb-8 uppercase tracking-tighter leading-none", children: "Natural Potency" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 488,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl lg:text-2xl text-slate-500 max-w-2xl mx-auto", children: "No synthetic fillers. No harmful chemicals. Just pure botanical potency." }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 489,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 487,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8", children: ingredients.map((ing, i) => /* @__PURE__ */ jsxDEV("div", { className: "group bg-slate-50 p-6 lg:p-10 rounded-[32px] lg:rounded-[40px] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl transition-all text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxDEV(Leaf, { size: 32 }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 495,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 494,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("h4", { className: "text-2xl font-black mb-4 uppercase tracking-tight", children: ing.name }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 497,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-slate-500 leading-relaxed font-medium", children: ing.desc }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 498,
          columnNumber: 17
        }, this)
      ] }, i, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 493,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 491,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 486,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 485,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 lg:py-32 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-[#fffdf5] rounded-[40px] lg:rounded-[80px] p-8 lg:p-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 border-2 lg:border-4 border-yellow-200 shadow-2xl relative overflow-hidden text-center lg:text-left", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 p-12 opacity-5 hidden lg:block", children: /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 400 }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 510,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 509,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "relative shrink-0", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-48 h-48 lg:w-80 lg:h-80 bg-white rounded-full flex flex-col items-center justify-center shadow-[0_30px_60px_-15px_rgba(234,179,8,0.3)] border-4 lg:border-8 border-yellow-400 rotate-[-5deg]", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-6xl lg:text-9xl font-serif font-black text-black leading-none", children: "180" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 514,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-sm lg:text-lg font-black uppercase tracking-[0.3em] text-slate-500 leading-none mt-2", children: "DAYS" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 515,
            columnNumber: 18
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 513,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-4 lg:-bottom-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-6 lg:px-10 py-2 lg:py-3 rounded-full font-black text-lg lg:text-xl uppercase tracking-tighter shadow-xl rotate-6", children: "IRONCLAD" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 517,
          columnNumber: 16
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 512,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl lg:text-7xl font-serif font-black mb-6 lg:mb-10 uppercase tracking-tighter leading-none", children: [
          "Your Results Are ",
          /* @__PURE__ */ jsxDEV("br", { className: "hidden lg:block" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 520,
            columnNumber: 145
          }, this),
          " ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-yellow-600", children: "GUARANTEED." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 520,
            columnNumber: 179
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 520,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg lg:text-2xl text-slate-700 mb-8 lg:mb-10 leading-relaxed font-medium", children: [
          "Try Prosta Vive® for a full 180 days risk-free. Our ironclad ",
          /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-extrabold", children: "prosta vive money back guarantee" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 522,
            columnNumber: 78
          }, this),
          " (also supporting ProstaVive) ensures that if you do not feel fully revitalized or notice a dramatic flow improvement, you get a 100% full refund."
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 521,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center justify-center lg:justify-start gap-10", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[#5cb85c]", children: [
          /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 28 }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 526,
            columnNumber: 20
          }, this),
          " Authorized Retailer"
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 525,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 524,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 519,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 508,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 507,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 506,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-black text-white overflow-hidden relative", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center lg:text-left", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "text-blue-400 font-black uppercase tracking-[0.4em] mb-6 text-sm", children: "Life Transformation" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 538,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl lg:text-8xl font-serif font-black mb-12 leading-none uppercase tracking-tighter", children: [
          "Imagine Your ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-yellow-400", children: "New Life..." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 539,
            columnNumber: 131
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 539,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-10 text-left", children: [
          { title: "Deep Restoration", desc: "Sleep through the night without a single interruption. Wake up feeling truly alive." },
          { title: "Absolute Confidence", desc: "No more mapping out bathrooms. No more social anxiety. Just you, in control." },
          { title: "Peak Performance", desc: "With restored prostate health, you'll feel a surge of youthful energy and vitality." }
        ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-6 lg:gap-8 group", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 bg-brand-navy/20 rounded-3xl flex items-center justify-center shrink-0 border border-brand-navy/30 group-hover:bg-brand-navy transition-colors", children: /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "text-blue-400 group-hover:text-white", size: 32 }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 548,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 547,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h4", { className: "text-xl lg:text-2xl font-black mb-2 uppercase tracking-tight", children: item.title }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 551,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-blue-100/60 text-lg leading-relaxed text-[15.2px]", children: item.desc }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 552,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 550,
            columnNumber: 19
          }, this)
        ] }, i, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 546,
          columnNumber: 17
        }, this)) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 540,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 537,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "relative mt-12 lg:mt-0", children: /* @__PURE__ */ jsxDEV("div", { className: "aspect-[4/5] bg-gradient-to-t from-black to-brand-navy rounded-[40px] lg:rounded-[60px] overflow-hidden relative shadow-3xl border border-white/10", children: [
        /* @__PURE__ */ jsxDEV("img", { src: "/images/active-healthy-older-man.png", alt: "Healthy active older man enjoying life outdoors with high energy", width: 560, height: 700, className: "w-full h-full object-cover mix-blend-overlay opacity-60" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 560,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-8 lg:bottom-12 left-8 lg:left-12 right-8 lg:right-12", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-3xl lg:text-5xl font-serif font-black text-white tracking-tighter mb-4 leading-none", children: `"I haven't felt this strong in 20 years."` }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 562,
            columnNumber: 20
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-blue-400 font-bold uppercase tracking-widest text-sm", children: "— Mark R., Age 61" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 563,
            columnNumber: 20
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 561,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 559,
        columnNumber: 14
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 558,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 536,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 535,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 lg:py-24 bg-white border-b border-slate-100", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16 lg:mb-20", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl lg:text-7xl font-serif font-black mb-6 lg:mb-8 uppercase tracking-tighter leading-none text-brand-navy", children: "Instant Activation" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 574,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl lg:text-2xl text-slate-500", children: "What Happens The Moment You Click Order?" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 575,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 573,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-24 bg-brand-navy text-white rounded-[32px] flex items-center justify-center mb-8 shadow-2xl rotate-3", children: /* @__PURE__ */ jsxDEV(Lock, { size: 44 }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 580,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 579,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-black mb-4 uppercase tracking-tight text-brand-navy", children: "1. Secure Gateway" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 582,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-500 font-medium", children: "Your data is secured by 256-bit SSL encryption. We never store credit card info." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 583,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 578,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-24 bg-brand-navy text-white rounded-[32px] flex items-center justify-center mb-8 shadow-2xl -rotate-3", children: /* @__PURE__ */ jsxDEV(Truck, { size: 44 }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 587,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 586,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-black mb-4 uppercase tracking-tight text-brand-navy", children: "2. Fast Dispatch" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 589,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-500 font-medium", children: "Orders are picked and packed in 24 hours from our climate-controlled lab." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 590,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 585,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-24 bg-brand-navy text-white rounded-[32px] flex items-center justify-center mb-8 shadow-2xl rotate-6", children: /* @__PURE__ */ jsxDEV(Zap, { size: 44 }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 594,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 593,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-black mb-4 uppercase tracking-tight text-brand-navy", children: "3. Rapid Intake" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 596,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-500 font-medium", children: "The formula begins bioavailability absorption the moment your first dose arrives." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 597,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 592,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-24 bg-brand-navy text-white rounded-[32px] flex items-center justify-center mb-8 shadow-2xl -rotate-6", children: /* @__PURE__ */ jsxDEV(Headphones, { size: 44 }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 601,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 600,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-black mb-4 uppercase tracking-tight text-brand-navy", children: "4. Expert Support" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 603,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-500 font-medium", children: "Our medical support team is ready via email or phone to help you reach your goals." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 604,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 599,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 577,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 572,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 571,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { id: "review", className: "py-24 bg-white border-t border-slate-100", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4", children: "Honest 2026 Analysis" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 614,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl lg:text-6xl font-serif font-black uppercase tracking-tighter text-brand-navy mb-4", children: [
          "Prosta Vive Review: ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-blue-600", children: "Does It Work?" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 618,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 617,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-slate-500 font-medium", children: "A comprehensive, ingredient-focused, and evidence-backed breakdown." }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 620,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 613,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-none text-slate-900 leading-relaxed text-lg md:text-[21px] space-y-10 font-medium", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl md:text-2xl text-slate-800 border-l-4 border-blue-500 pl-6 py-3 bg-blue-50/55 rounded-r-3xl pr-6 leading-relaxed", children: "If you've been searching for an honest Prosta Vive review, you're in the right place. With so many prostate supplements flooding the market in 2026, it's fair to ask: does Prosta Vive actually work, or is it just another overhyped bottle of capsules? When choosing to buy prosta vive official website configurations ensure you are purchasing the 100% authentic formula with zero risk. Let's break down exactly what Prosta Vive is, what's inside it, what real users are saying, and whether it is worth your time." }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 627,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("hr", { className: "border-slate-100 my-8" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 631,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight", children: "What Is Prosta Vive?" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 634,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "leading-relaxed", children: "Prosta Vive is a natural prostate health supplement designed as a clean, daily support system for men seeking to maintain cellular prostate size, promote stronger urine flow, and reduce midnight waking." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 635,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "leading-relaxed", children: "Unlike standard, hard-to-absorb capsules that are easily destroyed by harsh digestive acids, Prosta Vive is manufactured using a specialized micronized delivery format designed to yield complete cellular bioavailability, directly addressing:" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 638,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 list-none mt-6", children: [
            "Healthy prostate size & structure",
            "Stronger, continuous urine flow",
            "Fewer nighttime trips (better sleep)",
            "Enhanced male vitality & daily energy"
          ].map((item, idx) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "text-green-600 shrink-0", size: 24 }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 649,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "font-extrabold text-base md:text-lg text-brand-navy", children: item }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 650,
              columnNumber: 21
            }, this)
          ] }, idx, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 648,
            columnNumber: 19
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 641,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-6 leading-relaxed", children: [
            "It comes with an extraordinary ",
            /* @__PURE__ */ jsxDEV("strong", { className: "font-black text-brand-navy underline decoration-blue-500 underline-offset-4", children: "180-day money-back guarantee" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 655,
              columnNumber: 48
            }, this),
            ", which is one of the longest coverage options in the wellness industry—a strong statement of confidence from the formulator."
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 654,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 633,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("hr", { className: "border-slate-100 my-8" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 659,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight", children: "Prosta Vive Where To Buy & Order Online" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 662,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "leading-relaxed", children: "When discussing prosta vive where to buy, the answer is incredibly simple and strictly enforced. To maintain low wholesale prices and guarantee product safety, you can only prosta vive order online via our direct links. Genuine bottles are not distributed to local pharmacies or wholesale shops." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 663,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "leading-relaxed", children: "We also offer various promo options: any active prosta vive coupon code or prosta vive discount code 2026 is automatically applied upon checkout to let you buy at the optimal price. Furthermore, qualified multi-bottle bundles receive 100% complimentary prosta vive free shipping, routing directly from our secure warehouse." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 666,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 661,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("hr", { className: "border-slate-100 my-8" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 671,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight", children: "ProstaVive Ingredients: What's Inside?" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 674,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "leading-relaxed", children: "The efficacy of any botanical formula relies purely on the purity and concentration of its active compounds. ProstaVive's synergistic recipe is built around several scientifically explored ingredients:" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 675,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 mt-8", children: [
            {
              name: "Saw Palmetto Extract",
              benefit: "Supports healthy testosterone metabolism",
              desc: "Arguably the most robustly researched natural compound for prostate health. Multiple clinical analyses suggest saw palmetto inhibits 5-alpha-reductase, supporting healthy urinary frequencies and defending against age-related enlargement (BPH)."
            },
            {
              name: "Beta-Sitosterol",
              benefit: "Improves urinary flow rates",
              desc: "A natural plant sterol repeatedly shown in clinical assessments to enhance bladder clearance, improve micro-circulation, and significantly decrease residual urine volume in men."
            },
            {
              name: "Zinc",
              benefit: "Foundational cellular immunity",
              desc: "The natural prostate gland maintains higher concentrations of zinc than any other tissue in the human body. Because structural zinc depletion is highly linked to swelling, daily supplementation is absolutely critical."
            },
            {
              name: "Pygeum Africanum Bark",
              benefit: "Reduces nighttime bladder urgency",
              desc: "Derived from the African cherry tree bark, pygeum is extensively integrated across European clinical frameworks to naturally soothe bladder spasms, decrease overnight wakefulness, and facilitate total bladder emptying."
            },
            {
              name: "Lycopene",
              benefit: "Powerful localized antioxidant",
              desc: "A powerful skin and interior cellular antioxidant found abundantly in red ripe tomatoes. It targets and neutralizes oxidative cellular stress specifically localized within key prostate tissues."
            },
            {
              name: "Vitamin D3",
              benefit: "Supports healthy cellular development",
              desc: "Clinical research shows that steady Vitamin D levels are tightly bound to long-term prostate health, metabolic vitality, and proper immune response within the glands."
            }
          ].map((ing, idx) => /* @__PURE__ */ jsxDEV("div", { className: "bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 flex flex-col md:flex-row md:items-start gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "shrink-0 bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shadow-sm", children: idx + 1 }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 713,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tight", children: ing.name }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 718,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-xs md:text-sm font-bold text-blue-700 bg-blue-50/80 px-3 py-1 rounded-full", children: ing.benefit }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 719,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 717,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-[18px] text-slate-700 leading-relaxed font-semibold", children: ing.desc }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 721,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 716,
              columnNumber: 21
            }, this)
          ] }, idx, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 712,
            columnNumber: 19
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 679,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 673,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("hr", { className: "border-slate-100 my-8" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 728,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight", children: "Does ProstaVive Actually Work? What Users Are Saying" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 731,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "leading-relaxed", children: "User feedback across digital spaces remains highly promising. Because it employs organic botanical extracts rather than synthetic forced biochemical compounds, the benefits compile systematically and progressively." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 732,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-[#f0fdf4] p-8 rounded-[32px] border border-green-200", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "font-extrabold text-green-900 uppercase tracking-wider text-sm md:text-base mb-4", children: "Key Benefits Reported" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 737,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: [
                "Decreased immediate urgency and better stream flow",
                "Substantial drop in middle-of-the-night waking schedules",
                "Noticeable relief in bladder pressure and discomfort",
                "Enhanced baseline daytime energy and endurance levels"
              ].map((bullet, idx) => /* @__PURE__ */ jsxDEV("li", { className: "flex gap-3 items-start text-sm md:text-base font-bold text-green-950", children: [
                /* @__PURE__ */ jsxDEV(CheckCircle2, { size: 18, className: "text-green-700 shrink-0 mt-0.5" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 746,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: bullet }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 747,
                  columnNumber: 25
                }, this)
              ] }, idx, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 745,
                columnNumber: 23
              }, this)) }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 738,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 736,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-[#fefce8] p-8 rounded-[32px] border border-yellow-200", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "font-extrabold text-yellow-900 uppercase tracking-wider text-sm md:text-base mb-4", children: "Key Realistic Expectations" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 753,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: [
                "Requires consistent, daily intake (missing days sets back relief)",
                "Results are cumulative; works gradually over weeks, not minutes",
                "Individual responses might differ based on current body state"
              ].map((bullet, idx) => /* @__PURE__ */ jsxDEV("li", { className: "flex gap-3 items-start text-sm md:text-base font-bold text-yellow-950", children: [
                /* @__PURE__ */ jsxDEV(CheckCircle2, { size: 18, className: "text-yellow-700 shrink-0 mt-0.5" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 761,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: bullet }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 762,
                  columnNumber: 25
                }, this)
              ] }, idx, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 760,
                columnNumber: 23
              }, this)) }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 754,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 752,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 735,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 730,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("hr", { className: "border-slate-100 my-8" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 770,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight", children: "How Long Does ProstaVive Take to Work?" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 773,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "leading-relaxed", children: "Based on extensive consumer feedback and the bio-absorption cycle of its active compounds, a standard realistic progression timeline is outlined below:" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 774,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "overflow-hidden border border-slate-200 rounded-3xl mt-6 shadow-sm overflow-x-auto", children: /* @__PURE__ */ jsxDEV("table", { className: "w-full text-left border-collapse bg-white min-w-[500px]", children: [
            /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { className: "bg-slate-50 border-b border-slate-200", children: [
              /* @__PURE__ */ jsxDEV("th", { className: "px-6 py-4 text-sm md:text-base font-black uppercase tracking-wider text-brand-navy", children: "Timeframe" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 782,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("th", { className: "px-6 py-4 text-sm md:text-base font-black uppercase tracking-wider text-brand-navy", children: "What to Expect" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 783,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 781,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 780,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("tbody", { className: "divide-y divide-slate-100", children: [
              { period: "Week 1–2", text: "Nutrients begin compiling systematic balance in tissue. No drastic changes; initial localized assimilation." },
              { period: "Week 3–4", text: "Noticeable, gentle reduction in late-night urgency. Bladder control begins normalizing." },
              { period: "Month 2", text: "Significantly stronger, smoother flow. Consistently fewer bathroom interruptions at night." },
              { period: "Month 3+", text: "Full, consolidated botanical benefits. Gland comfort and natural male vitality optimized." }
            ].map((row, idx) => /* @__PURE__ */ jsxDEV("tr", { className: "hover:bg-slate-50/50", children: [
              /* @__PURE__ */ jsxDEV("td", { className: "px-6 py-5 text-base md:text-lg font-black text-brand-navy whitespace-nowrap", children: row.period }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 794,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("td", { className: "px-6 py-5 text-base md:text-lg text-slate-700 font-semibold leading-relaxed", children: row.text }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 795,
                columnNumber: 25
              }, this)
            ] }, idx, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 793,
              columnNumber: 23
            }, this)) }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 786,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 779,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 778,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs md:text-sm text-slate-500 mt-4 text-center", children: "*Consistency is paramount. The formulator highly suggests completing a thorough 90 to 180 day protocol." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 801,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 772,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("hr", { className: "border-slate-100 my-8" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 806,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tight", children: "Safety & Side Effects" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 809,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "leading-relaxed", children: "Crafted inside an FDA-registered and GMP-certified, state-of-the-art facility inside the United States, ProstaVive is formulated entirely around natural ingredients that possess high safety records. Severe side effects remain incredibly scarce." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 810,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "leading-relaxed", children: "A small minority may experience minor tummy adjustments during the initial stage as the bioactive extracts are introduced, which generally self-corrects inside a matter of days." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 813,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50/50 p-8 rounded-3xl border border-blue-100 mt-6", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "font-extrabold text-xs md:text-sm bg-blue-600 text-white px-3 py-1 rounded-full uppercase tracking-wider", children: "Medical Guidance" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 817,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-base md:text-lg text-blue-900 font-semibold leading-relaxed", children: "Men currently diagnosed with prostate issues, undergoing cellular treatments, or actively taking prescription medications should always consult their personal healthcare doctor before commencing any wellness supplement program." }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 818,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 816,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 808,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("hr", { className: "border-slate-100 my-8" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 824,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-brand-navy to-black p-8 md:p-12 lg:p-16 rounded-[40px] text-white space-y-6 text-center lg:text-left relative overflow-hidden border border-white/10 mt-12 bg-slate-950", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl md:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white uppercase", children: "The Final Verdict: Is It Worth It?" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 828,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-blue-100/80 text-base md:text-lg lg:text-xl font-bold max-w-3xl leading-relaxed", children: "With premium researched dosages, an pristine clean clinical manufacturing lineage, and a completely risk-free 180-day money-back policy, ProstaVive represents a leading, high-value natural formula for active men." }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 829,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 827,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between gap-8 pt-6 border-t border-white/10", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "text-yellow-400 font-extrabold uppercase tracking-widest text-sm", children: "OFFICIAL STORE PRICING" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 835,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-2xl md:text-3xl font-bold font-serif text-white leading-tight", children: "Guaranteed Authentic & Verified Direct Stock" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 836,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 834,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "flex items-center justify-center gap-2 bg-yellow-400 text-black px-10 py-5 rounded-2xl text-[20px] font-black hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/10 uppercase tracking-tighter shrink-0 text-center", children: [
              "Secure Your Supply Direct",
              /* @__PURE__ */ jsxDEV(ArrowRight, { size: 22 }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 840,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 838,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 833,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 826,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-slate-400 text-center uppercase tracking-widest pt-8", children: "This review is compiled for informational study and is not composed as professional diagnostic advice." }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 845,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 626,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 612,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 611,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { id: "local-info", className: "py-24 bg-blue-50/40 border-t border-slate-100", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 bg-yellow-100 text-yellow-950 border border-yellow-200 px-4 py-1.5 rounded-full text-xs md:text-sm font-black uppercase tracking-wider mb-4", children: "📍 Local Shipping Guide & Availability" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 856,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl lg:text-6xl font-serif font-black uppercase tracking-tighter text-brand-navy mb-4 leading-none", children: [
          "ProstaVive in ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-blue-600", children: "Council Bluffs, Iowa" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 860,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 859,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl md:text-2xl text-slate-500 font-medium", children: "Local store retail reports, shipping timelines, and direct home dispatch." }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 862,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 855,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 space-y-8 text-slate-900 leading-relaxed text-lg md:text-[21px] font-medium shadow-sm", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "leading-relaxed text-slate-800", children: [
          "For men over 50 residing in ",
          /* @__PURE__ */ jsxDEV("strong", { children: "Council Bluffs, Iowa" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 869,
            columnNumber: 43
          }, this),
          " and neighboring Pottawattamie County, getting premium natural support should not involve endless trips to physical shops. Let's break down where you can obtain authentic ProstaVive stock with verified speed."
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 868,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-tight", children: "Can You Buy ProstaVive in Local Council Bluffs retail stores?" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 873,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "leading-relaxed text-slate-700", children: [
            "As of ",
            /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-extrabold", children: "2026" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 877,
              columnNumber: 23
            }, this),
            ", authentic, clinically certified ",
            /* @__PURE__ */ jsxDEV("strong", { children: "ProstaVive formula is not sold in local brick-and-mortar stores" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 877,
              columnNumber: 121
            }, this),
            " near Broadway, Metro Crossing, or Mall of the Bluffs. Major retailers like Walgreens, GNC, Walmart, or CVS do not carry the genuine proprietary formula."
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 876,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "leading-relaxed text-slate-700", children: "This is a deliberate safety decision by the manufacturer to:" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 879,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4 pl-0 list-none mt-4", children: [
            /* @__PURE__ */ jsxDEV("li", { className: "flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-100", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "shrink-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm", children: "1" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 884,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "Eliminate retail third-party markups" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 885,
                  columnNumber: 25
                }, this),
                " to keep the individual bottle cost as low as $39."
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 885,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 883,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { className: "flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-100", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "shrink-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm", children: "2" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 888,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "Prevent fraudulent counterfeits" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 889,
                  columnNumber: 25
                }, this),
                " from leaking onto unauthorized third-party shelves."
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 889,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 887,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { className: "flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-100", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "shrink-0 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm", children: "3" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 892,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: [
                "Maintain the validity of the comprehensive ",
                /* @__PURE__ */ jsxDEV("strong", { children: "180-day money-back guarantee" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 893,
                  columnNumber: 68
                }, this),
                " through direct factory checkout records."
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 893,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 891,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 882,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 872,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("hr", { className: "border-slate-100 my-8" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 898,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-tight", children: "Council Bluffs & Western Iowa Delivery Timelines" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 901,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "leading-relaxed text-slate-700", children: "When you initiate your order online from anywhere in the Council Bluffs, Iowa area, your shipment is routed via premium express courier networks (USPS, FedEx, or UPS direct):" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 904,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50/50 p-6 rounded-3xl border border-blue-100", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "font-extrabold text-blue-900 uppercase tracking-wider text-sm mb-2", children: "🚚 Local Delivery Time" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 910,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg font-bold text-slate-800 leading-normal", children: "3 to 5 business days from dispatch directly to your front porch." }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 911,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 909,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-green-50/50 p-6 rounded-3xl border border-green-100", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "font-extrabold text-green-900 uppercase tracking-wider text-sm mb-2", children: "🔒 Secure Packaging" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 916,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-base md:text-lg font-bold text-slate-800 leading-normal", children: "Delivered in fully discreet plain packaging to protect your personal privacy." }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 917,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 915,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 908,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "leading-relaxed text-xs md:text-sm text-slate-500 mt-4", children: "*Local distribution depots in Iowa and the Midwest region ensure rapid transit and package handoffs for localized postal routes." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 922,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 900,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("hr", { className: "border-slate-100 my-8" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 927,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-black text-brand-navy uppercase tracking-tight", children: "Specially Tailored for Men 50+ seeking to stop Midnight waking" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 930,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "leading-relaxed text-slate-800", children: "Residents in Council Bluffs can easily begin their restoration protocol today. Just one daily scoop targets biological swelling, supporting easier flow and restful nights so you can sleep soundly through the night." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 933,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "pt-6", children: /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "w-full flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-5 rounded-2xl text-xl md:text-2xl font-black transition-all shadow-xl shadow-yellow-400/10 uppercase tracking-tighter", children: [
            "Check Special local pricing",
            /* @__PURE__ */ jsxDEV(ArrowRight, { size: 22, className: "shrink-0" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 940,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 938,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 937,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 929,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 867,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 854,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 853,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { id: "global-shipping", className: "py-24 bg-white border-t border-slate-100", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-black uppercase tracking-wider mb-4", children: [
          /* @__PURE__ */ jsxDEV(Globe, { size: 14 }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 953,
            columnNumber: 15
          }, this),
          " International Shipping Directory"
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 952,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl lg:text-7xl font-serif font-black uppercase tracking-tighter text-brand-navy mb-4 leading-none", children: [
          "Prosta Vive Global ",
          /* @__PURE__ */ jsxDEV("br", { className: "hidden md:block" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 956,
            columnNumber: 34
          }, this),
          " Availability & Dispatch"
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 955,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl md:text-2xl text-slate-500 font-medium", children: "Official guide to purchasing Prosta Vive in USA, Canada, Australia, and UK." }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 958,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 951,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-12", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-slate-50 p-8 rounded-[32px] border border-slate-100 leading-relaxed text-slate-700 text-lg md:text-xl font-medium", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "mb-4", children: [
            "Welcome to the official global distribution guide for the premium ",
            /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-black", children: "Prosta Vive" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 967,
              columnNumber: 83
            }, this),
            " dietary supplement. If you are planning to buy ",
            /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-black", children: "Prosta Vive" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 967,
              columnNumber: 198
            }, this),
            " in the United States, Canada, the United Kingdom, or Australia, you are backed by our secure international fulfillment network."
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 966,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: [
            "To maintain the guaranteed ",
            /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-black", children: "Prosta Vive" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 970,
              columnNumber: 44
            }, this),
            " best price online and safeguard product integrity, authentic ",
            /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-black", children: "Prosta Vive" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 970,
              columnNumber: 173
            }, this),
            " is sold exclusively through our direct channels. Here is how you can order ",
            /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-black", children: "Prosta Vive" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 970,
              columnNumber: 316
            }, this),
            " safely and track your dispatch across all target global markets."
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 969,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 965,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0", children: /* @__PURE__ */ jsxDEV("span", { className: "font-black text-lg", children: "US" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 980,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 979,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-black text-brand-navy uppercase tracking-tight leading-none", children: "Prosta Vive USA" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 983,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-black text-slate-400 uppercase tracking-wider mt-1", children: "United States Shipping" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 984,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 982,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 978,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 text-base md:text-lg font-semibold leading-relaxed mb-4", children: [
              "For customers wanting to buy ",
              /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-bold", children: "Prosta Vive" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 988,
                columnNumber: 48
              }, this),
              " in the USA, we ship directly to all fifty states. Whether you order ",
              /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-bold", children: "Prosta Vive" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 988,
                columnNumber: 183
              }, this),
              " in Texas, Florida, Ohio, California, or New York, your authentic ",
              /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-bold", children: "Prosta Vive" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 988,
                columnNumber: 315
              }, this),
              " package is dispatched from our domestic warehouses via premium courier services."
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 987,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-slate-50 p-4 rounded-xl text-xs font-bold text-slate-500", children: "🇺🇸 Transit Time: 3-5 Business Days | Rate: FREE on select packages" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 990,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 977,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-600 shrink-0", children: /* @__PURE__ */ jsxDEV("span", { className: "font-black text-lg", children: "CA" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 999,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 998,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-black text-brand-navy uppercase tracking-tight leading-none", children: "Prosta Vive Canada" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1002,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-black text-slate-400 uppercase tracking-wider mt-1", children: "Canadian Delivery" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1003,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1001,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 997,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 text-base md:text-lg font-semibold leading-relaxed mb-4", children: [
              "Planning to order ",
              /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-bold", children: "Prosta Vive" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1007,
                columnNumber: 37
              }, this),
              " in Canada? We offer safe, trackable border shipping directly to your residence in Toronto, Vancouver, Montreal, or Calgary. Every ",
              /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-bold", children: "Prosta Vive" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1007,
                columnNumber: 234
              }, this),
              " Canada package clears customs seamlessly and is delivered by reliable Canadian postal carriers."
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1006,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-slate-50 p-4 rounded-xl text-xs font-bold text-slate-500", children: "🇨🇦 Transit Time: 5-7 Business Days | Rate: Trackable International Shipping" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1009,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 996,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 shrink-0", children: /* @__PURE__ */ jsxDEV("span", { className: "font-black text-lg", children: "UK" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1018,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1017,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-black text-brand-navy uppercase tracking-tight leading-none", children: "Prosta Vive UK" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1021,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-black text-slate-400 uppercase tracking-wider mt-1", children: "United Kingdom Delivery" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1022,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1020,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1016,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 text-base md:text-lg font-semibold leading-relaxed mb-4", children: [
              "For those searching for ",
              /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-bold", children: "Prosta Vive" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1026,
                columnNumber: 43
              }, this),
              " in the UK, direct shipping is fully available. Receive your authentic ",
              /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-bold", children: "Prosta Vive" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1026,
                columnNumber: 180
              }, this),
              " package anywhere in Great Britain or Northern Ireland. UK orders are processed under standard regulations and shipped quickly to your home."
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1025,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-slate-50 p-4 rounded-xl text-xs font-bold text-slate-500", children: "🇬🇧 Transit Time: 5-8 Business Days | Rate: International Express Carrier" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1028,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1015,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600 shrink-0", children: /* @__PURE__ */ jsxDEV("span", { className: "font-black text-lg", children: "AU" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1037,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1036,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-black text-brand-navy uppercase tracking-tight leading-none", children: "Prosta Vive Australia" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1040,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-black text-slate-400 uppercase tracking-wider mt-1", children: "Australia & NZ Dispatch" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1041,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1039,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1035,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 text-base md:text-lg font-semibold leading-relaxed mb-4", children: [
              "Australian consumers looking to buy ",
              /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-bold", children: "Prosta Vive" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1045,
                columnNumber: 55
              }, this),
              " in Australia can access direct global dispatch. Whether you live in Sydney, Melbourne, Brisbane, Adelaide, or Perth, your genuine ",
              /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-bold", children: "Prosta Vive" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1045,
                columnNumber: 252
              }, this),
              " Australia order is shipped via premium express postal networks."
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1044,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-slate-50 p-4 rounded-xl text-xs font-bold text-slate-500", children: "🇦🇺 Transit Time: 6-10 Business Days | Rate: Insured Air Delivery" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1047,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1034,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 975,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50/40 border border-blue-100 p-8 rounded-[40px] space-y-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-black text-brand-navy uppercase tracking-tight", children: "Why Buy Prosta Vive Directly From Us?" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1055,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-700 text-base md:text-lg font-semibold leading-relaxed", children: [
            "When you choose to buy ",
            /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-bold", children: "Prosta Vive" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1057,
              columnNumber: 40
            }, this),
            " through our authorized links, you are guaranteed to receive the original, clinical-grade ",
            /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-bold", children: "Prosta Vive" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1057,
              columnNumber: 196
            }, this),
            " formula. Beware of unauthorized resellers on third-party sites trying to mimic the certified ",
            /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-bold", children: "Prosta Vive" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1057,
              columnNumber: 356
            }, this),
            " brand. Only the official ",
            /* @__PURE__ */ jsxDEV("strong", { className: "text-brand-navy font-bold", children: "Prosta Vive" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1057,
              columnNumber: 448
            }, this),
            " store can protect your order with our ironclad 180-day money-back guarantee."
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1056,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            "Original Prosta Vive USA verified stock",
            "Secure Prosta Vive Canada dispatch channels",
            "Direct Prosta Vive UK tracked airmail",
            "Insured Prosta Vive Australia express delivery",
            "Authentic Prosta Vive natural prostate ingredients",
            "Zero hidden fees on your Prosta Vive checkout"
          ].map((item, idx) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm text-sm font-bold text-slate-700", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle2, { size: 18, className: "text-green-600 shrink-0" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1071,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1072,
              columnNumber: 21
            }, this)
          ] }, idx, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1070,
            columnNumber: 19
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1061,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1054,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "overflow-hidden border border-slate-200 rounded-3xl shadow-sm overflow-x-auto bg-white", children: /* @__PURE__ */ jsxDEV("table", { className: "w-full text-left border-collapse min-w-[600px]", children: [
          /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { className: "bg-slate-50 border-b border-slate-200", children: [
            /* @__PURE__ */ jsxDEV("th", { className: "px-6 py-4 text-xs md:text-sm font-black uppercase tracking-wider text-brand-navy", children: "Global Territory" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1083,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("th", { className: "px-6 py-4 text-xs md:text-sm font-black uppercase tracking-wider text-brand-navy", children: "Prosta Vive Courier" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1084,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("th", { className: "px-6 py-4 text-xs md:text-sm font-black uppercase tracking-wider text-brand-navy", children: "Estimated Dispatch" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1085,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("th", { className: "px-6 py-4 text-xs md:text-sm font-black uppercase tracking-wider text-brand-navy", children: "Guaranteed Tracking" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1086,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1082,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1081,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("tbody", { className: "divide-y divide-slate-100", children: [
            { country: "Prosta Vive USA", courier: "USPS / FedEx Express", time: "3 - 5 Business Days", track: "Yes, fully tracked" },
            { country: "Prosta Vive Canada", courier: "Canada Post / DHL", time: "5 - 7 Business Days", track: "Yes, fully tracked" },
            { country: "Prosta Vive UK", courier: "Royal Mail / Express Air", time: "5 - 8 Business Days", track: "Yes, fully tracked" },
            { country: "Prosta Vive Australia", courier: "Australia Post / Courier", time: "6 - 10 Business Days", track: "Yes, fully tracked" }
          ].map((row, idx) => /* @__PURE__ */ jsxDEV("tr", { className: "hover:bg-slate-50/30", children: [
            /* @__PURE__ */ jsxDEV("td", { className: "px-6 py-4 text-base font-black text-brand-navy whitespace-nowrap", children: row.country }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1097,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("td", { className: "px-6 py-4 text-base text-slate-600 font-bold", children: row.courier }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1098,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("td", { className: "px-6 py-4 text-base text-slate-600 font-bold", children: row.time }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1099,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("td", { className: "px-6 py-4 text-base text-blue-600 font-black", children: row.track }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1100,
              columnNumber: 23
            }, this)
          ] }, idx, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1096,
            columnNumber: 21
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1089,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1080,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1079,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "pt-6 text-center", children: /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black px-12 py-5 rounded-2xl text-xl md:text-2xl font-black transition-all shadow-xl shadow-yellow-400/20 uppercase tracking-tighter", children: [
          "Check Prosta Vive International Pricing",
          /* @__PURE__ */ jsxDEV(ArrowRight, { size: 24, className: "shrink-0" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1110,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1108,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1107,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 963,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 950,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 949,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-slate-50 border-y border-slate-100", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl lg:text-6xl font-serif font-black mb-6 uppercase tracking-tighter text-brand-navy", children: "Common Questions" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1121,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-slate-500 font-medium", children: "Everything you need to know about ProstaVive." }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1122,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 1120,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
        {
          q: "Which medicine is best for prostate enlargement?",
          a: "The best medicine for prostate enlargement (BPH) depends on your specific symptoms, general health, and prostate size. Clinically, doctors prescribe two main categories of medications: Alpha-blockers (such as Tamsulosin, also known as Flomax) which relax bladder neck muscle fibers to improve urine flow and decrease stream pressure quickly; and 5-Alpha Reductase Inhibitors (such as Finasteride/Proscar or Dutasteride/Avodart) which work slowly over 3 to 6 months to shrink the actual physical size of the prostate gland. Many active men choose to supplement with a premium natural formula like ProstaVive to support healthy urinary flow and cellular prostate size without the potential side effects associated with prescription pharmaceuticals."
        },
        {
          q: "Can an enlarged prostate go back to normal size?",
          a: "Yes, an enlarged prostate is clinically capable of shrinking back toward a more normal size under the correct medical or nutritional protocol. Clinicians frequently use 5-alpha reductase inhibitors to reduce the prostate volume by blocking the conversion of testosterone into DHT, the primary hormone driver behind swelling. Many men over 50 also find success through targeted dietary supplementation using organic botanical compounds—such as the high-purity Saw Palmetto, Beta-Sitosterol, and Pygeum Africanum found inside ProstaVive—which help reduce cellular swelling, soothe bladder pressure, and promote natural, healthy prostate rejuvenation over a structured 90-to-180 day cycle."
        },
        {
          q: "What are the names of prostate tablets?",
          a: "The most commonly prescribed or recommended prostate tablets and wellness formulas in the United States include:\n• Tamsulosin (Flomax): A popular alpha-blocker pill taken daily for rapid flow relief.\n• Finasteride (Proscar) & Dutasteride (Avodart): Clinically tested tablets designed to block DHT and physically shrink the gland.\n• Silodosin (Rapaflo) & Alfuzosin (Uroxatral): Prescriptions targeting urinary retention comfort.\n• ProstaVive: The premier non-prescription, all-natural daily option formulated with high-potency micronized minerals, anti-inflammatory herbs, and raw tomato lycopene for complete high-bioavailability support."
        },
        {
          q: "What are the best prostate tablets?",
          a: "The 'best' prostate tablets depend heavily on what you are looking to achieve. For rapid, immediate relief from a blocked stream, medical doctors agree that prescription alpha-blockers like Tamsulosin are excellent. For true physical reduction of the gland's tissue over time, 5-alpha reductase inhibitors are the standard drug choice. However, for men seeking an all-natural, highly comprehensive daily formula with zero sexual side effects or dizziness, ProstaVive is regarded as the leading premium option in 2026. ProstaVive combines Saw Palmetto, Pygeum, Zinc, and Vitamin D3 to safely target urinary ease, overnight waking, and cellular tissue health in one daily scoop."
        },
        {
          q: "Is there a cure for enlarged prostate?",
          a: "There is no single permanent 'cure' for an enlarged prostate (Benign Prostatic Hyperplasia, or BPH) because prostate enlargement is a natural, progressive consequence of male hormonal shifts as we age. However, the condition can be extremely well-managed, reversed, or kept in check. Standard treatment plans include prescription medications to relieve flow resistance, advanced minimally-invasive outpatient procedures (like UroLift, Rezūm steam therapy, or laser TURP surgery), and clean daily nutritional therapy. Consistently utilizing premium natural formulas like ProstaVive alongside smart dietary habits is a highly effective way to manage bladder urgency, stop frequent midnight waking, and maintain active, long-term prostate gland comfort."
        },
        {
          q: "What is the best way to take ProstaVive?",
          a: "For optimal results, simply mix one scoop of ProstaVive into a glass of water, or your favorite beverage, once a day. This ensures the proprietary blend of ingredients is absorbed efficiently by your body."
        },
        {
          q: "How long will it take to see results?",
          a: "Most men report feeling a difference in energy levels and sleep patterns within the first 14 days. However, for long-term prostate tissue support, we recommend staying consistent for at least 90-180 days."
        },
        {
          q: "Is ProstaVive safe to take with other medications?",
          a: "ProstaVive is made from natural botanical extracts. However, we always recommend consulting with your primary healthcare provider before starting any new supplement to ensure it's right for your specific health profile."
        },
        {
          q: "Where is ProstaVive manufactured?",
          a: "ProstaVive is manufactured right here in the USA in an FDA-registered and GMP-certified facility. We adhere to the highest quality control standards for safety and potency."
        },
        {
          q: "Will I be billed more than once?",
          a: "Absolutely not. This is a one-time payment. There are no hidden subscription fees or auto-ship programs. You only pay for what you order today."
        }
      ].map((faq, i) => /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setActiveFaq(activeFaq === i ? null : i),
            className: "w-full px-8 py-6 md:py-8 text-left flex justify-between items-center hover:bg-slate-50 transition-colors gap-4",
            children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-xl md:text-2xl font-black text-brand-navy uppercase tracking-tight leading-snug", children: faq.q }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1172,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(Plus, { className: `text-blue-500 transition-transform shrink-0 ${activeFaq === i ? "rotate-45" : ""}`, size: 24 }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1173,
                columnNumber: 19
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1168,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: false,
            animate: { height: activeFaq === i ? "auto" : 0, opacity: activeFaq === i ? 1 : 0 },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxDEV("div", { className: "px-8 pb-8 text-slate-800 text-lg md:text-[20px] leading-relaxed font-semibold", children: faq.a }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1180,
              columnNumber: 19
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1175,
            columnNumber: 17
          },
          this
        )
      ] }, i, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 1167,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 1124,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 1119,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 1118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-brand-navy text-white text-center", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl lg:text-7xl font-serif font-black mb-10 uppercase tracking-tighter", children: [
        "Ready to Reclaim Your ",
        /* @__PURE__ */ jsxDEV("span", { className: "text-blue-400", children: "Vitality?" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1193,
          columnNumber: 125
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 1193,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xl md:text-2xl text-blue-100/85 mb-12 max-w-3xl mx-auto font-bold leading-relaxed", children: "Join thousands of men who have restored their confidence and sleep with ProstaVive." }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 1194,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-3 bg-yellow-400 text-black px-12 py-6 rounded-2xl text-2xl md:text-3xl font-black hover:bg-yellow-300 transition-all shadow-2xl shadow-yellow-400/20 group uppercase tracking-tighter", children: [
        "Get ProstaVive Now",
        /* @__PURE__ */ jsxDEV(ArrowRight, { className: "group-hover:translate-x-1 transition-transform" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1197,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 1195,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex items-center justify-center gap-8 opacity-60 grayscale brightness-200", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest", children: [
          /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 18 }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1200,
            columnNumber: 110
          }, this),
          " 180-Day Guarantee"
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1200,
          columnNumber: 14
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest", children: [
          /* @__PURE__ */ jsxDEV(Truck, { size: 18 }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1201,
            columnNumber: 110
          }, this),
          " Fast US Shipping"
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1201,
          columnNumber: 14
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 1199,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 1192,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 1191,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { className: "bg-black text-slate-500 py-32 px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20 border-b border-white/5 pb-20", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-1", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-4xl font-black mb-8 tracking-tighter uppercase", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-blue-400", children: "Prosta" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1212,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-white", children: "Vive" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1213,
              columnNumber: 18
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1211,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm leading-relaxed font-medium mb-10", children: "The breakthrough botanical solution for male vitality and prostate health restoration." }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1215,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-navy transition-colors cursor-pointer text-white", children: /* @__PURE__ */ jsxDEV(Star, { size: 20 }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1217,
            columnNumber: 191
          }, this) }, i, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1217,
            columnNumber: 36
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1216,
            columnNumber: 16
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1210,
          columnNumber: 14
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h5", { className: "text-white font-black uppercase text-xs tracking-widest mb-10", children: "Product Links" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1221,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-6 font-bold text-sm", children: [
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "hover:text-blue-400 transition-colors", children: "Home" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1223,
              columnNumber: 22
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1223,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#review", className: "hover:text-blue-400 transition-colors", onClick: (e) => {
              var _a;
              e.preventDefault();
              (_a = document.getElementById("review")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
            }, children: "Does It Work?" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1224,
              columnNumber: 22
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1224,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "hover:text-blue-400 transition-colors", children: "How It Works" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1225,
              columnNumber: 22
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1225,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "hover:text-blue-400 transition-colors", children: "Ingredients" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1226,
              columnNumber: 22
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1226,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "hover:text-blue-400 transition-colors", children: "Reviews" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1227,
              columnNumber: 22
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1227,
              columnNumber: 18
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1222,
            columnNumber: 16
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1220,
          columnNumber: 14
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h5", { className: "text-white font-black uppercase text-xs tracking-widest mb-10", children: "Legals" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1231,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-6 font-bold text-sm", children: [
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "hover:text-blue-400 transition-colors", children: "Privacy Policy" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1233,
              columnNumber: 22
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1233,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "hover:text-blue-400 transition-colors", children: "Terms & Conditions" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1234,
              columnNumber: 22
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1234,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "hover:text-blue-400 transition-colors", children: "Medical Disclaimer" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1235,
              columnNumber: 22
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1235,
              columnNumber: 18
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: AFFILIATE_LINK, target: "_blank", rel: "noopener noreferrer", className: "hover:text-blue-400 transition-colors", children: "Shipping & Returns" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1236,
              columnNumber: 22
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1236,
              columnNumber: 18
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1232,
            columnNumber: 16
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1230,
          columnNumber: 14
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h5", { className: "text-white font-black uppercase text-xs tracking-widest mb-10", children: "Contact Us" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1240,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-black text-white mb-2", children: "Support@ProstaVive.com" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1241,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-bold opacity-60", children: "1-800-456-7890 (Mon-Fri 9am-6pm EST)" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1242,
            columnNumber: 16
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-8 pt-8 border-t border-white/5", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 20, className: "text-blue-500" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1245,
              columnNumber: 20
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-black uppercase tracking-widest", children: "McAfee Secure Site" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1246,
              columnNumber: 20
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1244,
            columnNumber: 18
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1243,
            columnNumber: 16
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1239,
          columnNumber: 14
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 1209,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] uppercase font-black leading-loose tracking-[0.2em] opacity-30 text-center max-w-5xl mx-auto space-y-8", children: [
        /* @__PURE__ */ jsxDEV("p", { children: "The content provided on this website is for informational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Results may vary from person to person. Always consult with a healthcare professional before starting any new dietary supplement program, especially if you have a pre-existing medical condition." }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1253,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { children: "PROSTAVIVE © 2026. ALL RIGHTS RESERVED WORLDWIDE. PROTECTED BY U.S. AND INTERNATIONAL COPYRIGHT LAWS." }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 1254,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 1252,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 1208,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 1207,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { children: isNotificationVisible && currentNotification && /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        id: "purchase-popup",
        initial: { opacity: 0, y: 50, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 30, scale: 0.95 },
        transition: { type: "spring", stiffness: 300, damping: 25 },
        className: "fixed bottom-6 left-6 right-6 md:right-auto md:w-96 bg-white border border-slate-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-4 flex items-center gap-4 z-[999] backdrop-blur-md bg-white/95",
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0 ring-4 ring-green-500/5", children: /* @__PURE__ */ jsxDEV(CheckCircle2, { size: 24, className: "animate-pulse" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1271,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1270,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5 mb-0.5", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-2 rounded-full bg-green-500 animate-ping" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1275,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] font-black text-green-600 uppercase tracking-widest", children: "Verified Purchase" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1276,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1274,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-bold text-brand-navy leading-snug", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "font-black text-blue-900", children: currentNotification.name }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1279,
                columnNumber: 17
              }, this),
              " from ",
              /* @__PURE__ */ jsxDEV("span", { className: "font-extrabold text-blue-900", children: currentNotification.location }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1279,
                columnNumber: 99
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1278,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-600 mt-0.5", children: [
              "Purchased ",
              /* @__PURE__ */ jsxDEV("span", { className: "font-extrabold text-brand-navy", children: [
                currentNotification.bottles,
                " ",
                currentNotification.bottles === 6 ? "Bottles (Most Popular)" : currentNotification.bottles === 1 ? "Bottle" : "Bottles"
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 1282,
                columnNumber: 27
              }, this),
              " of Prosta Vive"
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1281,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1273,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] font-bold text-slate-400 self-start pt-1 shrink-0", children: currentNotification.time }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 1285,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 1262,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 1260,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/App.tsx",
    lineNumber: 121,
    columnNumber: 5
  }, this);
}
export {
  App as default
};
