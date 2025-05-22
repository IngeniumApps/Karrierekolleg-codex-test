# Karriere Kolleg – Projektstruktur

Dies ist der strukturierte Plan zur Umsetzung der Landingpage auf Basis der Designvorlage und der Vorgaben aus dem Dokument _Konzept Landingpage Kollegs_07052025.docx_.

---

## 🔁 Zielstruktur der Landingpage

| Abschnitt               | Inhalt (aus Konzept)                           | Komponente                 |
| ----------------------- | ---------------------------------------------- | -------------------------- |
| Hero                    | Slogan + Call to Action                        | `HeroSection.astro`        |
| Was ist ein Kolleg?     | Textblock (Ausbildungsform, Einleitung)        | `IntroSection.astro`       |
| Vorteile                | Liste + Icons (USP)                            | `BenefitsSection.astro`    |
| Aufbau & Formen         | Kurzbeschreibung (Vollzeit / Berufsbegleitend) | `StructureSection.astro`   |
| Kompetenzen             | Soft & Hard Skills, berufliche Skills          | `SkillsSection.astro`      |
| Anerkennung / Bachelor  | Textblock über NQR6, Anrechenbarkeit etc.      | `RecognitionSection.astro` |
| Weiterführendes Studium | Link zu FH-Aufbaustudium, Text & Grafik        | `StudyPathSection.astro`   |
| Alle Kollegs & Links    | Auflistung mit Logos oder Karten der Kollegs   | `CollegesGrid.astro`       |
| Kontakt                 | Formular oder einfache Kontaktsektion          | `ContactSection.astro`     |

---

## 📁 Projektstruktur

```
src/
├── pages/
│   └── index.astro
│   └── impressum.astro
│   └── datenschutz.astro
│   └── 404.astro
├── layouts/
│   └── MainLayout.astro
├── components/
│   └── DesktopNavigation.astro
│   └── HeroSection.astro
│   └── IntroSection.astro
│   └── BenefitsSection.astro
│   └── StructureSection.astro
│   └── SkillsSection.astro
│   └── RecognitionSection.astro
│   └── StudyPathSection.astro
│   └── CollegesGrid.astro
│   └── ContactSection.astro
```

---

## 🧭 Navigation (ID-basiert)

Die Navigation greift auf die IDs der Sektionen zurück, z. B.:

```html
<a href="#hero">Start</a>
<a href="#angebote">Angebote</a>
<a href="#kollegs">Kollegs</a>
<a href="#kontakt">Kontakt</a>
```

---

## 🎯 Ziel

- Barrierearme, responsive Landingpage
- Navigation mit Sprungmarken
- Moderne, modulare Struktur mit Astro + React
- Hosting auf GitHub Pages & CDX
- Inhalte vollständig ausrichtbar nach Designvorlage & Textkonzept

---
