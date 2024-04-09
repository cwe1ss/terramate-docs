import{_ as s,c as t,o as i,a4 as e}from"./chunks/framework.Bl20_RFa.js";const u=JSON.parse('{"title":"tm_length - Functions - Configuration Language","description":"The tm_length function determines the length of a collection or string.","frontmatter":{"title":"tm_length - Functions - Configuration Language","description":"The tm_length function determines the length of a collection or string."},"headers":[],"relativePath":"cli/code-generation/functions/tm_length.md","filePath":"cli/code-generation/functions/tm_length.md"}'),n={name:"cli/code-generation/functions/tm_length.md"},a=e(`<h1 id="tm-length-function" tabindex="-1"><code>tm_length</code> Function <a class="header-anchor" href="#tm-length-function" aria-label="Permalink to &quot;\`tm_length\` Function&quot;">​</a></h1><p><code>tm_length</code> determines the length of a given list, map, or string.</p><p>If given a list or map, the result is the number of elements in that collection. If given a string, the result is the number of characters in the string.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_length([]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_length([</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;a&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;b&quot;]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_length(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot; = &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">b</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;})</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_length(&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hello</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">5</span></span></code></pre></div><p>When given a string, the result is the number of characters, rather than the number of bytes or Unicode sequences that form them:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_length(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;👾🕹️&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2</span></span></code></pre></div><p>A &quot;character&quot; is a <em>grapheme cluster</em>, as defined by <a href="http://unicode.org/reports/tr29/" target="_blank" rel="noreferrer">Unicode Standard Annex #29</a>. Note that remote APIs may have a different definition of &quot;character&quot; for the purpose of length limits on string arguments;</p>`,8),h=[a];function l(o,p,r,c,g,k){return i(),t("div",null,h)}const m=s(n,[["render",l]]);export{u as __pageData,m as default};