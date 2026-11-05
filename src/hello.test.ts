import { describe, expect, it } from 'vitest';
import { hello } from './hello.ts';

describe('hello', () => {
  it('greets by name', () => {
    expect(hello('Anton')).toBe('Hello, Anton');
  });

  it('greets the world by default', () => {
    expect(hello()).toBe('Hello, World');
  });
});
