# Development Handbook

This handbook provides guidance for development work on the EarlyshhWebsite codebase.

## 📋 SESSION RULES

**MANDATORY WORKFLOW:**

1. **Task Completion Protocol**: After completing any task, ALWAYS:
   - Update relevant documentation (CLAUDE.md, SESSION_HISTORY.md, etc.)
   - Mark completed tasks with ✅ and timestamp
   - Provide summary of accomplishments
   - Note any issues or deviations from plan

2. **Coding Standards**: ALWAYS follow these best practices:
   - Use TypeScript with strict typing
   - Follow component naming conventions (PascalCase for components)
   - Write clean, readable code with proper comments only when requested
   - Test changes before marking as complete
   - Follow Next.js App Router conventions
   - Use proper git commit messages

3. **Documentation Requirements**:
   - Update documentation after each completed phase/step
   - Document architectural decisions
   - Note dependencies or blockers discovered
   - Keep progress tracking accurate and current

4. **Quality Assurance**:
   - Run `npm run lint` before committing changes
   - Ensure TypeScript compilation succeeds
   - Test functionality in development environment
   - Follow security best practices (no hardcoded secrets)

5. **Communication Protocol**:
   - Provide clear status updates when completing tasks
   - Explain any deviations from the original plan
   - Ask for clarification if requirements are unclear
   - Report blockers immediately

## 🏗️ ARCHITECTURAL PRINCIPLES

### Component Architecture
```typescript
// Standard component structure
interface ComponentProps {
  // Explicit prop types
}

export function Component({ ...props }: ComponentProps) {
  // Hooks at top
  // Event handlers
  // Render logic
}

export default Component;
```

### Error Handling
```typescript
// Standard error boundary pattern
try {
  await apiCall();
} catch (error) {
  console.error('Operation failed:', error);
  toast.error('Operation failed. Please try again.');
}
```

### File Organization
- Components < 200 lines (decompose if larger)
- Separate data from UI concerns
- Use barrel exports for component directories
- Keep related files together

## 🔒 SECURITY GUIDELINES

1. **Never commit secrets or API keys**
2. **Use environment variables for sensitive data**
3. **Validate and sanitize all user inputs**
4. **Follow OWASP security best practices**
5. **Use proper authentication and authorization**

## 🚀 PERFORMANCE STANDARDS

1. **Lazy load components below the fold**
2. **Optimize images with Next.js Image component**
3. **Minimize bundle size (target < 150KB)**
4. **Use React.memo for pure components**
5. **Implement proper caching strategies**

## 📊 CODE QUALITY METRICS

- **TypeScript Coverage**: 100% (strict mode)
- **Component Size**: < 200 lines per file
- **Build Time**: < 30 seconds
- **Bundle Size**: < 150KB gzipped
- **Lighthouse Score**: > 90 for all metrics