import { describe, it, expect } from 'vitest';
import { render, screen } from '../test/test-utils';
import Home from './page';

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: /to get started, edit the page\.tsx file\./i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the Next.js logo', () => {
    render(<Home />);
    const logo = screen.getByAltText('Next.js logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders links to templates and learning center', () => {
    render(<Home />);
    const templatesLink = screen.getByRole('link', { name: /templates/i });
    const learningLink = screen.getByRole('link', { name: /learning/i });

    expect(templatesLink).toBeInTheDocument();
    expect(templatesLink).toHaveAttribute(
      'href',
      expect.stringContaining('vercel.com/templates'),
    );

    expect(learningLink).toBeInTheDocument();
    expect(learningLink).toHaveAttribute(
      'href',
      expect.stringContaining('nextjs.org/learn'),
    );
  });

  it('renders deployment and documentation links', () => {
    render(<Home />);
    const deployLink = screen.getByRole('link', { name: /deploy now/i });
    const docsLink = screen.getByRole('link', { name: /documentation/i });

    expect(deployLink).toBeInTheDocument();
    expect(deployLink).toHaveAttribute(
      'href',
      expect.stringContaining('vercel.com/new'),
    );
    expect(deployLink).toHaveAttribute('target', '_blank');
    expect(deployLink).toHaveAttribute('rel', 'noopener noreferrer');

    expect(docsLink).toBeInTheDocument();
    expect(docsLink).toHaveAttribute(
      'href',
      expect.stringContaining('nextjs.org/docs'),
    );
    expect(docsLink).toHaveAttribute('target', '_blank');
  });

  it('has proper semantic structure', () => {
    render(<Home />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});

