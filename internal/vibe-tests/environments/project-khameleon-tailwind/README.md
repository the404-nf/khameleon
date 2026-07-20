# Khameleon + Tailwind CSS

This project uses Khameleon components with Tailwind CSS. Use the CLI to look up component props and usage before writing code:

```bash
npx khameleon component --list              # list all available components
npx khameleon component Button              # look up props, variants, and usage
npx khameleon component IconButton          # each component has its own entry
```

Components use:

- Tailwind CSS utility classes for layout and custom styling
- Khameleon Tailwind bridge tokens (`bg-surface`, `text-primary`) for design tokens
- React 19

## Import Pattern

Each component is imported from its own subpath:

```tsx
import {Button} from '@khameleon/core/Button';
import {IconButton} from '@khameleon/core/IconButton';
import {Card} from '@khameleon/core/Card';
import {Text, Heading} from '@khameleon/core/Text';
import {ToggleButton, ToggleButtonGroup} from '@khameleon/core/ToggleButton';
import {Theme} from '@khameleon/core/theme';
```

## Event Handlers

Khameleon is a React DOM library. Use standard React DOM event handler props such as
`onClick`, `onChange`, and `onKeyDown`. For button activation, use `onClick`:

```tsx
<Button label="Save" onClick={() => handleSave()} />
```

Do NOT use cross-platform activation props like `onPress` unless a component
explicitly documents them.
