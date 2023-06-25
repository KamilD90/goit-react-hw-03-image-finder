import React, { useState } from 'react';
import { fetchImages } from 'components/API/fetchImages';

const SearchBar = onSubmit => {
  return (
    <header class="searchbar">
      <form class="form" onSubmit={fetchImages}>
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
