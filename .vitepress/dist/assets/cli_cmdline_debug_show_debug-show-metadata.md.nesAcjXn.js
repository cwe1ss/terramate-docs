import{_ as a,c as e,o as t,a4 as s}from"./chunks/framework.Bl20_RFa.js";const u=JSON.parse(`{"title":"terramate debug show metadata - Command","description":"Debug stack metadata by dumping the available variables and the corresponding values on the stack level by using the 'terramate debug show metadata' command.","frontmatter":{"title":"terramate debug show metadata - Command","description":"Debug stack metadata by dumping the available variables and the corresponding values on the stack level by using the 'terramate debug show metadata' command."},"headers":[],"relativePath":"cli/cmdline/debug/show/debug-show-metadata.md","filePath":"cli/cmdline/debug/show/debug-show-metadata.md"}`),i={name:"cli/cmdline/debug/show/debug-show-metadata.md"},d=s('<h1 id="metadata" tabindex="-1">Metadata <a class="header-anchor" href="#metadata" aria-label="Permalink to &quot;Metadata&quot;">​</a></h1><p>The <code>terramate debug show metadata</code> command prints information stacks and their metadata in the current directory recursively.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p><code>terramate debug show metadata</code></p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>List all stacks and their metadata in the current directory recursively:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> debug</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> metadata</span></span></code></pre></div><p>Explicitly change the working directory:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> debug</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> metadata</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --chdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path/to/directory</span></span></code></pre></div>',9),h=[d];function n(r,l,o,c,p,m){return t(),e("div",null,h)}const k=a(i,[["render",n]]);export{u as __pageData,k as default};