import{_ as a,c as e,o as i,a4 as t}from"./chunks/framework.Bl20_RFa.js";const g=JSON.parse('{"title":"On-boarding: OpenTofu On-boarding","description":"Import your existing OpenTofu Setup to Terramate","frontmatter":{"title":"On-boarding: OpenTofu On-boarding","description":"Import your existing OpenTofu Setup to Terramate","outline":[2,3]},"headers":[],"relativePath":"cli/on-boarding/opentofu.md","filePath":"cli/on-boarding/opentofu.md"}'),s={name:"cli/on-boarding/opentofu.md"},n=t('<h1 id="start-with-existing-opentofu-projects" tabindex="-1">Start with existing OpenTofu Projects <a class="header-anchor" href="#start-with-existing-opentofu-projects" aria-label="Permalink to &quot;Start with existing OpenTofu Projects&quot;">​</a></h1><h2 id="import-existing-opentofu-stacks" tabindex="-1">Import Existing OpenTofu Stacks <a class="header-anchor" href="#import-existing-opentofu-stacks" aria-label="Permalink to &quot;Import Existing OpenTofu Stacks&quot;">​</a></h2><p>To create Terramate Stacks from existing OpenTofu Root Modules run the following command.</p><p>At the moment we support OpenTofu over the Terraform Integration as most details are still identical.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --all-terraform</span></span></code></pre></div><p>This command will detect existing OpenTofu Root modules and create a stack configuration in them.</p><h2 id="terramate-features-for-opentofu-repositories" tabindex="-1">Terramate Features for OpenTofu Repositories <a class="header-anchor" href="#terramate-features-for-opentofu-repositories" aria-label="Permalink to &quot;Terramate Features for OpenTofu Repositories&quot;">​</a></h2><p>All Terramate features are now available to your team.</p><p>The following set of features highlights some special benefits:</p><ul><li>Use Terramate Change Detection to orchestrate OpenTofu in an efficient way</li><li>Execute <strong>any</strong> command within stacks imported from opentofu configuration.</li><li>Run OpenTofu in any CI/CD following the Terramate Automation Blueprints and examples.</li><li>Make use of Terramates advanced Code Generation and Globals to share data more easily.</li><li>Synchronize deployments, drift runs, and previews to <strong>Terramate Cloud</strong> and get <ul><li>Visibility of the Health of all OpenTofu Configurations over multiple repositories</li><li>Drift Detection in all Stacks</li><li>Pull Request Previews for actual changes</li><li>Notifications on deployment failures or newly detected drifts</li><li>Advanced collaboration and alert routing</li></ul></li></ul><h2 id="run-opentofu-commands" tabindex="-1">Run OpenTofu Commands <a class="header-anchor" href="#run-opentofu-commands" aria-label="Permalink to &quot;Run OpenTofu Commands&quot;">​</a></h2><h3 id="list-all-stacks" tabindex="-1">List all Stacks <a class="header-anchor" href="#list-all-stacks" aria-label="Permalink to &quot;List all Stacks&quot;">​</a></h3><p>Any Terramate CLI Feature is now available in your Stacks.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span></code></pre></div><h3 id="init-opentofu" tabindex="-1">Init OpenTofu <a class="header-anchor" href="#init-opentofu" aria-label="Permalink to &quot;Init OpenTofu&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tofu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><h3 id="create-a-opentofu-plan-in-parallel" tabindex="-1">Create a OpenTofu Plan in parallel <a class="header-anchor" href="#create-a-opentofu-plan-in-parallel" aria-label="Permalink to &quot;Create a OpenTofu Plan in parallel&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --parallel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tofu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plan</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -outfile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plan.otplan</span></span></code></pre></div><h3 id="apply-a-opentofu-plan-in-changed-stacks" tabindex="-1">Apply a OpenTofu Plan in Changed Stacks <a class="header-anchor" href="#apply-a-opentofu-plan-in-changed-stacks" aria-label="Permalink to &quot;Apply a OpenTofu Plan in Changed Stacks&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --changed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tofu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -outfile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plan.otplan</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -auto-approve</span></span></code></pre></div>',20),o=[n];function l(r,p,h,d,u,c){return i(),e("div",null,o)}const f=a(s,[["render",l]]);export{g as __pageData,f as default};
