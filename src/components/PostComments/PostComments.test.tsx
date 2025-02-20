import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComments', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<Post />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  it('Deve permitir adicionar dois comentários', () => {
    render(<Post />);

    const input = screen.getByTestId('comment-input');
    const button = screen.getByTestId('submit-button');
    const commentList = screen.getByTestId('comments-list');

    fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: 'Segundo comentário' } });
    fireEvent.click(button);

    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();

    expect(commentList).toContainElement(
      screen.getByText('Primeiro comentário'),
    );
    expect(commentList).toContainElement(
      screen.getByText('Segundo comentário'),
    );
  });
});
