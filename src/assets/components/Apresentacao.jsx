function Apresentacao() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Bem-vinda, Natália!');
  };

  return (
    <div>
      <h1>Natália Costa Moura</h1>
      <p>Idade: 19 anos</p>
      <p>Descrição: Desenvolvedora em formação apaixonada por tecnologia.</p>
      <button onClick={handleClick}>Clique aqui</button>
      <p>{message}</p>
    </div>
  );
}

export default Apresentacao;
