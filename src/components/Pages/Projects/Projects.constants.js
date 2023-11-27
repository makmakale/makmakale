import calcImage from '@/assets/images/my-projects/calculator-small.jpg';
import countdownImage from '@/assets/images/my-projects/countdown-small.jpg';
import portfolioImage from '@/assets/images/my-projects/portfolio-small.jpg';
import todoImage from '@/assets/images/my-projects/todo-small.jpg';

const projectsSetup = [
  {
    title: 'Portfolio',
    img: portfolioImage,
    description: 'You are currently in. But you can view source code by the link below.',
    sourceLink: 'https://github.com/makmakale/portfolio',
  },
  {
    title: 'ToDo Board',
    img: todoImage,
    description: 'To Do list but in Jira style with D&D.',
    viewLink: 'https://makmakale.github.io/todo-board/',
    sourceLink: 'https://github.com/makmakale/todo-board',
  },
  {
    title: 'Ney Year Countdown',
    img: countdownImage,
    description: 'Simple countdown to New Year.',
    viewLink: 'https://makmakale.github.io/ny-countdown/',
    sourceLink: 'https://github.com/makmakale/ny-countdown',
  },
  {
    title: 'Calculator',
    img: calcImage,
    description: 'Simple calculator based on Windows calculator but with basic actions (old version).',
    viewLink: 'https://makmakale.github.io/calculator/',
    sourceLink: 'https://github.com/makmakale/calculator',
  },
];

export const projects = projectsSetup.map((project, index) => ({ ...project, id: index + 1 }));
