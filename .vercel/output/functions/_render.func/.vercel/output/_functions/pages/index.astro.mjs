import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderHead, b as createAstro } from '../chunks/astro/server_-bmkZXVn.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="/src/styles/"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Chivo+Mono:ital,wght@0,100..900;1,100..900&family=Oxanium:wght@200..800&display=swap" rel="stylesheet"><link rel="icon" href="/src/images/fPerfil.png" type="image/png"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"><title>Linktree</title>${renderHead()}</head> <body> <div class="profile-container"> <img src="/src/images/fPerfil.png" alt="Foto de perfil" class="profile-image"> </div> <div class="linktree"> <h1>Proyectos Julian Gelvez</h1> <a href="https://festivalmusicafgga.netlify.app/" class="link-button" target="_blank">Festival de Música</a> <a href="https://usafemvip.com/" class="link-button" target="_blank">UsafemVIP </a> <a href="https://jcmayorga.com/" class="link-button" target="_blank">Constructora JC Mayorga</a> <a href="https://solucionesactiva.com/" class="link-button" target="_blank">Soluciones Activa</a> <a href="https://zetarquitecturayurbanismo.com/" class="link-button" target="_blank">Zeta Arquitectura</a> </div> <div class="icons"> <a href="https://www.linkedin.com/in/julian-gelvez-p/"><i class="fa-brands fa-linkedin-in"></i></a> <a href="https://www.tiktok.com/@julian.gelvez"><i class="fa-brands fa-tiktok"></i></a> <a href="https://x.com/juliangelvezp"><i class="fa-brands fa-twitter"></i></a> </div> </body></html>`;
}, "C:/Users/USUARIO/my-siteweb/src/pages/index.astro", void 0);

const $$file = "C:/Users/USUARIO/my-siteweb/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
