import { ComponentProps } from 'react';
import { createRoot } from 'react-dom/client';
import Message from './index';

type Props = ComponentProps<typeof Message> & {
  singleton?: boolean;
};

let container: HTMLDivElement | null;

function show(props: Props) {
  const { singleton = false } = props;

  if (singleton) {
    container?.remove();
  }
  // 1. create a container
  container = document.createElement('div');

  // 2. append to the body
  document.body.appendChild(container);

  // 3. render Message to the container
  createRoot(container).render(<Message {...props} />);
}

export default { show };
