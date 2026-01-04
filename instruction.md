Refined Code Standards & Instructions
For a professional, AI-friendly, and consistent codebase, use these refined guidelines:

Design Benchmark: Always reference industry leaders (e.g., Clear Pani) to implement high-end, modern UI patterns (white space, crisp typography, and high-quality imagery).

Token-Based Styling: Strictly use values defined in tailwind.config.js. Never hardcode hex values or arbitrary spacing unless absolutely necessary.

Example: Use text-brand-blue or p-section-spacing instead of text-[#0066FF] or p-[80px].

Responsive Architecture: Use a "Mobile-First" approach. Every component must be tested for responsiveness using Tailwind’s prefix system (sm:, md:, lg:, xl:).

Semantic HTML & Accessibility: Use correct tags (<header>, <main>, <section>, <footer>, <article>) and ensure alt text for images and aria-labels for buttons are present to help AI and Screen Readers.

Modular Reusability: Break UI into small, reusable React/Next.js components. Extract repetitive logic into custom hooks or utility functions.

Goal is:

Consistency: Maintain it across codebase.
