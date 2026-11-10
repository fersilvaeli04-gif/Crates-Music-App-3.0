import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
`;

export const Input = styled.input`
  flex-grow: 1;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 0.65rem 0.85rem;
  color: ${({ theme }) => theme.colors.paper};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.95rem;

  &::placeholder {
    color: #6d7386;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.amber};
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.amber};
  color: ${({ theme }) => theme.colors.ink};
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 0.65rem 1.25rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.85;
  }
`;
