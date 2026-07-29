# FE-05 Accessibility Notes

## Comparison with shadcn/ui

After comparing my custom components with the generated shadcn/ui components, I found these differences:

### Modal Dialog

- My modal uses React `useState`, `useRef`, and `useEffect` to manually manage opening, closing, focus, and the Escape key.
- shadcn/ui uses Base UI's Dialog components, which automatically handle focus management and accessibility.
- My modal is a single component, while shadcn splits the dialog into reusable parts such as Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, and DialogFooter.
- shadcn includes a backdrop (overlay), animations, and a built-in close button, while my implementation uses simple inline styles without animations.

### Tabs

- My tabs manage state manually using `useState` and keyboard navigation using custom `ArrowLeft` and `ArrowRight` handlers.
- shadcn uses Base UI Tabs components that provide accessibility behaviour through reusable components.
- My implementation contains all logic inside one component, while shadcn separates the functionality into Tabs, TabsList, TabsTrigger, and TabsContent.
- shadcn provides built-in styling, focus states, and reusable variants, while my tabs use simple inline CSS.

## What I Learned

- Building accessible components manually helped me understand ARIA roles, keyboard navigation, and focus management.
- shadcn/ui provides reusable, accessible components that reduce the amount of code I need to write.
- Comparing my implementation with shadcn helped me understand how production-ready component libraries are structured.