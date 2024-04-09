import{_ as s,c as e,o as t,a4 as i}from"./chunks/framework.Bl20_RFa.js";const m=JSON.parse('{"title":"tm_cidrhost - Functions - Configuration Language","description":"The tm_cidrhost function calculates a full host IP address within a given\\nIP network address prefix.","frontmatter":{"title":"tm_cidrhost - Functions - Configuration Language","description":"The tm_cidrhost function calculates a full host IP address within a given\\nIP network address prefix."},"headers":[],"relativePath":"cli/code-generation/functions/tm_cidrhost.md","filePath":"cli/code-generation/functions/tm_cidrhost.md"}'),a={name:"cli/code-generation/functions/tm_cidrhost.md"},n=i(`<h1 id="tm-cidrhost-function" tabindex="-1"><code>tm_cidrhost</code> Function <a class="header-anchor" href="#tm-cidrhost-function" aria-label="Permalink to &quot;\`tm_cidrhost\` Function&quot;">​</a></h1><p><code>tm_cidrhost</code> calculates a full host IP address for a given host number within a given IP network address prefix.</p><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tm_cidrhost</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(prefix, hostnum)</span></span></code></pre></div><p><code>prefix</code> must be given in CIDR notation, as defined in <a href="https://tools.ietf.org/html/rfc4632#section-3.1" target="_blank" rel="noreferrer">RFC 4632 section 3.1</a>.</p><p><code>hostnum</code> is a whole number that can be represented as a binary integer with no more than the number of digits remaining in the address after the given prefix. For more details on how this function interprets CIDR prefixes and populates host numbers, see the worked example for <a href="./tm_cidrsubnet"><code>tm_cidrsubnet</code></a>.</p><p>Conventionally host number zero is used to represent the address of the network itself and the host number that would fill all the host bits with binary 1 represents the network&#39;s broadcast address. These numbers should generally not be used to identify individual hosts except in unusual situations, such as point-to-point links.</p><p>This function accepts both IPv6 and IPv4 prefixes, and the result always uses the same addressing scheme as the given prefix.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>As a historical accident, this function interprets IPv4 address octets that have leading zeros as decimal numbers, which is contrary to some other systems which interpret them as octal. We have preserved this behavior for backward compatibility, but recommend against relying on this behavior.</p></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_cidrhost(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;10.12.112.0/20&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">10.12.112.16</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_cidrhost(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;10.12.112.0/20&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 268</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">10.12.113.12</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_cidrhost(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;fd00:fd12:3456:7890:00a2::/72&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 34</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fd00:fd12:3456:7890::22</span></span></code></pre></div><h2 id="related-functions" tabindex="-1">Related Functions <a class="header-anchor" href="#related-functions" aria-label="Permalink to &quot;Related Functions&quot;">​</a></h2><ul><li><a href="./tm_cidrsubnet"><code>tm_cidrsubnet</code></a> calculates a subnet address under a given network address prefix.</li></ul>`,12),o=[n];function h(r,l,d,c,p,u){return t(),e("div",null,o)}const g=s(a,[["render",h]]);export{m as __pageData,g as default};