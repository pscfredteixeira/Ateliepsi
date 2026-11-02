# Ateliê — Proposta 2 (versão clara)

Esta é uma experiência **independente** de redesign da plataforma Ateliê de Estudos em Psicanálise. O código do projeto original continua no repositório [Atelie](https://github.com/pscfredteixeira/Atelie) e **não foi modificado** nesta etapa.

## Direção visual

A **Proposta 1** foi preservada como referência conceitual anterior. Esta versão implementa a **Proposta 2 clara**, escolhida para seguir adiante:

- Fundo creme de baixa saturação e áreas de conteúdo claras.
- Navegação lateral grafite, com seleção em laranja queimado.
- Roxo nos botões e links, detalhes em lavanda.
- Tipografia editorial para títulos; fontes de interface para navegação e conteúdo.
- Arte de capa original em SVG, com colagem de inspiração escultórica e geométrica.
- Design responsivo para desktop, tablet e celular.

## O que funciona neste protótipo

- Página inicial e navegação por hash.
- Catálogo com pesquisa e filtros.
- Páginas dos cursos com a organização real dos módulos.
- Prévia textual de cinco aulas, com indicação explícita de que não é o conteúdo completo.
- Trilhas de estudo, referências bibliográficas e seção explicativa.
- Salvar ou retirar cursos dos favoritos com armazenamento **local**, neste navegador.
- Menu para dispositivos móveis, teclado e atributos de acessibilidade básicos.

## Conteúdo

Os títulos, a estrutura dos módulos e a disponibilidade das aulas seguem os arquivos públicos do Ateliê original consultados em 1º de novembro de 2026. O catálogo contém:

1. **Introdução à Psicanálise:** 2 aulas existentes, 6 outras em preparação.
2. **Formação Freudiana:** programa de 10 módulos com aulas em preparação.
3. **Fundamentos da Psicanálise:** 3 aulas demonstrativas, ainda sujeitas a revisão.

A navegação e as prévias **não significam que o motor de aulas, os exercícios, os perfis de professor/aluno, a autenticação, os certificados ou o sistema de progresso tenham sido migrados**. Não há login real, banco de dados ou pagamentos.

## Executar localmente

É um protótipo estático em HTML, CSS e JavaScript sem etapa de compilação.

```bash
python -m http.server 8000
```

Abra `http://localhost:8000/` no navegador.

## Próximos passos

1. Revisar a interface no navegador e ajustar composição, tipografia e responsividade.
2. Validar a navegação com estudantes e professores.
3. Planejar a migração do conteúdo, motor de aulas e recursos editoriais do repositório original.
4. Testar acessibilidade e comportamento dos formulários e dos recursos persistentes.

A proposta foi isolada justamente para podermos testar visuais novos sem comprometer a versão anterior.
