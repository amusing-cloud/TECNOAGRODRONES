# TECNOAGRO — Site Institucional

Landing page estática (HTML + CSS + JS puro) para a **TECNOAGRO — Serviços Agrícolas com Drones**.

## 📁 Estrutura do Projeto

```
tecnoagro_site/
├── index.html          # Estrutura da página
├── style.css           # Estilos responsivos
├── script.js           # Animações + formulário (EmailJS)
├── README.md           # Este ficheiro
└── assets/
    └── images/
        ├── logo.jpeg
        ├── drone1.jpeg
        └── drone2.jpeg
```

## 🚀 Como abrir localmente

1. Abre a pasta `tecnoagro_site/` no **VS Code**.
2. Instala a extensão **Live Server** (recomendado).
3. Clica com o botão direito em `index.html` → **Open with Live Server**.

Em alternativa, basta abrir `index.html` diretamente no navegador.

---

## 📧 Configurar EmailJS (envio do formulário)

O formulário envia emails para **tecnoagroservicosagricolas@gmail.com** usando o serviço gratuito [EmailJS](https://www.emailjs.com/) (até 200 emails/mês grátis).

### Passo a passo

1. **Criar conta** em https://www.emailjs.com/ (gratuita).
2. **Adicionar um Email Service**:
   - Painel → **Email Services** → **Add New Service**.
   - Escolhe **Gmail** (ou outro fornecedor).
   - Conecta a conta `tecnoagroservicosagricolas@gmail.com`.
   - Copia o **Service ID** (ex: `service_abc123`).
3. **Criar um Email Template**:
   - Painel → **Email Templates** → **Create New Template**.
   - Em **To Email** coloca: `tecnoagroservicosagricolas@gmail.com` (ou `{{to_email}}`).
   - Em **From Name**: `{{from_name}}`.
   - Em **Reply To**: `{{from_email}}`.
   - No corpo do email coloca por exemplo:
     ```
     Novo contacto do site TECNOAGRO

     Nome: {{from_name}}
     Email: {{from_email}}
     Telefone: {{phone}}

     Mensagem:
     {{message}}
     ```
   - Guarda e copia o **Template ID** (ex: `template_xyz789`).
4. **Copiar a Public Key**:
   - Painel → **Account** → **General** → copia a **Public Key**.
5. **Editar `script.js`** e substituir os três valores no topo:
   ```js
   const EMAILJS_PUBLIC_KEY  = "a_tua_public_key";
   const EMAILJS_SERVICE_ID  = "service_abc123";
   const EMAILJS_TEMPLATE_ID = "template_xyz789";
   ```
6. Guarda, recarrega a página e testa o formulário ✅.

---

## 🌐 Deploy no GitHub Pages

1. Cria um repositório novo no GitHub (ex: `tecnoagro-site`).
2. No terminal, dentro da pasta do projeto:
   ```bash
   git init
   git add .
   git commit -m "Versão inicial do site TECNOAGRO"
   git branch -M main
   git remote add origin https://github.com/<TEU-USER>/tecnoagro-site.git
   git push -u origin main
   ```
3. No GitHub → **Settings** → **Pages** → em *Source* escolhe **main** / **/ (root)** → **Save**.
4. Em poucos segundos o site fica disponível em:
   `https://<TEU-USER>.github.io/tecnoagro-site/`

> 💡 Dica: Para domínio próprio, em **Pages → Custom domain** indica o teu domínio e cria um registo CNAME no DNS.

---

## 🎨 Personalização rápida

- **Cores principais** em `style.css` (variáveis `:root`):
  - `--green: #6B8E23` (verde principal)
  - `--black: #0a0a0a`
- **Textos**: edita diretamente em `index.html`.
- **Imagens**: substitui os ficheiros em `assets/images/` mantendo os mesmos nomes.

---

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 (Flexbox, Grid, variáveis, animações)
- JavaScript ES6+ (IntersectionObserver, Fetch)
- [EmailJS](https://www.emailjs.com/) (envio do formulário)
- [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins)

---

© TECNOAGRO — Serviços Agrícolas.
