const Header = () => (
  <header>
    <nav>
      {['Home', 'Quem somos', 'Instrumentos', 'Endereço', 'Contato'].map((item) => (
        <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
      ))}
    </nav>
  </header>
);

export default Header;