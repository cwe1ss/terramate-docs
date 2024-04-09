import{_ as e,c as t,o as s,a4 as a}from"./chunks/framework.Bl20_RFa.js";const u=JSON.parse('{"title":"tm_cidrnetmask - Functions - Configuration Language","description":"The tm_cidrnetmask function converts an IPv4 address prefix given in CIDR\\nnotation into a subnet mask address.","frontmatter":{"title":"tm_cidrnetmask - Functions - Configuration Language","description":"The tm_cidrnetmask function converts an IPv4 address prefix given in CIDR\\nnotation into a subnet mask address."},"headers":[],"relativePath":"cli/code-generation/functions/tm_cidrnetmask.md","filePath":"cli/code-generation/functions/tm_cidrnetmask.md"}'),i={name:"cli/code-generation/functions/tm_cidrnetmask.md"},n=a('<h1 id="tm-cidrnetmask-function" tabindex="-1"><code>tm_cidrnetmask</code> Function <a class="header-anchor" href="#tm-cidrnetmask-function" aria-label="Permalink to &quot;`tm_cidrnetmask` Function&quot;">​</a></h1><p><code>tm_cidrnetmask</code> converts an IPv4 address prefix given in CIDR notation into a subnet mask address.</p><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tm_cidrnetmask</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(prefix)</span></span></code></pre></div><p><code>prefix</code> must be given in IPv4 CIDR notation, as defined in <a href="https://tools.ietf.org/html/rfc4632#section-3.1" target="_blank" rel="noreferrer">RFC 4632 section 3.1</a>.</p><p>The result is a subnet address formatted in the conventional dotted-decimal IPv4 address syntax, as expected by some software.</p><p>CIDR notation is the only valid notation for IPv6 addresses, so <code>cidrnetmask</code> produces an error if given an IPv6 address.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>As a historical accident, this function interprets IPv4 address octets that have leading zeros as decimal numbers, which is contrary to some other systems which interpret them as octal. We have preserved this behavior for backward compatibility, but recommend against relying on this behavior.</p></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_cidrnetmask(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;172.16.0.0/12&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">255.240.0.0</span></span></code></pre></div>',9),o=[n];function r(c,d,l,p,h,m){return s(),t("div",null,o)}const _=e(i,[["render",r]]);export{u as __pageData,_ as default};