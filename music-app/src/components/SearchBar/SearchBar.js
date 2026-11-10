import React, { useState } from 'react';
import { Form, Input, Button } from './SearchBar.styles';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = term.trim();
    if (trimmed) {
      onSearch(trimmed);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Busca un artista (ej. Coldplay)"
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
      <Button type="submit">Buscar</Button>
    </Form>
  );
}

export default SearchBar;
