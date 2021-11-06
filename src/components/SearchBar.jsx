export default function SearchBar({ handleInput, search }) {
  return (
    <section className='searchBox-wrapper'>
      <input
        type='text'
        placeholder='Search for a movie...'
        className='searchBox'
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
}
