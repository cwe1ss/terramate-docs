import{_ as s,c as t,o as e,a4 as i}from"./chunks/framework.Bl20_RFa.js";const m=JSON.parse('{"title":"tm_setunion - Functions - Configuration Language","description":"The tm_setunion function takes multiple sets and produces a single set\\ncontaining the elements from all of the given sets.","frontmatter":{"title":"tm_setunion - Functions - Configuration Language","description":"The tm_setunion function takes multiple sets and produces a single set\\ncontaining the elements from all of the given sets."},"headers":[],"relativePath":"cli/code-generation/functions/tm_setunion.md","filePath":"cli/code-generation/functions/tm_setunion.md"}'),n={name:"cli/code-generation/functions/tm_setunion.md"},a=i(`<h1 id="tm-setunion-function" tabindex="-1"><code>tm_setunion</code> Function <a class="header-anchor" href="#tm-setunion-function" aria-label="Permalink to &quot;\`tm_setunion\` Function&quot;">​</a></h1><p>The <code>tm_setunion</code> function takes multiple sets and produces a single set containing the elements from all of the given sets. In other words, it computes the <a href="https://en.wikipedia.org/wiki/Union_(set_theory)" target="_blank" rel="noreferrer">union</a> of the sets.</p><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tm_setunion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sets</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_setunion([</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;a&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;b&quot;],</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;c&quot;],</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;d&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;d&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>The given arguments are converted to sets, so the result is also a set and the ordering of the given elements is not preserved.</p><h2 id="related-functions" tabindex="-1">Related Functions <a class="header-anchor" href="#related-functions" aria-label="Permalink to &quot;Related Functions&quot;">​</a></h2><ul><li><a href="./tm_contains"><code>tm_contains</code></a> tests whether a given list or set contains a given element value.</li><li><a href="./tm_setintersection"><code>tm_setintersection</code></a> computes the <em>intersection</em> of multiple sets.</li><li><a href="./tm_setproduct"><code>tm_setproduct</code></a> computes the <em>Cartesian product</em> of multiple sets.</li><li><a href="./tm_setsubtract"><code>tm_setsubtract</code></a> computes the <em>relative complement</em> of two sets</li></ul>`,8),o=[a];function l(h,p,r,c,d,u){return e(),t("div",null,o)}const g=s(n,[["render",l]]);export{m as __pageData,g as default};
